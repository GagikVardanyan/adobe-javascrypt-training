// problem 1
function largerThanGivenNumber(inputarray , inputnumber){
    let array1 = inputarray.filter(e => e > inputnumber);
    if(array1.length === 0){
        console.log("Such values does not exist");
        return;
    }
    console.log(array1);
    return;
}

//problem2
function areEvenDigitsNumber(number){
   while(number > 0){
        let temp = number % 10;
        if(temp % 2 == 1){
            return false;
        }
        number = Math.floor(number/10);
        
        }
    return true;
}


function allNumbersWithEvenDigitsBetweenTwoNumbers(number1 , number2){
    let result = [];
    let count = 0;
    for(let i  = number1 + 1 ; i < number2; i++){
        if(areEvenDigitsNumber(i)){
            result.push(i);
            count = count + 1; 
            }

        
    }
    if(count == 0){
        return "such numbers does not exist";
        
    }
    return result.join(',');
}

//problem3
function recursiveOddDigitsNumber(number){
   
    if(number == 0){
        return true;
    }
    if(number % 2 == 0){
        return false;
    }
    return(recursiveOddDigitsNumber(Math.floor(Math.abs(number/10))));
}

//problem4
function recursiveArrayMinPositiveNumber(inputarray , n , count = 0){
    if(inputarray[n-1] < 0){
        inputarray[n-1] = Infinity;
    }else{
        count++;
    }
    if(n == 1){
        if(count == 0){
            return -1;
        }
        return inputarray[0];
    }
    return Math.min(inputarray[n-1] , recursiveArrayMinPositiveNumber(inputarray,n-1 , count));
}

    
//Problem5
function tree(array, result = {}, root = null) {
    let rootChilds = array.filter(el => el.parent === root);
    if (rootChilds.length === 0) {
        return {};
    }
    for (let i = 0; i < rootChilds.length; i++) {
            let tempId = rootChilds[i].id;
            result[tempId] = {};
            tree(array, result[tempId], tempId );
    }
    return result;
}




