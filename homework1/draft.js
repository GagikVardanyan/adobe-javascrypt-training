 function frequencyOfArrayElementsProblem1(inputarray){
     let array1 = []
     let array2 = []
     for (let i = 0 ; i < inputarray.length ; i++){
      if(inputarray[i] < 0){
        array2[-inputarray[i]] = 0;
        continue;
      }
     array1[inputarray[i]] = 0;
     }
     for (let i = 0 ; i < inputarray.length ; i++){
       if(inputarray[i] < 0){
      array2[-inputarray[i]]++;
      continue;
      }
     array1[inputarray[i]] ++;
     }
     for (let j = 0 ; j < inputarray.length ; j++){
       if(inputarray[j] < 0){
        if(array2[-inputarray[j]] !== 0){
          console.log(`${inputarray[j]} : ${array2[-inputarray[j]]/(inputarray.length)}`);
        array2[inputarray[j]] = 0;  
        continue;
        }
       continue;
       }
         if(array1[inputarray[j]] !== 0){
           console.log(`${inputarray[j]} : ${array1[inputarray[j]]/(inputarray.length)}`);
         array1[inputarray[j]] = 0;  
         }

         
     }
 }
 frequencyOfArrayElementsProblem1([3,3,2,-2,3,2,7,-8]);

 function subarraysWithThreeLengthProblem6(inputarray1){
   let result = [];
   let temp = [0,0,0];
   
   if(inputarray1.length < 3){
     return inputarray1;
   }
   for ( let i = 0 ; i < inputarray1.length - 2 ; i++){
     for ( j = i+1 ; j < inputarray1.length - 1 ; j++){
       let k = j+1;
       temp = [inputarray1[i],inputarray1[j],inputarray1[k]];
       result.push(temp);
       k++;
       while(k != inputarray1.length){
         temp = [inputarray1[i],inputarray1[j],inputarray1[k]];
         result.push(temp);
         k++;
       }
 
     }
   }
   return result;
 }
 console.log(subarraysWithThreeLengthProblem6([3,4,5,6,7,12]));
 
 
 function stringMovingProblem4(inputString){
   let str1 = [];
   for ( let i = 0 ; i < inputString.length - 2 ; i+= 3 ){
     str1.push(inputString.charAt(i+1));
     str1.push(inputString.charAt(i+2));
     str1.push(inputString.charAt(i));
       }
   if(inputString.length % 3 == 1){
     str1.push(inputString.charAt(inputString.length - 1));
   }
   if(inputString.length % 3 == 2){
    str1.push(inputString.charAt(inputString.length - 2));
    str1.push(inputString.charAt(inputString.length - 1));
  }
   let result = str1.join("");
    return result;
 }
 console.log(stringMovingProblem4("aweyool"));

 function substringUniqueProblem3(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
      for (let j = i + 1; j < sentence.length; j++) {
          let str = sentence.substring(i, j);
          if (str.includes(sentence.charAt(j)) && sentence.charAt(j) !== " ") {
              if (str.length >= result.length) {
                  result = str;
              }
              break;
          }
      }
  }
  return result;
 }
 console.log(substringUniqueProblem3("parting your soup is not a miracle, bruce."));

  function maxWordProblem2(sentence) {
    let result = "";
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let temp = sentence.charAt(i);
        if ( temp !== "," && temp !== "-" && temp !== " ") {
            count++;
            if (i === sentence.length - 1) {
                if (count > result.length) {
                    result = sentence.substring(i + 1 - count, i + 1);
                }
            }
        } else {
            if (count > result.length) {
                result = sentence.substring(i - count, i);
            }
            count = 0;
        }
    } return result;
}
console.log(maxWordProblem2("A revolution without dancing is a revolution not worth having."));
 
function productProblem5(array) {
  let result = 1;
  let count = 0;
  let count1 = 0;
  for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
          console.log("Invalid Argument");
          return;
      }
     let maxNegative = Number.MIN_SAFE_INTEGER;
      for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] < 0) {
              if (maxNegative <= array[i][j]) {
                  maxNegative = array[i][j];
                  }
              count1 ++;
          }
      }
      if (count1 !== 0) {
          result *= maxNegative;
          count1 = 0;
      } else {
          count++;
      }
  }
  if (count === array.length) {
    console.log("No negatives");
    
      
  } else {
    console.log(result);
  }
  
}

 productProblem5([[2,-9,0,-7],[1,2,1,7,-5]]);
 
