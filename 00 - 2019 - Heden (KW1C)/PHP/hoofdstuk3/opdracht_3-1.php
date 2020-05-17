<!DOCTYPE html>

<?php
require "../includes/moduleheader.php";
require "variabelen.php";
?>

<html lang="nl">

    <head>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <title>
            Opdracht 3.1
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
                        $event = "De Elfstedentocht";
                        $eventAlt = "Alvestêdetocht";
                        $distance = 200;
                        $compType = "schaatstocht";
                        $terrain = "natuurijs";
                        $org = "Koninklijke Vereniging De Friesche Elf Steden";
                        $mainCity = "Leeuwarden"; // Main City instead of Capital
                        $province = "Friesland";
                        $compfreq = 15;
                        $originYear = 1909;
                        $maxFreq = 1;

                        $verhaalEen =
                            "$event (Fries: $eventAlt is een $distance kilometer lange $compType over $terrain
                            die wordt georganiseerd door de $org. $mainCity, de hoofdstad van $province, is start-en aankomstplaats. 
                            $event is inmiddels $compfreq maal verreden en werd voor het eerst in $originYear gereden en wordt maximaal 
                            $maxFreq keer per winter gehouden.";

                        // Verhaal
                        $verhaal =
                            $event
                            . " (Fries: " . $eventAlt
                            . ") is een " . $distance
                            . " kilometer lange " . $compType
                            . " over " . $terrain
                            . " die wordt georganiseerd door de " . $org
                            . ". " . $mainCity
                            . ", de hoofdstad van " . $province
                            . ", is start-en aankomstplaats. " . $event
                            . " is inmiddels " . $compfreq
                            . " maal verreden en werd voor het eerst in " . $originYear
                            . " gereden en wordt maximaal " . $maxFreq
                            . " keer per winter gehouden.";

                        echo "<p>" . $verhaalEen . "</p>";
                        ?>

                </p>
            </main>

        </div>

        <?php
        include "../includes/footer.php"
        ?>

    </body>

</html>