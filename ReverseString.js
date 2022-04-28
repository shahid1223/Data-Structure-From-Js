const reverseString = (str) => {

    //Split the given string 
    var splitString = str.split("");

    //reverse the splited string by js reverse method
    var reverseString = splitString.reverse();

    //join the reversed string by js join method
    var reversedString = reverseString.join("");

    //return the string
    return reversedString;

}

const result = reverseString("My Name Is Shahid");

console.log("Result is=> ", result);