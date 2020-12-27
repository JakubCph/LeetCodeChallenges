// if n + m is odd:
// merge arrays until value number (n+m+1)/2
//if n+m is even:
//merge arrays until value number (n+m)/2 + 1

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const n = nums1.length;
    const m = nums2.length;
    //check parity
    const even = isEven(n+m);
    const stopAt = (even ? (n+m)/2+1 : (n+m+1)/2) - 1; //indexes are 0-based , hence -1


    function isEven(n: number):boolean
    {
        return n%2 === 0;
    }
    function median(arr: number[]):number
    {
        return even ? (arr[stopAt-1] + arr[stopAt])/2 : arr[stopAt];
    }
    function mergeUntil() : number
    {
        var i = 0;
        var j = 0;
        var merged : number[] = [];
        //continue until we are at stopAt index
        while (i < n && j < m) {
            merged.push(Math.min(nums1[i], nums2[j]));
            if(nums1[i] < nums2[j])
            {
                i++;
            }
            else
            {
                j++;
            }
        }

        if(i == n && j < m)
        {
            merged.push(...nums2.slice(j,stopAt+1));
        }

        if(j == m && i < n)
        {
            merged.push(...nums1.slice(i,stopAt+1));
        }
        return median(merged);
    }

    
    //Check if empty
    if(!nums1.length)
    {
        return median(nums2);
    }
    if(!nums2.length) 
    {
        return median(nums1);
    }

    return mergeUntil();
    

};

var arr1 = [];
var arr2 = [2,3];

let res = findMedianSortedArrays(arr1,arr2);
console.log(res);

// time : log(min(n,m))
function findMedianSortedArraysLogarithmically(nums1: number[], nums2: number[]): number 
{   
    function isEven(n: number):boolean
    {
        return (n&1) === 0;
    }

    function average(a:number, b:number):number
    {
        if(a > b)
        {
            average(b,a);
        }
        return a + (b-a)/2;
    }
    //to ensure first array is smaller
    if(nums1.length > nums2.length)
    {
        findMedianSortedArraysLogarithmically(nums2,nums1);
    }
    const n = nums1.length;
    const m = nums2.length;

    let leftIdx = 0;
    let rightIdx = n-1;

    //guess where the partition is ; partition decides hwo many elements each array contributes to the left half of the final sorted array
    //binary search on smaller array
    while (leftIdx <= rightIdx) 
    {
        //find partition for smaller array
        let partitionX = (rightIdx - leftIdx)/2;
        let partitionY = (n+m+1)/2;

        //Right partition is found
        if(nums1[partitionX] < nums2[partitionY+1] && nums2[partitionY] < nums1[partitionX+1])
        {
            if(isEven(n+m))
            {
                return Math.max(nums1[partitionX], nums2[partitionY]);
            }else
            {
               return average(Math.max(nums1[partitionX], nums2[partitionY]),
                            Math.min(nums1[partitionX+1], nums2[partitionY+1])); 
            }
        }else
        {
            //search the left bound
            if(nums1[partitionX] > nums2[partitionY+1]){
                rightIdx = partitionX-1;
            }else if(nums2[partitionY] > nums1[partitionX+1])
            {
                leftIdx = partitionX+1;
            }
        }

        
    }
    
}