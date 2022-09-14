/**
 * @param {array} stock
 * @return {int}
 */
function solution(stock) {
  var downMarks = countDownMarks(stock);
  var newArray, newDownMarks, start, end;

  // try swap
  if (downMarks.length == 1 || downMarks.length == 2) {
    newArray = stock.slice(0);

    start = downMarks.shift();
    end = downMarks.length ? downMarks.shift() + 1 : start + 1;

    swap(newArray, start, end);
    newDownMarks = countDownMarks(newArray);
    if (!newDownMarks.length) {
      return 1;
    }
  }

  // try reverse
  if (
    downMarks.length > 2 &&
    downMarks.length == downMarks[downMarks.length - 1] - downMarks[0] + 1
  ) {
    start = downMarks.shift();
    end = downMarks.pop() + 1;
    newArray = reverse(stock, start, end);
    newDownMarks = countDownMarks(newArray);
    if (!newDownMarks.length) {
      return 1;
    }
  }

  return 0;
}

function swap(array, idx1, idx2) {
  var tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}

function reverse(array, idx1, idx2) {
  return array
    .slice(0, idx1)
    .concat(array.slice(idx1, idx2 + 1).reverse())
    .concat(array.slice(idx2 + 1));
}

function countDownMarks(array) {
  var downMarks = [];

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      downMarks.push(i);
    }
  }

  return downMarks;
}
