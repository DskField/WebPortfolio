<!DOCTYPE html>

<?php
require "../includes/moduleheader.php";
require "../hoofdstuk3/variabelen.php";
include "script4-3.php";
?>

<html lang="nl">

<head>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>
        Opdracht 4.3
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
                echo "<h3>Taak 2: </h3>" . $task2;
                echo "<br/>";
                echo $task3;
                echo $task4;
                echo $task5;
                echo $task6;
                echo $task7;
            ?>
        </p>
    </main>

</div>

<?php
include "../includes/footer.php"
?>

</body>

</html>