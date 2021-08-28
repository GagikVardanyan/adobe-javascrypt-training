// problem1

function flatten (inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (Array.isArray(inputArray[i])) {
         result = result.concat(flatten(inputArray[i]));
      } else {
         result.push(inputArray[i]);
      }
    }
    return result;
  }
  
  console.log(flatten([14, [1, [[[3, []]], 1], 0]]));

  //problem2firstSolution

  function SumOfDigits(inputNumber){
    let result = 0;
    while (inputNumber != 0) {
        result = result + (inputNumber % 10);
        inputNumber = Math.floor(inputNumber / 10);
    }
    return result;
  }
  
  function SumOfDigitsRepeating(inputNumber){
      if (Math.floor(SumOfDigits(inputNumber)/10) == 0){
        return SumOfDigits(inputNumber);
      }
      return SumOfDigitsRepeating(SumOfDigits(inputNumber));
  }
  console.log(SumOfDigitsRepeating(99));


  //Problem2SecondSolution

  function SumOfDigitsRepeating2(inputNumber){
    if (inputNumber == 0){
          return 0;
    } else if (inputNumber % 9 == 0){
        return 9;
    }
    return Math.floor(inputNumber % 9);
  }
  console.log(SumOfDigitsRepeating2(90));

  //problem3
 
function invert(obj){
    let result = {};
    let array = [];
    for (let key in obj){
        if (result[obj[key]]=== undefined){
            result[obj[key]] = key;
            array[obj[key]] = new Array(key);
            
        } else {
        array[obj[key]].push(key);
        result[obj[key]] = array[obj[key]];
        }
    }
    return result;
  }
console.log(invert({ a: "1", b: "2"}));

  //Problem4

  function contigousSubstrings(inputString , n){
      let result = [];
      for (let i = 0 ; i < inputString.length - n + 1 ; i++){
          let temp = [];
          for( let j = i ;j < i + n ; j++){
              temp.push(inputString.charAt(j));  
          }
          result.push(temp.join(""));
      }
      return result;
  }
console.log(contigousSubstrings("abcdfghz" , 7));

//problem5

function integerSequence(inputArray){
    let minELement = Math.min(...inputArray);
    let maxElement = Math.max(...inputArray);
    return maxElement - minELement - inputArray.length + 1;
    }

console.log(integerSequence([22,10, 37]));

//Problem6firstSolution

function subarrays(arr , k){
    let l = arr.length; 
    let result = [];
    let indexes = [];
    let temp = [];
    for (let i = 0 ; i <=  k - 1 ; i++){
       indexes[i] = i;
       temp.push(arr[i]);
    }
   result.push(temp);
   temp = temp.slice();
   while (true) {
       let j = indexes.length - 1 ;
       while (indexes[j] == j + l - k && j >= 0){
           j--;
       }
       if (j == -1){
           return result;
       }
       indexes[j]++;
       temp = temp.slice();
       temp[j] = arr[indexes[j]];
       for(let t = j + 1 ; t < k; t++){
           indexes[t] = indexes[t-1] + 1;
           temp[t] = arr[indexes[t]];
           }
           result.push(temp);
   }
}
console.log(subarrays([1,2,3,4,6] ,3));

