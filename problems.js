// Javascript Practice 2
// May 15, 2023
// Evan Davies


// 1
function getArea(radius=1) {
    var area = Math.PI * radius * radius;
    return area;
};

var area = getArea(); // Pass in the radius (defaults to 1)
console.log(area);


// 2
function diceRoll(d = 6) {
    var max = Math.floor(d) + 1;
    return Math.floor(Math.random() * (max - 1) + 1);
};

var roll = diceRoll(); // Pass in the number of sides the die to be rolled should have (defaults to 6)
console.log(roll);


// 3
function convert(celcius = 0) {
    var farenheit = (celcius * (9/5)) + 32;
    return `${farenheit} F`;
}

var farenheit = convert(); // Pass in the temperature in celcius to convert to farenheit (defaults to 0)
console.log(farenheit);


// 4
function convert2(degrees = 0, forc = "F") {
    if (forc.toUpperCase() === "F") {
        var farenheit = (degrees * (9/5)) + 32;
        return `${farenheit} F`;
    }
    else if (forc.toUpperCase() === "C") {
        var celcius = (degrees - 32) * (5/9);
        return `${celcius} C`;
    };
};

var temp = convert2(); // Pass in a number (the degrees, defaults to 0) and "F" to convert to farenheit or "C" to convert to celcius (defaults to "F")
console.log(temp);


// 5
function isUnder50(...nums) {
    var isUnder50 = true;
    if (nums === undefined) {
        return isUnder50;
    };
    for (var i = 0; i < arguments.length; i++) {
        if (nums[i] >= 50) {
            isUnder50 = false;
        };
    };
    return isUnder50;
};

var under50 = isUnder50(); // Pass in any amount of numbers, and if they're all less than 50, function will return true. If a single one is 50 or greater, false will be returned. Defaults to true.
console.log(under50);


// 6
function sum(...nums) {
    var sum = 0;
    if (nums === undefined) {
        return sum;
    };
    for (var i = 0; i < arguments.length; i++) {
        sum += nums[i];
    };
    return sum;
}

var sum = sum(); // Pass in any amount of numbers, and they will be added together (defaults to 0)
console.log(sum);


// 7
function multOf3(num = 3) {
    var isMultOf3;
    if (num % 3 === 0) {
        isMultOf3 = true;
    }
    else {
        isMultOf3 = false;
    };
    return isMultOf3;
};

var check = multOf3(); // Pass in any number (defaults to 3). If it's a multiple of 3, true is returned. If not, false is returned.
console.log(check);


// 8
function discount(orig = 10, percent) {
    if (percent === undefined) {
        return orig;
    };
    var discounted = orig - (orig * (percent/100));
    return discounted;
};

var discounted = discount(); // Pass in the original price (defaults to 10) and the percent discount. Returns the discounted price. If no percent is specified, the original price is returned. 
console.log(discounted);


// 9
function daysHoursMins(seconds = 0) {
    var days = 0;
    var hours = 0;
    var minutes = 0;

    minutes = Math.floor(seconds/60);
    if (minutes >= 60) {
        hours = Math.floor(minutes/60);
        minutes = minutes - (hours * 60);
    };
    if (hours >= 12) {
        days = Math.floor(hours/12);
        hours = hours - (days * 12);
    };
    return `${days} Days, ${hours} Hours, ${minutes} Minutes`;
};

var time = daysHoursMins(); // Pass in any amount of seconds (defaults to 0) and the time in seconds will be converted to time in minutes, hours and days
console.log(time);


// 10
function daysHoursMins2(seconds = 0) {
    var days = 0;
    var hours = 0;
    var minutes = 0;

    minutes = Math.floor(seconds/60);
    if (minutes >= 60) {
        hours = Math.floor(minutes/60);
        minutes = minutes - (hours * 60);
        if (hours >= 12) {
            days = Math.floor(hours/12);
            hours = hours - (days * 12);
            return `${days} Days, ${hours} Hours, ${minutes} Minutes`;
        }
        else {
            return `${hours} Hours, ${minutes} Minutes`;
        };
    }
    else {
        return `${minutes} Minutes`;
    };
};

var time2 = daysHoursMins2(); // Similar to above, but will only give relevant information. If there is more than 60 minutes, hours will be shown, for example. Defaults to 0 seconds.
console.log(time2);