<?php
    session_start();
    if (isset($_SESSION['username'])) {
        $bezoeker = $_SESSION['username']. "&nbsp;<a href='/phpopdrachten/hoofdstuk6/loguit.php'>Loguit</a>";
    }
    else {
        $bezoeker = "onbekende bezoeker". "&nbsp;<a href='/phpopdrachten/hoofdstuk6/opdracht61.php'>Login</a>";
    }
?>
//print vervolgens ook de $bezoeker zodat je de volgende visuele weergave in de pagina ziet

<?php

    date_default_timezone_set("Europe/Amsterdam");
    $uur = date("H");
    
    $wens = null;

    if
    ($uur >= 0 && $uur < 5) {
        $wens = "Goedennacht.";
    }
    elseif
    ($uur >= 5 && $uur < 12) {
        $wens = "Goedenochtend.";
    }
    elseif
    ($uur >= 12 && $uur < 17) {
        $wens = "Goedenmiddag.";
    }
    else
    {
        $wens = "Goedenavond.";
    }

    echo "
        <footer>
            <p> $wens</p>
            <p> Copyright " . $name . " " . "anno " . $year . "</p>
        </footer>
        ";

?>
