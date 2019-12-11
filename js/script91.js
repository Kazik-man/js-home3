// let car = {
//     marka: 'tesla',
//     seria: 'modelX',
//     madeYear: '2015',
//     speed: '220',
    
//     modalWindow: function() {
//         for(let key in this) {
//             if(typeof this[key]) {
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     },

//     speedInHour: function(width) {

//         let result = Math.trunc(width / car.speed);
//         console.log(result);
//         let trace;
//         let allOurTime;
//         if(result >= 4) {
//             trace = Math.trunc(result / 4);
//             console.log(trace);
//             allOurTime = result + trace;
//         }
//         console.log(allOurTime);
//     },
// }
// car.speedInHour(5000);

// console.log(car);



// Задача №2

// let mathematicObj1 = {
//     num1: 6,
//     num2: 8,
// }
// let mathematicObj2 = {
//     num3: 2,
//     num4: 4,
// }
// function funPlus() {
//     let sum1 = mathematicObj1.num1 + mathematicObj2.num3;
//     let sum2 = mathematicObj1.num2 + mathematicObj2.num4;
//     console.log(sum1+'/'+sum2);
//     // if(sum1 <= sum2 && sum1 >= sum2) {
//     //     sum1 = Math.trunc(sum2 / sum1);
//     //     sum2 = sum1 / sum2;
//     // }
//     // console.log(sum1+'/'+sum2);
// }
// function funMinus() {
//     let sum1 = mathematicObj1.num1 - mathematicObj2.num3;
//     let sum2 = mathematicObj1.num2 - mathematicObj2.num4;
//     console.log(sum1+'/'+sum2);
// }
// function funDivider() {
//     let sum1 = Math.trunc(mathematicObj1.num1 / mathematicObj2.num3);
//     let sum2 = Math.trunc(mathematicObj1.num2 / mathematicObj2.num4);
//     console.log(sum1+'/'+sum2);
// }
// function funMultiplier() {
//     let sum1 = mathematicObj1.num1 * mathematicObj2.num3;
//     let sum2 = mathematicObj1.num2 * mathematicObj2.num4;
//     console.log(sum1+'/'+sum2);
// }

// funPlus();
// funMinus();
// funDivider();
// funMultiplier();








// задача №3

let hourLife = {
    hours: 12,
    minutes: 48,
    seconds: 25,

    getTime: function() {
        for(let key in this) {
            console.log(hourLife.hours+':'+hourLife.minutes+':'+hourLife.seconds);
        }        
    },
    changeSeconds: function(sec) {
        hourLife.seconds = hourLife.seconds + sec;

        if(hourLife.seconds >= 60) {
            hourLife.seconds = hourLife.seconds % 60;
            hourLife.minutes = hourLife.minutes + 1;
                            
            console.log(hourLife.hours+':'+hourLife.minutes+':'+hourLife.seconds);
        }
    },
    changeMinutes: function(min) {
        hourLife.minutes = hourLife.minutes + min;

        if(hourLife.minutes >= 60) {
            hourLife.minutes = hourLife.minutes % 60;
            hourLife.hours = hourLife.hours + 1;
                            
            console.log(hourLife.hours+':'+hourLife.minutes+':'+hourLife.seconds);
        }
    },
    changeHours: function(hour) {
        hourLife.hours = hourLife.hours + hour;

        if(hourLife.hours >= 24) {
            hourLife.hours = hourLife.hours % 24;
        }
        console.log(hourLife.hours+':'+hourLife.minutes+':'+hourLife.seconds);
    },
}

hourLife.getTime();
hourLife.changeSeconds(45);
hourLife.changeMinutes(30);
hourLife.changeHours(15);
console.log(hourLife);