function plusOne(digits) {
    for( i = digits.length-1; i>=0 ; i--) {
        if(digits[i] == 9) {
            digits[i] = 0
        }else{
            digits[i]++;
            return digits;
        }
    };
    let answer = new Array(digits.length+1).fill(0);
    answer[0]=1;
    return answer;
};

addOne([1,2,3]);
// [1,2,4]

addOne([9,9,9]);
// [1,0,0,0]