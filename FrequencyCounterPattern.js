/*

• The problem: 
  Given two strings, write a function to determine if the second string is an anagram of the first.
  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

• Two solutions to the same problem.

• The first one is solving the problem with a nested loops, what is a thing that should be avoided, 
  it makes an algorithm with a notation of o(n²) according to big-O notation.

• The second one is solving the problem with two separeted loops, what is a good option to avoid the nested loops, 
  it makes an algorithm with a notation of o(n) according to big-O notation.

*/

//Bad Solution - o(n²)
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    if (str1 === str2) {
        return true;
    }

    for(let i = 0; i < str1.length; i++){
        var char = str1[i];
        
        let correctIndex = str2.indexOf(char);
        
        if(correctIndex === -1) {
            return false;
        }
        
        str2.replace(char, '');
    }

    return true;
}


//Good Solution - o(n)
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    if (str1 === str2) {
        return true;
    }

    var frequencyCounterObj = {};

    for (var letter of str1) {
        frequencyCounterObj[letter] = ++frequencyCounterObj[letter] || 1;
    }

    for (var letter of str2) {
        if (!frequencyCounterObj[letter]--) {
            return false;
        }
    }

    return true;
}

validAnagram('anagram', 'nagaram');