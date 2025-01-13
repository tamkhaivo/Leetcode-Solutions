const {
  MinPriorityQueue,
  MaxPriorityQueue
} = require("@datastructures-js/priority-queue");


var findRelativeRanks = function (score) {
  const ranks = new MaxPriorityQueue();
  const answer = [];
  const rating = (i) => {
    let rank = "";
    switch (i) {
      case 0:
        rank = "Gold Medal";
        break;
      case 1:
        rank = "Silver Medal";
        break;
      case 2:
        rank = "Bronze Medal";
        break;
      default:
        rank += (i);
    }
    return rank;
  };
  for (let i = 0; i < score.length; i++) {
    ranks.enqueue(score[i]);
  }
  for (let i = 0; i < score.length; i++) {
      const items = ranks.dequeue(); 
      if(i < 3)
          answer[i] = rating(i);
      else 
          answer[i] = items
  }
  return answer;
};

console.log(findRelativeRanks([4, 5, 3, 2, 1]));
