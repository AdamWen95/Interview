var intersection = function(nums1, nums2) {
  //排序
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  
  let i = 0, j = 0;
  const res = new Set();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.add(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return [...res];
};