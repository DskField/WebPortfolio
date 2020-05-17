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
            addGoalTeam1();
        })
        .contextmenu(function () {
            decGoalTeam1();
        });

    $("#goalsTeam2")
        .click(addGoalTeam2)
        .contextmenu(decGoalTeam2);

    $("#geleKaartenTeam1")
        .click(function () {
            addGeleKaartTeam1();
        })
        .contextmenu(function () {
            decGeleKaartTeam1();
        });

    $("#geleKaartenTeam2")
        .click(function () {
            addGeleKaartTeam2();
        })
        .contextmenu(function () {
            decGeleKaartTeam2();
        });

    $("#rodeKaartenTeam1")
        .click(function () {
            addRodeKaartTeam1();
        })
        .contextmenu(function () {
            decRodeKaartTeam1();
        });

    $("#rodeKaartenTeam2")
        .click(function () {
            addRodeKaartTeam2();
        })
        .contextmenu(function () {
            decRodeKaartTeam2();
        });

    $("#wisselsTeam1")
        .click(function () {
            addWisselTeam1();
        })
        .contextmenu(function () {
            decWisselTeam1();
        });

    $("#wisselsTeam2")
        .click(function () {
            addWisselTeam2();
        })
        .contextmenu(function () {
            decWisselTeam2();
        });

    $("#cornersTeam1")
        .click(function () {
            addCornerTeam1();
        })
        .contextmenu(function () {
            decCornerTeam1();
        });

    $("#cornersTeam2")
        .click(function () {
            addCornerTeam2();
        })
        .contextmenu(function () {
            decCornerTeam2();
        });

    $("#penaltiesTeam1")
        .click(function () {
            addPenaltyTeam1();
        })
        .contextmenu(function () {
            decPenaltyTeam1()
        });

    $("#penaltiesTeam2")
        .click(function () {
            addPenaltyTeam2();
        })
        .contextmenu(function () {
            decPenaltyTeam2()
        });

    $("#ingooienTeam1")
        .click(function () {
            addIngooienTeam1();
        })
        .contextmenu(function () {
            decIngooienTeam1()
        });

    $("#ingooienTeam2")
        .click(function () {
            addIngooienTeam2();
        })
        .contextmenu(function () {
            decIngooienTeam2()
        });
});