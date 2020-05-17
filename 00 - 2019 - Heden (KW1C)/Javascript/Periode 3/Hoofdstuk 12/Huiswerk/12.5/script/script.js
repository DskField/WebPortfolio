$(document).ready(function () {

    $("startbutton")
        .click(function () {
            $(this).fadeOut();
            $("textbox.intro").fadeIn();
            setTimeout(function () {
                $("textbox.intro").fadeOut();
            },
            5000
            );
        });

    $("homeBuilding")
        .click(function () {
            $("textbox.home").fadeIn();
            setTimeout(function () {
                    $("textbox.home").fadeOut();
                },
                5000
            );
        });

    $("administration")
        .click(function () {
            $("textbox.admin").fadeIn();
            setTimeout(function () {
                    $("textbox.admin").fadeOut();
                },
                5000
            );
        });
});