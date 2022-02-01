/*
For a string, check for any element of that string that has
 a duplicate character. Count the total number of characters with
 duplicates in a string and return that number
*/


// Strings we're checking
let stringArrays = ["abcde","aabbcde","aabBcde",
                    "indivisibility","Indivisibilities",
                    "aA11","ABBA"];

// This function is really gross.
function countDuplicates(text) {
  let wordCount = {};
  let dupCount = 0; 
  // Turn string to an array
  const textArray = text.toLowerCase().split('');
  /*
    Iterate through the array and create a mapping between the
    character and it's total occurrences.
  */
  for (index in textArray) {
    wordCount[textArray[index]] = textArray.filter(char => char  === textArray[index]).length;
  }
  /*
    Iterate though the aforementioned map. Find any letters that duplicates
    and increment our dupCount var. Return it.
  */
  for (const [key, value] of Object.entries(wordCount)) {
    if (value > 1 ) {
      dupCount++;
    }
  }
  return dupCount;
};

for ( index in stringArrays ) {
  console.log(`${stringArrays[index]}: ${countDuplicates(stringArrays[index])}`);
};
