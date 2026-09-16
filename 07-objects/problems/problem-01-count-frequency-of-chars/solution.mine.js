function getUniqueCharacterOccurences(word) {
    const frequencyMap = {};
    
    for(let char of word) {
        if(frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }
    
    return frequencyMap;
}

console.log(getUniqueCharacterOccurences("javascript"));
