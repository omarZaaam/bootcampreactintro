/**
 * highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

function highestAndLowest(input){
    const numbers = input.split(" ");
    if(numbers.length == 2){
       if(numbers[0] < numbers[1]){
           return numbers[1] + " " + numbers[0];
       }else{
        return numbers[0] + " " + numbers[1];
       } 
    }
    return numbers;
}
module.exports = highestAndLowest;