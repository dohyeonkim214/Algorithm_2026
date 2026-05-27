var findMedianSortedArrays = function(nums1, nums2) {
    // nums1이 더 짧은 쪽이 되도록
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    let m = nums1.length, n = nums2.length;
    let left = 0, right = m;

    while (left <= right) {
        let i = Math.floor((left + right) / 2); // nums1 파티션
        let j = Math.floor((m + n + 1) / 2) - i; // nums2 파티션 (자동)

        let maxLeft1  = i === 0 ? -Infinity : nums1[i - 1];
        let minRight1 = i === m ?  Infinity : nums1[i];
        let maxLeft2  = j === 0 ? -Infinity : nums2[j - 1];
        let minRight2 = j === n ?  Infinity : nums2[j];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // 파티션 완성
            if ((m + n) % 2 === 1) return Math.max(maxLeft1, maxLeft2);
            return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        } else if (maxLeft1 > minRight2) {
            right = i - 1; // i 줄이기
        } else {
            left = i + 1;  // i 늘리기
        }
    }
};