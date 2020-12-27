// if n + m is odd:
// merge arrays until value number (n+m+1)/2
//if n+m is even:
//merge arrays until value number (n+m)/2 + 1
function findMedianSortedArrays(nums1, nums2) {
    var n = nums1.length;
    var m = nums2.length;
    //check parity
    var even = isEven(n + m);
    var stopAt = (even ? (n + m) / 2 + 1 : (n + m + 1) / 2) - 1; //indexes are 0-based , hence -1
    function isEven(n) {
        return n % 2 === 0;
    }
    function median(arr) {
        return even ? (arr[stopAt - 1] + arr[stopAt]) / 2 : arr[stopAt];
    }
    function mergeUntil() {
        var i = 0;
        var j = 0;
        var merged = [];
        //continue until we are at stopAt index
        while (i < n && j < m) {
            merged.push(Math.min(nums1[i], nums2[j]));
            if (nums1[i] < nums2[j]) {
                i++;
            }
            else {
                j++;
            }
        }
        if (i == n && j < m) {
            merged.push.apply(merged, nums2.slice(j, stopAt + 1));
        }
        if (j == m && i < n) {
            merged.push.apply(merged, nums1.slice(i, stopAt + 1));
        }
        return median(merged);
    }
    //Check if empty
    if (!nums1.length) {
        return median(nums2);
    }
    if (!nums2.length) {
        return median(nums1);
    }
    return mergeUntil();
}
;
var arr1 = [];
var arr2 = [2, 3];
var res = findMedianSortedArrays(arr1, arr2);
console.log(res);
