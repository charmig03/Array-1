function firstLast6(nums){
   // The first variable is optional, but it makes the code more readable  
  let end = nums.length - 1;
  if (nums.length > 0 && (nums[0] == 6 || nums[end] == 6)) {
    return true;
  } else {
    return false;
  }
}