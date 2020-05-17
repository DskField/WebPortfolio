<!DOCTYPE html>

<?php
require "../includes/moduleheader.php";
require "variabelen.php";
?>

<html lang="nl">

<head>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>
        Opdracht 3.2
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
            // Maak klasse Country
            class Country {
                // Public gedaan om daarom
                public $name;
                public $lowAge;
                public $highAge;

                // Constructor
                public function __construct($name, $lowAlcAge, $highAlcAge)
                {
                    $this->name = $name;
                    $this->lowAge = $lowAlcAge;
                    $this->highAge = $highAlcAge;
                }
            }

            // Instanciëer alle landen
            $belg = new Country("België", 16, 18);
            $bulg = new Country("Bulgarijë", 18, 18);
            $cyp = new Country("Cyprus", 17, 17);
            $ned = new Country("Nederland", 18, 18);
            $zwe = new Country("Zweden", 18, 20);

            // Maak array met alle landen
            $countries = [
                $belg, $bulg, $cyp, $ned, $zwe
            ];

            // De twee verplichte variabelen
            $countryName = "Bulgarijë";
            $currentAge  = 18;

            // Variabele voor straks, om een country in te stoppen.
            // Voor nu is hij null, want dan zeurt de compiler niet.
            $currentCountry = null;

            // For-loop die een land uit de array vist met dezelfde naam als countryName
            for ($i = 0; $i < count($countries); $i++) {

                if ($countryName == $countries[$i]->name) {
                    $currentCountry = $countries[$i];
                    break;
                }
            }

            echo "<p>Je woont in " . $currentCountry->name . " en je bent " . $currentAge . " jaar oud.";

            // Als je leeftijd hoger zit dan de leeftijd voor sterke drank,
            // hoef je niet voor alle andere condities te checken.
            // Vandaar dat hij dus bovenaan staat.
            if ($currentAge >= $currentCountry->highAge){
                echo "<p>Je mag hier alle drank drinken.</p>";
            }
            elseif ($currentAge >= $currentCountry->lowAge && $currentAge < $currentCountry->highAge) {
                echo "<p>Je mag hier alleen zwakke drank drinken.</p>";
            }
            else {
                echo "<p>Je mag hier niets drinken.</p>";
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