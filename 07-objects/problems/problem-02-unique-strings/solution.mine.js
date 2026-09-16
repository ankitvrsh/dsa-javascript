function getUniqueStrings(words) {
    const map = {};
    
    for(let word of words) {
        if(!map[word]) {
            map[word] = true;
        }
    }
    
    for(let word in map) {
        console.log(word);
    }
}

getUniqueStrings(["abc", "hello", "c", "d", "abc", "c", "d"]);
