$(document).ready(function () {
    $("td")
        .mouseover(function() {
            $(this).css("background-color", "yellow");
        })
        .mouseleave(function () {
            $(this).css("background-color", "revert");
        });

    $("#resetButton")
        .click(function () {
            resetClicked();
        });

    $("#naamTeam1").click(changeNaamTeam1);

    $("#naamTeam2")
        .click(function () {
            changeNaamTeam2();
        });

    $("#goalsTeam1")
        .click(function () {
            addGoalsTeam1();
        });

    $("#goalsTeam2")
        .click(function () {
            addGoalsTeam2();
        });

    $("#geleKaartenTeam1")
        .click(function () {
            addGeleKaartenTeam1();
        });

    $("#geleKaartenTeam2")
        .click(function () {
            addGeleKaartenTeam2();
        });

    $("#rodeKaartenTeam1")
        .click(function () {
            addRodeKaartenTeam1();
        });

    $("#rodeKaartenTeam2")
        .click(function () {
            addRodeKaartenTeam2();
        });

    $("#wisselsTeam1")
        .click(function () {
            addWisselsTeam1();
        });

    $("#wisselsTeam2")
        .click(function () {
            addWisselsTeam2();
        });

    $("#cornersTeam1")
        .click(function () {
            addCornersTeam1();
        });

    $("#cornersTeam2")
        .click(function () {
            addCornersTeam2();
        });

    $("#penaltiesTeam1")
        .click(function () {
            addPenaltiesTeam1();
        });

    $("#penaltiesTeam2")
        .click(function () {
            addPenaltiesTeam2();
        });

    $("#ingooienTeam1")
        .click(function () {
            addIngooienTeam1();
        });

    $("#ingooienTeam2")
        .click(function () {
            addIngooienTeam2();
        });
});