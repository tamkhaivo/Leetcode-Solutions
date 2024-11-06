module.exports = {
  isValid: trap,
};
/*
    Given a string s, return true if it is a palindrome, otherwise return false.
    A palindrome is a string that reads the same forward and backward. 
    It is also case-insensitive and ignores all non-alphanumeric characters.

    Constraints:
        1 <= str.length <= 1000
        str is accii 
*/
function trap(height) {
  /*
  Time Complexity 
Space Complexity 

* @param {String} s
* @return {boolean}
*/
  let bar1 = 0;
  let bar2 = 0;
  let maxAreaOfWater = 0;
  let waterAlreadyCounted = 0;
  let calculatedAreaOfWater = 0;                          //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  while(bar1 != height.length && bar2 != height.length){  //[0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
      if(height[bar1] > height[bar2]){
          bar2++;
      }
      else if(height[bar1] < height[bar2]){
          bar1++;
      }
      else if(bar1 == bar2){
          bar1++;
          waterAlreadyCounted = 0;
      }
      calculatedAreaOfWater = Math.min(height[bar1], height[bar2]) * Math.max((Math.abs(bar1 - bar2) - 1), 0) - middleBarHeights(height, bar1, bar2)
      maxAreaOfWater += calculatedAreaOfWater - waterAlreadyCounted
      waterAlreadyCounted += calculatedAreaOfWater
  }
  return maxAreaOfWater;
}



function middleBarHeights(heights, left, right){
    let accBarHeight = 0;
    for(let x = Math.min(left, right) + 1; x < Math.max(left, right) - 1; x++){
        accBarHeight = heights[x];
    }
    return accBarHeight;
}

trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]);