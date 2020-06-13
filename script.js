// Array of all special characters for password

var SpecialCharacters = [
    '~',
    '`',
    '\\',
    '{',
    '}',
    '|',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '/',
    '.',
    ',',
    "'",
    ':',
    ';'
];
// Array of lowercase for password
var lowercaseletters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',

];
// Array of uppercase for password
var UPPERCASELETTERS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
// Array of numbers
var numericcharacters
['0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9'
];

// Get references to the #generate element
function getpasswordoptions() {
    var length = parseInt(
        prompt("How many characters would you like for your password")
    );
    
    if (isNaN(length) === true) {
        alert('Password lenght must be provided as a number');
        return;
    }
    
    if (length < 8) {
        alert('Password must be more than 8 characters');
        return;
    }
    
    if (length > 128) {
        alert('Password must be less than 128 characters');
        return;
    }
    
    var hasspecialcharacters = confirm('Click yes to confirm to include special chararcters');

    var hasNumericcharacter = confirm('Click yes to confirm to include numbers');
    
    var haslowercaseletters = confirm('Click yes to confirm to include lowercase letters');
    
    var hasUPPERCASELETTERS = confirm('Click yes to confirm to include uppercase letters');
    if (
        hasspecialcharacters === false &&
        hasNumericcharacter === false &&
        haslowercaseletters === false &&
        hasUPPERCASELETTERS === false
    ){
        alert('Must select atleast one character set')
        return;
    }
};
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);