// 对数字进行排序
let sort = numbers => {
  if (numbers.length > 2) {
    let index = minIndex(numbers);
    let min = numbers[index];
    numbers.splice(index, 1);
    return [min].concat(sort(numbers));
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};

let minIndex = numbers => numbers.indexOf(min(numbers));

let min = numbers => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};

sort([5, 8, 7, 9, 1, 6, 4, 2]);
