function displayMap() {
  const libraryCatalog = new Map([
    ["book1", "A Tale of Two Cities"],
    ["book2", "To Kill a Mockingbird"],
    ["book3", "Little Women"],
  ]);

  // display contents of map
  for (let [key, value] of libraryCatalog.entries()) {
    console.log(key + " : " + value);
  }
  // display contents of map
  libraryCatalog.forEach((value, key) => console.log(key + " : " + value));
}

function countMap() {
  const sentence = "Once upon a time in a faraway library";
  const letterCount = new Map();
  for (const letter of sentence) {
    if (/[a-zA-Z]/.test(letter)) {
      let l = letter.toLowerCase();
      letterCount.set(l, (letterCount.get(l) || 0) + 1);
    }
  }
  letterCount.forEach((value, key) => console.log(key + " : " + value));

  let sum = 0;
  for (const val of letterCount.values()) {
    sum += val;
  }
  console.log(`Total Letters Counted: ${sum}`);
  console.log(`Unique Letters: ${letterCount.size}`);
  console.log(`Highest Letter Count: ${Math.max(...letterCount.values())}`);
  console.log(`Lowest Letter Count: ${Math.min(...letterCount.values())}`);
  console.log(`Average Letter Count: ${(sum / letterCount.size).toFixed(2)}`);
}

function parseLog() {
  let logs = "1 solve 50, 2 solve 60, 1 fail, 3 solve 40, 2 fail, 3 solve 70";
  let studentLog = new Map();
  let loggedAttempts = logs.split(", ");
  let print = [];

  for (const log of loggedAttempts) {
    let info = log.split(" ");
    let id = info[0];
    let action = info[1];
    let scored = Number(info[2] || 0);
    let studentRecord = studentLog.get(id) || {
      score: 0,
      successfulAttempts: 0,
      failedAttempts: 0,
    };
    if (action == "solve") {
      studentLog.set(id, {
        ...studentRecord,
        score: studentRecord.score + scored,
        successfulAttempts: studentRecord.successfulAttempts + 1,
      });
    } else {
      studentLog.set(id, {
        ...studentRecord,
        failedAttempts: studentRecord.failedAttempts + 1,
      });
    }
  }
    
  for (const [key, value] of studentLog.entries()) {
    print.push([
      key,
      value.score,
      value.successfulAttempts,
      value.failedAttempts,
    ]);
  }
    
  print.sort((a, b) => b[1] - a[1]);
  console.log(print);
}
parseLog();
