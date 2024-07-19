console.log("Timestamp:1 %d", new Date());
let cutGrade = (hw, mid, final) =>
{
    let s = 0;
    if ((hw >= 0 && hw <= 40) && (mid >= 0 && mid <= 30) && (final >= 0 && final <= 30))
    {
        s = hw + mid + final;
        if (s >= 0 && s <= 40)
            return ("F");
        else if (s >= 0 && s <= 40)
            return ("D");
        else if (s >= 41 && s <= 50)
            return ("C");
        else if (s >= 51 && s <= 70)
            return ("B");
        else if (s >= 70 && s <= 100)
            return ("A");
    }
    else
        return ("Yours Points is invalid");
}

let s = cutGrade(20,20,60);
console.log("Grade: ", s);
console.log("Timestamp:2 %d", new Date());
// console.log("Timestamp:1 %d", new Date());

// function Curry()
// {
//     let date = new Date().toDateString();
//     console.log("Curry ate is: " + date);
// }

// function add2Num(a, b)
// {
//     console.log("%d + %d = %d", a, b, a + b);
// }

// function getNum()
// {
//     return (5);
// }

// Curry();
// add2Num(12,22);
// let num;
// num = getNum();
// console.log(num);

// console.log("Timestamp:2 %d", new Date());