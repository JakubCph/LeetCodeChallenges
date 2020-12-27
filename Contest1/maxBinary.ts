
//You are given a binary string binary consisting of only 0's or 1's. You can apply each of the following operations any number of times:
//Operation 1: If the number contains the substring "00", you can replace it with "10"
//Operation 2: If the number contains the substring "10", you can replace it with "01"
//Return the maximum binary string you can obtain after any number of operations. Binary string x is greater than binary string y if x's decimal representation is greater than y's decimal representation.

// time and space ??????
function maximumBinaryString(binary: string): string {
    var arr = binary.split('');

    function tryPush1RightAt(a:string[], st:number): boolean{
        var idx = st;
        while (idx < a.length && a[idx] === '1') { 
            idx++;
        }
        if(idx === a.length){
            return false; // we didn't push '1' left because all the other elements were '1's.
        }
        //backtrack
        for (let i = idx; i > st; i--) {
            if(a[i-1] === '1'){ // we know here that a[i] === '0' even in the subsequent iterations because of the operation 2
                a[i-1] = '0';
                a[i] = '1';
            }
        }
        return a[st] === '0';
    }

    if(arr.length === 1){
        return arr[0];
    }


    //O(n)
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === '0' && arr[i+1] === '0'){
            arr[i] = '1';            
        }
        else if(arr[i] === '0' && arr[i+1] === '1'){
            // push left the '1'
            if(tryPush1RightAt(arr,i+1)){
                arr[i] = '1';            
            }
        }
    }

    return arr.join('');
};

let binary = "000110";
let res3 = maximumBinaryString(binary);
console.log(res3);

//O(n) time and space
// Starting 1s are already good
// Notice that by repeating operation 2 for the remaining digits we get : 11111... 000011111
// THen repeating operation 1 : 11111..111011111 
//So number of zeros is the number of operation 2 
//In the resulting string we will have only one 0 at position #1s + #0s - 1
function maximumBinaryStringGreedy(binary: string): string {

    function replaceAt(str: string, idx: number, ch: string): string{
        return str.substr(0, idx) + ch + str.substr(idx+1);
    }
    let ones = 0;
    let zeros = 0;
    for (let i = 0; i < binary.length; i++) {
        //Count all occurences of 0s - the number of allowed operation 2
        if(binary.charAt(i) === '0'){
            zeros++;
        }   
        //count all occurences of 1s only until first 0     
        else if(zeros === 0){
            ones++;
        }
    }

    //all 1s already
    if(zeros === 0){
        return binary; 
    }

    var res = "1".repeat(binary.length);
    return replaceAt(res, ones+zeros-1, '0');

}


let res4 = maximumBinaryStringGreedy(binary);
console.log("Greedy: " + res4);