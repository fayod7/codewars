{
    /*/ VowelCount
    1.Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
    /*/
//     function getCount(str) {
//     let vowels = "auoieAUOIE"
//     let sum = 0
//     for( let i = 0; i < str.length; i ++ ){
//         if( vowels.includes(str[i]) ) {
//              sum ++
//         }
//     }
//     return sum
// }
//     console.log( getCount("abracadabra") );
}

{
    /*/ Monkey count
    2.You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

    As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
    /*/
//     function monkeyCount(n) {
//     let result = []
//     for( let i = 1; i <= n; i++ ){
//         result.push(i)
//     }
//     return result
// }
// console.log( monkeyCount(5) );//[1,2,3,4,5]
}

{
//     function sortArray(array) {
//     let sort =  array.filter( n => n % 2 === 1 ).sort( (a,b) => a - b )
//     return sort
// }
// console.log( sortArray([7, 1]));//[1, 7]
// console.log( sortArray([5, 8, 6, 3, 4]));//[3, 8, 6, 5, 4]

}
{
    /*/ Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5,6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
    /*/
//     function solution(number){
//         if (number < 0) return 0;
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum += i;            
//         } else{
//             if (i % 3 === 0 || i % 5 === 0) {
//                 sum += i
//             }
//         }
//     }
//     return sum;
// }
// console.log( solution(10) );

}
{
    /*/
    Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
    /*/
//     function sumStr(a,b) {
//     let sum = Number(a) + Number(b)
//         return sum.toString()
// }
// console.log( sumStr("4","6") );//10
}
{
    /*/
    Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.
    /*/
    class Kata {
  static getVolumeOfCuboid(length, width, height) {
    let volume = length * width * height
  return volume
  } 
}
}