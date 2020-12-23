//Given a string s, find the length of the longest substring without repeating characters.

// Idea:
//for each char in string, check what is the max substring without repeating
// time O(n^2)
//space: O(n)
function lengthOfLongestSubstring(s: string): number {

    var chars = s.split('');

    var currentMax = 0;
    for (let i = 0; i < chars.length; i++) 
    {
        let set = new Set<string>();

        for (var j = i; j < chars.length; j++) 
        {
            const element = chars[j];
            
            if(set.has(element)) // O(1)- const time for set
            {
                currentMax = Math.max(currentMax, set.size); 
                break;
            }
            else
            {
                set.add(element);
            }
        } 

        if(j === chars.length) 
        {
            currentMax = Math.max(currentMax, set.size); 
        }
    }
    return currentMax;
};

//Solution 2 : sliding window
// time : O(2n) = O(n) , worst case each character visited twice, i.e. for s = "abcdfghjj" where for i=0,j=8 there's repeated char at j=7
//, best case: s= "abcdefgh" - one iteration of j, i stays at i=0
// space complexity: O(k), k-size of set; O(min(n,m)), m - charset, n -string size
function lengthOfLongestSubstringSlidingWindow(s: string): number {

    var currentMax = 0; // max substring of s without repeating characters
    let i = 0;
    let j = 0;
    const n = s.length;

    let set = new Set();
    while(i < n && j < n)
    {
        if(!set.has(s.charAt(j)))
        {
            set.add(s.charAt(j++))///increase the window size
            currentMax = Math.max(currentMax, j-i); // update current max
        }
        else
        {
            set.delete(s.charAt(i++)) // decrease the window size
        }
    }
    return currentMax;
};

// solution 3: optimized sliding window with a map
// if a character is in the duplicated than advanced left index of the window to teh index after the duplicate
//For determining the index of the duplicate use Map data structure
// time : O(n)
// space: O(min(n,m)); for strings < charset m space complex. is n; for n > m we have m space
function lengthOfLongestSubstringOptimizedSlidingWindow(s: string): number {

    var currentMax = 0; // max substring of s without repeating characters
    const n = s.length;
    let indexes = new Map<string,number>();
    //extend the right bounds of the window with j idx
    for (let j = 0, i = 0; j < n; j++) 
    {
        if(indexes.has(s.charAt(j)))
        {
            //update the left bound
            i = Math.max(indexes.get(s.charAt(j)) + 1, i); // max because a char can be in Map with an index < i , cause char was skipped by i 
        }

        indexes.set(s.charAt(j), j);
        currentMax = Math.max(currentMax, j-i+1);
    }
    return currentMax;
};

//solution 4:
// wiht optimized sliding window backed with an array of size m with ASCII characters (128 chars) mapping to indexes
// array with indexes mapping to ASCII characters  and values holding indexes of characters in the input string s
function lengthOfLongestSubstringSlidingWindowWithArray(s: string): number {

    var currentMax = 0; // max substring of s without repeating characters
    const n = s.length;
    const indexes : Array<number> = new Array(128); 
    indexes.fill(0);
    //extend the right bounds of the window with j idx
    for (let j = 0, i = 0; j < n; j++) 
    {
        //update the left bound
        // max because a char can be at index < i 
        i = Math.max(indexes[s.charCodeAt(j)], i); 
        // plus 1 to update pointer to char after the duplicate
        indexes[s.charCodeAt(j)] = j + 1; 
        currentMax = Math.max(currentMax, j-i+1);
    }
    return currentMax;
};