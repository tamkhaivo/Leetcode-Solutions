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
  let sum = 0;
  letterCount.forEach((value, key) => {
    console.log(key + " : " + value);
    sum += value;
  });

  sum = 0;
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
  let studentMap = new Map();
  let countOfFailedParsing = 0;
  let result = [];
  for (const log of logs.split(", ")) {
    let [id, action, score] = log.split(" ");
    let studentLog = studentMap.get(id) || {
      score: 0,
      successfulAttempts: 0,
      failedAttempts: 0,
    };

    if (action == "solve") {
      studentMap.set(id, {
        ...studentLog,
        score: studentLog.score + Number(score),
        successfulAttempts: studentLog.successfulAttempts + 1,
      });
      continue;
    }
    if(action == "fail") {
      studentMap.set(id, {
        ...studentLog,
        failedAttempts: studentLog.failedAttempts + 1,
      });
      continue;
    }
    countOfFailedParsing++;
  }

  console.warn("Parse Fails : ".concat(countOfFailedParsing));
  for (const [key, value] of studentMap.entries()) {
    result.push({
      id: key,
      score: value.score,
      successfulAttempts: value.successfulAttempts,
      failedAttempts: value.failedAttempts,
    })
  }
  result.sort((a,b)=> b.score - a.score) // scores in descending order
  console.table(result)
}
parseLog();
