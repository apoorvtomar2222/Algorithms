// Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every character of str1 to every character of str2.And all occurrences of every character in ‘str1’ map to same character in ‘str2’

// Examples:

// Input: str1 = "aab", str2 = "xxy"
// Output: True
// 'a' is mapped to 'x' and 'b' is mapped to 'y'.

//     Input: str1 = "aab", str2 = "xyz"
// Output: False
// One occurrence of 'a' in str1 has 'x' in str2 and
// other occurrence of 'a' has 'y'.


// str1 = "aab", str2 ="xxz"
// obj ={ a:b}

function isomorphic (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let obj1 = {};

    for (let i = 0; i <= str1.length; i++) {
        if (!obj1[str1[i]]) {
            obj1[str1[i]] = str2[i]
        }
        else if (obj1[str1[i]] !== str2[i]) {
            return false
        }
    }
    return true;
}

console.log(isomorphic("aaba", "xxyz")); // false
console.log(isomorphic("arb", "xzy")); // true
