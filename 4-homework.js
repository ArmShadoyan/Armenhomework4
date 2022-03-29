//Exercise 1;

function spacedArray(a,b,c) {
    let i = 0
    let result=[] 
     while(i <= b){
         i = a
          if(i <= b){
           result.push(i)
          }
         a += c
     }
    return result
 }
//______________________________________________________________________________________
//Exercise 2;

function numberOfSymbols(a,b){
    let result = 0
  for(let i = 0;i <= a.length;i++){
      if(b.includes(a[i])){
          result+=1
      }
  }return result
}
//______________________________________________________________________________________
//Exercise 3;

function isPalindromOr(arr){
    resulta = [arr]
    resultb = []
       for (i = 0;i < arr.length;i++){
           resultb.unshift(arr[i])
       }
        if(resulta.join("") === resultb.join("")){
           return("yes")
       }else{
           return("no")
       }
}
    

//______________________________________________________________________________________
//Exercise 4;

function maxElementInArray(arr){
    let max
        for(let i = 0;i < (arr.length)-1;i++){
        if(arr[i] > arr[i+1]){
            max = arr[i]
        }else{
            max = arr[i+1]
        }
    }return max
}
//______________________________________________________________________________________
//Exercise 5;
function sumOfBetweenTwoNumbers(arr){
    let result = []
        for(let i = 0;i < (arr.length)-1;i++){
           sum = arr[i] * arr[i+1]
           result.push(sum)
        }return result
}
//______________________________________________________________________________________
//Exercise 6;
 //can'nt do)
//______________________________________________________________________________________
//Exercise 7;
function numberPuttern(n){
    let string = "";
    
        for (let i = 1; i <= n; i++) {
          for (let j = 1; j <= i; j++) {
            string += j;
          }
          string += "\n";
        }
    
        for (let i = 1; i <= n - 1; i++) {
          for (let j = 1; j <= n - i; j++) {
            string += j;
          }
          string += "\n";
            }
        console.log(string);
     }
//______________________________________________________________________________________
