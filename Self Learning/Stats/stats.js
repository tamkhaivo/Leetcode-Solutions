const data = [1, 2, 3, 4, 5, 6, 8, 9,10];

function median(data) {
  const number = data.length;
  const mid = Math.floor(number / 2) - 1;
  if (number & 1) { // Number is odd
    return data[mid+1];
  }
  return (data[mid] + data[mid + 1]) / 2;
}




console.log(median(data));

