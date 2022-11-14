// setting up the containers for generated challenge --------------------------------
let a = 0;
let timesOrBy1 = 0;
let moreLessEquals1 = 0;
let factor1 = 1;
let b = 0;
let challengeABResult = 0;
let challengeCDResult = 0;
let globalMoreLess;
let globalBy;
let globalTimes;

// defining chellanges fields ----------------------------------
const challenge1 = document.querySelector('.challenge1');
const challenge2 = document.querySelector('.challenge2');

// extracting responding values --------------------------------
const selectResponse = document.querySelector('.selectResponse');
const responseBy = document.querySelector('.responseBy');
const responseTimes = document.querySelector('.responseTimes');
responseTimes.style.visibility = 'hidden';
const labelTimesBefore = document.querySelector('.labelTimesBefore');
labelTimesBefore.style.visibility = 'hidden';
const labelTimesAfter = document.querySelector('.labelTimesAfter');
labelTimesAfter.style.visibility = 'hidden';
const checkButton = document.querySelector('.checkButton');
const refreshButton = document.querySelector('.refreshButton');


const checkResultMoreLess = document.querySelector('.checkResultMoreLess');


// generating values and loading them into containers -------------------------------

function challenge(placeholder, challengeResult) {
        // a = 0;
        // timesOrBy1  ;
        // moreLessEquals1 ;
        // factor1 = 1;
        // b = 0;
        // placeholder = placeholder;
         
    

    
        switch (moreLessEquals1 = Math.floor((Math.random() * 2))) {
            case 0:
                moreLessEquals1 = '>';
                console.log("< > =:", moreLessEquals1);
                break;
            case 1:
                moreLessEquals1 = '<';
                console.log("< > =:", moreLessEquals1);
                break;
            // case 2:
            //     moreLessEquals1 = '=';
            //     console.log("< > =:", moreLessEquals1);
            //     break;
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
            // case '=by':
            //     // SCENARIO - 5
            //     equals();
            // break;
            // case '=times':
            //     // SCENARIO - 5
            //     equals();
            //     break;
        };

        function lessTimes() {
            // SCENARIO - 1
            console.log("composite1: ", composite1);
            a = Math.floor((Math.random() * 99) + 1);
            factor1 = Math.floor((Math.random() * 9) + 1);
            b = a * factor1;
            console.log("a=: ", a);
            console.log("factor1: ", factor1);
            console.log("b=: ", b);
            placeholder.textContent = `в ${factor1} раз больше чем ${a}`;
            
            if (placeholder === challenge1) {
                challengeABResult = b;
            } else {
                challengeCDResult = b;
            };
            
        };

        function moreTimes() {
            // SCENARIO - 2
            console.log("composite1: ", composite1);
            b = Math.floor((Math.random() * 99) + 1);
            factor1 = Math.floor((Math.random() * 9) + 1);
            a = b * factor1;
            console.log("b=: ", b);
            console.log("a=: ", a);
            console.log("factor1: ", factor1);
            placeholder.textContent = `в ${factor1} раз меньше чем ${a}`;
            
            if (placeholder === challenge1) {
                challengeABResult = b;
            } else {
                challengeCDResult = b;
            };
        };

        function lessBy() {
            // SCENARIO - 3
            console.log("composite1: ", composite1);
            a = Math.floor((Math.random() * 999) + 1);
            factor1 = Math.floor((Math.random() * (999 - a)));
            b = a + factor1;
            console.log("a=: ", a);
            console.log("factor1: ", factor1);
            console.log("b=: ", b);
            placeholder.textContent = `на ${factor1} больше чем ${a}`;
            
            if (placeholder === challenge1) {
                challengeABResult = b;
            } else {
                challengeCDResult = b;
            };

        };

        function moreBy() {
            console.log("composite1: ", composite1);
            b = Math.floor((Math.random() * 999) + 1);
            factor1 = Math.floor((Math.random() * (999 - b)));
            a = b + factor1;
            console.log("b=: ", b);
            console.log("factor1: ", factor1);
            console.log("a=: ", a);
            placeholder.textContent = `на ${factor1} меньше чем ${a}`;
            
            if (placeholder === challenge1) {
                challengeABResult = b;
            } else {
                challengeCDResult = b;
            };
        };

        // function equals() {
        //     console.log("composite1: ", composite1);
        //     a = Math.floor((Math.random() * 999) + 1);
        //     b = a;
        //     console.log("a=: ", a);
        //     console.log("b=: ", b);
        //     placeholder.textContent = `равное ${a}`;
        // };
};

const returnAB = challenge(challenge1, challengeABResult);
console.log("ABResult", challengeABResult);
const returnCD = challenge(challenge2, challengeCDResult);
console.log("CDResult", challengeCDResult);

if (challengeABResult < challengeCDResult) {
    globalMoreLess = '<';
} else {
    globalMoreLess = '>';
};
console.log("global moreOrLess", globalMoreLess);

globalBy = Math.abs(challengeABResult - challengeCDResult);
console.log("global by: ", globalBy);

if (challengeABResult < challengeCDResult && (challengeCDResult % challengeABResult) === 0) {
    globalTimes = challengeCDResult / challengeABResult;
    console.log("global times: ", globalTimes);
} else if (challengeABResult > challengeCDResult && (challengeABResult % challengeCDResult) === 0) {
    globalTimes = challengeABResult / challengeCDResult;
    console.log("global times: ", globalTimes);
};

if (globalTimes) {
    responseTimes.style.visibility = 'visible';
    labelTimesAfter.style.visibility = 'visible';
    labelTimesBefore.style.visibility = 'visible';
};

checkButton.addEventListener('click', checkResults);

function checkResults() {
    if (globalTimes) {
            if (globalMoreLess === selectResponse.value && globalBy == responseBy.value && globalTimes == responseTimes.value) {
                checkResultMoreLess.textContent = 'ПРАВИЛЬНО';
                checkResultMoreLess.style.backgroundColor = 'lightgreen';
            } else {
                checkResultMoreLess.textContent = 'НЕправильно!';
                checkResultMoreLess.style.backgroundColor = 'red';
            };
        } else {
            if (globalMoreLess === selectResponse.value && globalBy == responseBy.value) {
                checkResultMoreLess.textContent = 'ПРАВИЛЬНО';
                checkResultMoreLess.style.backgroundColor = 'lightgreen';
            } else {
                checkResultMoreLess.textContent = 'НЕправильно!';
                checkResultMoreLess.style.backgroundColor = 'red';
            };
        }
};

refreshButton.addEventListener('click', refresh);

function refresh() {
    selectResponse.value = 'выбрать';
    responseBy.value = '';
    responseTimes.value = '';
    location.reload();
};


