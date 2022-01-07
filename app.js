new Set([1, 1, 2, 2, 3, 4]) // [1,2,3,4]

let temp = [...new Set("referee")].join("") // ref


let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // {[1,2,3] => true, [1,2,3] => false}

const hasDuplicate = (arr) => {
    let temp = [...new Set(arr)];
    if (temp.length === arr.length) {
        return false;
    }
    return true;
}

function vowelCount(str) {
    let vowels = Array.from("aeiou");
    const vowelTracker = new Map();
    for (let char of str) {
        if (vowels.includes(char)) {
            if (!vowelTracker.has(char)) {
                vowelTracker.set(char, 1);
            } else {
                vowelTracker.set(char, vowelTracker.get(char) + 1);
            }
        }
    }
    return vowelTracker;
}


