// Bai 2



function merge2String (str1, str2) {
    str1 = str1.split("");
    str2 = str2.split("");
    let answer = '';
    let round = Math.max(str1.length,str2.length)
    for (let i=0; i< round;i++){
         answer +=  str1[i] + str2[i]; 
      }
      return answer;
  }

// console.log(merge2String("abc","123"));
// console.log(merge2String("abc","0123"));
// console.log(merge2String("abcd","123"));

function findOppositeNumber(n,inputNumber){
    let range = Math.floor(n/2);
    return (inputNumber+range)%10;
}

console.log(findOppositeNumber(10,2));