<!DOCTYPE html>

<?php
require "../includes/moduleheader.php";
require "../hoofdstuk3/variabelen.php";
?>

<html lang="nl">

<head>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>
        Opdracht 4.4
    </title>
</head>

<body class="flex-verti">

<?php
include "../includes/header.php";
?>

<!-- Container voor onder de header -->
<div class="maincont flex-horizon">

    <?php
    require "../includes/menu.php"
    ?>

    <!-- Uitwerkingen -->
    <main id="wrapper">
        <h2>
            Uitwerkingen
        </h2>

        <p>
            <?php

                echo "<h3> Taak 1 </h3>";
                date_default_timezone_set("Europe/Amsterdam");

                for ($i = 0; $i < 7; $i++) {
                    $weekdayEN = Date("w", strtotime("+$i days"));
                    $weekdayNL = null;
                    $day = Date("d-m-Y", strtotime("+$i days"));

                    switch ($weekdayEN) {
                        case 1:
                            $weekdayNL = "maandag";
                            break;
                        case 2:
                            $weekdayNL = "dinsdag";
                            break;
                        case 3:
                            $weekdayNL = "woensdag";
                            break;
                        case 4:
                            $weekdayNL = "donderdag";
                            break;
                        case 5:
                            $weekdayNL = "vrijdag";
                            break;
                        case 6:
                            $weekdayNL = "zaterdag";
                            break;
                        case 0:
                            $weekdayNL = "zondag";
                            break;
                    }

                    echo "Dag " . $i . " is " . $weekdayNL . " " . $day . "<br />";
                }

                echo "<br /> <hr>";

                echo "<h3> Taak 2 </h3>";

                for ($x = 0; $x < 7; $x++) {
                    $weekdayEN = Date("D", strtotime("+$x days"));
                    $weekdayNL = null;
                    $day = Date("d-m-Y", strtotime("+$x days"));

                    switch ($weekdayEN) {
                        case "Mon":
                            $weekdayNL = "maandag";
                            break;
                        case "Tue":
                            $weekdayNL = "dinsdag";
                            break;
                        case "Wed":
                            $weekdayNL = "woensdag";
                            break;
                        case "Thu":
                            $weekdayNL = "donderdag";
                            break;
                        case "Fri":
                            $weekdayNL = "vrijdag";
                            break;
                        case "Sat":
                            $weekdayNL = "zaterdag";
                            break;
                        case "Sun":
                            $weekdayNL = "zondag";
                            break;
                    }

                    if ($x == 0) {
                        echo "Vandaag is " . $weekdayNL . " " . $day;
                    }
                    elseif ($x == 1) {
                        echo "Morgen is " . $weekdayNL . " " . $day;
                    }

                    elseif ($x == 2) {
                        echo "Overmorgen is " . $weekdayNL . " " . $day;
                    }
                    else {
                        echo "Over" . (str_repeat("-over", $x)) . "morgen is " . $weekdayNL . " " . $day;
                    }

                    echo "<br />";
                }

            ?>
        </p>
    </main>

</div>

<?php
include "../includes/footer.php"
?>

</body>

</html>