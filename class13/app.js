// var fullName = "minahil irfan";
// var word = fullName.slice(0,1).toUpperCase() + fullName.slice(1);
// console.log(word);


// var fullName = "minahil irfan";
// var word = "";
// // console.log(fullName.toUpperCase())
// for(i = 0; i < fullName.length; i++){
// word += fullName[i].toUpperCase();
// // console.log(fullName[i])
// }
// console.log(word)


var fullName = "minahil irfan";
var splitingWord = fullName.split(" ");
// console.log(splitingWord);
var arr = [];

for(i = 0; i < splitingWord.length; i++){
    // console.log(splitingWord[i]);
    var word = splitingWord[i];
    var capitalizedWord = word.slice(0,1).toUpperCase() + word.slice(1);
    // console.log(capitalizedWord)
arr.push(capitalizedWord)
}
// console.log(arr)
var capital = arr.join(" ");
console.log(capital)