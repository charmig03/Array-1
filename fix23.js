function fix23(nums){
    //since the length is three, the only options are the first two or last two elements
  if (nums[0] == 2 && nums[1] == 3) {
    nums[1] = 0;
  } else if (nums[1] == 2 && nums[2] == 3) {
    nums[2] = 0;
  }
  return nums;
}