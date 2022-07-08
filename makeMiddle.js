function makeMiddle(nums){
    // consider an example. If the array has length 4
  // then half will be 2, and we want the 2nd and third elements
  // which will have index 1 (half - 1) and 2 (half)
  let half = nums.length / 2;
  return [nums[half - 1], nums[half]];
}