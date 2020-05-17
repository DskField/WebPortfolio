// Taak 3
$("li").click(function () {
    $(this).remove()
});

let i = 1;
$.each($("li"), function () {
    // Taak 1 punt 1
    console.log($(this).text());

    // Taak 4
    let newText = i + ". " + $(this).text();
    $(this).text(newText);
    i++;

    // Taak 2 punt 1
    if ($(this).text() === "Boter") { // Check of tekstinhoud van "deze" li 'Boter' is
        $(this).addClass("hot")
    }

    // Taak 2 punt 2
    if ($(this).text() === "Aardappelen") { // Check of tekstinhoud van "deze" li 'Aardappelen' is
        $(this).removeClass("hot")
    }
    // Taak 1 punt 3
    if (!$(this).hasClass("hot")) {
        $(this).css("color", "#000");
    }

});

// Taak 1 punt 2
let listText = "Niet vergeten: ";
$.each($("li.hot"), function () { // Voor iedere li.hot, spreekt voor zichzelf
    listText += $(this).text() + "; ";
});
alert(listText);