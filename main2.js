// 找到最小的数字
let min = numbers => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};

min([5, 8, 9, 4, 3, 1, 0]);
