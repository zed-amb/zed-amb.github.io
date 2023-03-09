function sum(a, b) {
    return a + b;
    }
    console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


    let str = "Widget with id get gudda";
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("get") ); // 1, "id" is found at the position 1 (..idget with id)
