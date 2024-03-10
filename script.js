// Strings, Numbers, Arrays, Functions, Objects, OOP
// properties and methods meaning (How, why, when )

/*
  string= it will always returns a new string 
  property
  length => return the size(number) of string/array element.
  
  1.Extract a string{
    at(position/number)
    charAt(position/number):arg cannot be String,if arg is string return the 
    first  character
    [] if not found return -1 
  }
  2.Extract a range of strings{
    NB :: the end number is exclusive.
    slice(start,end)-> arg number 
    subString(start, end) -> arg number
    substr(start, length)-> arg number 
  }
  3.search for a string{
    indexof -> return an index of  the occurance of a string in a string:if string not found return undefined  
    lastindexof -> return the indx of last occurance of a string in a string 
    search -> searches a string for a string , return a position of the match  
    includes -> return true, if the string include the specified arg
    match -> return an array  containing  a string against a string
  }
  4.convert the string{
    split(',') -> arg   show be a separator 
    ## convert a string into array
  }
  5.{
    trim -> removes the white spaces around the string 
    concat -> permit the combination of two strings
    replace ->
    repeat ->
  }
  6. transform{
    toUpperCase -> return a string in upper case
    to Lowercase -> return ad string a written in a lower case
  }

  Examples below 

*/
// extracting the piece of the string
let bookName = "College Exercise Book";
let resultsFound = bookName.at("percival");
resultsFound = bookName.charAt(0);
resultsFound = bookName[1];

// Determine the length of the string
resultsFound = bookName.length;

// Extract the range of  the string
resultsFound = bookName.slice("0", "10");
resultsFound = bookName.substring(0, 7);
resultsFound = bookName.substr(0, 7);

// transform and duplications , replace
resultsFound = bookName.toUpperCase();
resultsFound = bookName.toLowerCase();
resultsFound = bookName.trim();

resultsFound = bookName.repeat(5);
resultsFound = bookName.replace("College", "High School");

// convert the string into an array
resultsFound = bookName.split(",");
resultsFound.push("High School");
let numberOfItems = resultsFound.length;
resultsFound.forEach((item) => {
  // console.log(item);
});

// search the string
resultsFound = bookName.indexOf("Exercise");
resultsFound = bookName.search("Exercise");
resultsFound = bookName.includes("Exercise");

// console.log(resultsFound);

const paragraph =
  "PR stands for Pull Request. It is a common term in the context of version control systems, particularly Git, and is often used in collaboration on code repositories A Pull Request is a proposed change to a codebase hosted on a platform like GitHub, GitLab, or Bitbucket. When a developer wants to contribute to a project, they typically follow these Fork the  Create a personal  the original repository.Create a  Work on a specific feature or bug fix by creating a new branch in their forked repository.Make  Implement the desired changes in the branch.Push Changes to  Push the changes to their forked repository.Create a Pull  Open a Pull Request from their branch in the forked repository to the original repository. This signals to the maintainers that they have changes they d like reviewed and merged into the original codebase.Review and Other developers or maintainers review the proposed changes in the Pull Request, provide feedback, and eventually merge the changes into the main codebase if they are deemed acceptable.Pull Requests facilitate collaboration, code review, and maintainers ability to manage contributions to a project in an organized and controlled manner.";

let result = paragraph.split(", ");
let myArr = result.length;
result.forEach((element) => {
  if (result.includes(/'Create'/g)) {
    let globalResults = element === "Create";
    let res = result.indexOf(globalResults);
    // console.log(res);
  } else {
    // return values
    // console.log(element);
  }
});

// objects
const data = {
  firstName: "Percival",
  age: 12,
  isBlack: true,
  isMarried: false,
};

for (let info in data) {
  let values = data[info];
  // console.log(values);
}

// Arrays
const Languages = ["Xitsonga", "Tshivenda", "Zulu"];

// check the length
let arrayResults = Languages.length;

// Extract the value from an array
arrayResults = Languages[0];

// Extract the range
arrayResults = Languages.slice(0, 1);

// search the element from an array

// case 1 : using the position
arrayResults = Languages.indexOf("Xitsonga");

// case 2 using boolean
arrayResults = Languages.includes("Xitsonga");

const toBeJoinedArray = ["Sepedi", "Shona"];

// convert the array into a string
arrayResults = Languages.join(", ");

// join two arrays
arrayResults = Languages.concat(toBeJoinedArray);

// methods to loop through an array 
arrayResults.forEach((lang)=>{
  // console.log(lang)
})

arrayResults.some((lang)=>{
   if(lang.length >= 5){
      // console.log(lang)
   }
})


// Why did it return one element(NB)
arrayResults.every((lang)=>{
  if(lang.length > 1){
    // console.log(lang)
  }
})

// arrayResults.filter((lang)=>{
//   if(arrayResults.startsWith('X')){
//       let pos = arrayResults.indexOf('X');
//       // console.log(arrayResults[pos]);
//   }
// });

// const numbers = [1,2,3,4,5,5,6,];
// const sum  = numbers.reduce((accumulator, currentValue)=>{
//   accumulator + currentValue
// },0);
// console.log(sum);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
