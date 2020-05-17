$("#btnTaak1").click(
    function () {
        $(this).fadeOut(
            1000,
            function () {
                $("#h3Taak1").css("color", "red");
                $("#pTaak1").fadeTo(1000, 0.5);
            }
        );
    }
);

$("#btnTaak2").click(
    function () {
        $("#divTaak2").animate(
            {
                width: 500
            },
            3000,
            function () {
                // Maak variabele voor vandaag
                let today = new Date();

                // Log naam + datum naar console
                console.log(`David, datum: ${today.getDate()}-${today.getMonth()+1}`);
                $("#pTaak2").fadeToggle();
                $("#divTaak2").animate({
                    width: 50
                    },
                    4000
                );
            })
    }
);

$("#rechts").click(
    function () {
        $("#divTaak3").animate({
            "margin-left": 100
        },
        2000,
        function () {
            $("#links").fadeIn();
            $("#rechts").fadeOut();
        })
    }
);

$("#links").click(
    function () {
        $("#divTaak3").animate({
                "margin-left": 0
            },
            2000,
            function () {
                $("#rechts").fadeIn();
                $("#links").fadeOut();
            })
    }
);