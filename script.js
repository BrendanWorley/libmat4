// setting up the containers for generated challenge --------------------------------
let a = 0;
let timesOrBy1 = 0;
let moreLessEquals1 = 0;
let factor1 = 1;
let b = 0;

// defining chellanges fields ----------------------------------
const challenge1 = document.querySelector('.challenge1');

// generating values and loading them into containers -------------------------------

switch (moreLessEquals1 = Math.floor((Math.random() * 3))) {
    case 0:
        moreLessEquals1 = '>';
        console.log("< > =:", moreLessEquals1);
        break;
    case 1:
        moreLessEquals1 = '<';
        console.log("< > =:", moreLessEquals1);
        break;
    case 2:
        moreLessEquals1 = '=';
        console.log("< > =:", moreLessEquals1);
        break;
};

switch (timesOrBy1 = Math.floor((Math.random() * 2))) {
    case 0:
        timesOrBy1 = 'times';
        console.log("в/на:", timesOrBy1);
        break;
    case 1:
        timesOrBy1 = 'by';
        console.log("в/на:", timesOrBy1);
        break;
};

let composite1 = `${moreLessEquals1}${timesOrBy1}`;


switch (composite1) {
    case '<times':
        // SCENARIO - 1
        lessTimes();      
    break;
    case '>times':
        // SCENARIO - 2
        moreTimes();      
    break;
    case '<by':
        // SCENARIO - 3
        lessBy();
    break;
    case '>by':
        // SCENARIO - 4
        moreBy();
    break;
    case '=by':
        // SCENARIO - 5
        equals();
    break;
    case '=times':
        // SCENARIO - 5
        equals();
        break;
};

function lessTimes() {
    // SCENARIO - 1
    console.log("composite1: ", composite1);
    let a = Math.floor((Math.random() * 99) + 1);
    let factor1 = Math.floor((Math.random() * 9) + 1);
    let b = a * factor1;
    console.log("a=: ", a);
    console.log("factor1: ", factor1);
    console.log("b=: ", b);
    challenge1.textContent = `в ${factor1} раз больше чем ${a}`;
};

function moreTimes() {
    // SCENARIO - 2
    console.log("composite1: ", composite1);
    let b = Math.floor((Math.random() * 99) + 1);
    let factor1 = Math.floor((Math.random() * 9) + 1);
    let a = b * factor1;
    console.log("b=: ", b);
    console.log("a=: ", a);
    console.log("factor1: ", factor1);
    challenge1.textContent = `в ${factor1} раз меньше чем ${a}`;
};

function lessBy() {
    // SCENARIO - 3
    console.log("composite1: ", composite1);
    let a = Math.floor((Math.random() * 999) + 1);
    let factor1 = Math.floor((Math.random() * (999 - a)));
    let b = a + factor1;
    console.log("a=: ", a);
    console.log("factor1: ", factor1);
    console.log("b=: ", b);
    challenge1.textContent = `на ${factor1} больше чем ${a}`;
};

function moreBy() {
    console.log("composite1: ", composite1);
    let b = Math.floor((Math.random() * 999) + 1);
    let factor1 = Math.floor((Math.random() * (999 - b)));
    let a = b + factor1;
    console.log("b=: ", b);
    console.log("factor1: ", factor1);
    console.log("a=: ", a);
    challenge1.textContent = `на ${factor1} меньше чем ${a}`;
};

function equals() {
    console.log("composite1: ", composite1);
    let a = Math.floor((Math.random() * 999) + 1);
    let b = a;
    console.log("a=: ", a);
    console.log("b=: ", b);
    challenge1.textContent = `равное ${a}`;
};