// Taak 2
$.each($("td:nth-of-type(3)"), function () {
    if ( $(this).text() === "Denbosch" ) {
        $(this).css({
            "background-color": "blue",
            "color": "white"
        })
    } else if ( $(this).text() === "Zijtaart") {
        $(this).css({
            "background-color": "green",
            "color": "white"
        })
    }
});

// Taak 3
let thisYear = new Date().getFullYear();
let age;

$.each($("td:nth-of-type(4)"), function () {
    age = thisYear - $(this).text();

    if (age >= 50) {
        $(this).css({
            "background-color": "silver",
            "color": "white"
        })
    } else if (age < 26) {
        $(this).css({
            "background-color": "green",
            "color": "white"
        })
    }
});

// Taak 4
$.each($("td:nth-of-type(5)"), function () {
    if ( $(this).text() === "Male" ) {
        $(this).css({
            "background-color": "blue",
            "color": "white"
        })
    } else if ( $(this).text() === "Female") {
        $(this).css({
            "background-color": "pink",
            "color": "white"
        })
    }
});

let memberDuration;
// Taak 5
$.each($("td:nth-of-type(7)"), function () {
    memberDuration = thisYear - $(this).text();

    if (memberDuration >= 25) {
        $(this).css({
            "background-color": "orange",
            "color": "white"
        })
    } else if (memberDuration < 10) {
        $(this).css({
            "background-color": "green",
            "color": "white"
        })
    }
});