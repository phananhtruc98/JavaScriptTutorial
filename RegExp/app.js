let re;
re = /hello/;
// re = /hello/i; i = case insensitive (uppercase or lowercase)
// re = /hello/g; Global search

// console.log(re);
// console.log(re.source);
//=== exec() - Return result in an array or null
// const result = re.exec('hello world');
// ["hello", index: 0, input: "hello world", groups: undefined]

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//=== test() - Returns true or false
// const str = 'Hallo her';
// const result = re.test('Hallo her');
// console.log(result);

//=== match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);

//=== search() - Returns index of the first match if not found return -1
// const str = 'How are you Hello';
// const result = str.search(re);
// console.log(result); // 12 (has /i or -1)

//=== replace() - Return new string with some or all matches of a pattern
// const str = 'How are you Hello';
// const result = str.replace(re);
// console.log(result); // 12 (has /i or -1)

// Literal characters
re = /hello/i;
re = /hello/;

// Metacharacter symbols
re = /^h/i; // Must start with
re = /world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // optional character
re = /gre?a?y?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[aey]y/i // must be an a or e
re = /[GF]ray/; // must be a G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /[A-Z]ray/; // Match any upper case leter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur from 2 to 4
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parethese () - Grouping
re = /^([0-9]x){3}$/; // ===> match 3x3x3x

// Shorthand Character Classes
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary //not word in word

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'dkjekdxydjekdj';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);