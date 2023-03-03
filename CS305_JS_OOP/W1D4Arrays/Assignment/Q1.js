
//Q1
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else if (c > a && c > b) {
        return c;
    }
    else {
        return "They are equal.";
    }
}

let num = maxOfThree(3, 3, 3);
console.log(num);

//Q2

