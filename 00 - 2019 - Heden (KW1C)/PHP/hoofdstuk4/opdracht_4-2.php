<!DOCTYPE html>

<?php
require "../includes/moduleheader.php";
require "../hoofdstuk3/variabelen.php";
include "script4-2.php";
?>

<html lang="nl">

<head>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>
        Opdracht 4.2
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
                echo "Voor het vak <strong>$courseName</strong> heb je <strong>$teacherName</strong> als docent.";
            ?>

        </p>
    </main>

</div>

<?php
include "../includes/footer.php"
?>

</body>

</html>