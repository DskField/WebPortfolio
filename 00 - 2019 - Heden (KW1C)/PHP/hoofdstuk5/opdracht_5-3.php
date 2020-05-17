<!DOCTYPE html>

<?php
require "../includes/moduleheader.php"
?>

<html lang="nl">

<head>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>
        Opdracht 5.3
    </title>
</head>.

<body class="flex-verti">

<?php
include "../hoofdstuk3/variabelen.php";
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

        <section>
            <h2> Opdracht 5.3 </h2>

            <form action="form_covid.php" method="post">

                <table>
                    <tr>
                        <td>
                            <label for="fullName">Wat is je naam:</label>
                        </td>
                        <td>
                            <input type="text" name="fullName" id="fullName" class="long">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="age">Wat is je leeftijd:</label>
                        </td>
                        <td>
                            <input type="number" name="age" id="age" class="long">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="munic">Gemeente:</label>
                        </td>
                        <td>
                            <select name="munic" id="munic" class="long select">
                                <option>Den Bosch</option>
                                <option>Tilburg</option>
                                <option>Eindhoven</option>
                                <option>Nijmegen</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="inhab">Aantal inwoners gemeente:</label>
                        </td>
                        <td>
                            <input type="number" name="inhab" id="inhab" class="long">
                        </td>
                    </tr>

                </table>

                <br />

                <label for="knowsContPeople">Ken je mensen die besmet zijn in je woonplaats?</label>
                <input type="radio" id="first" name="knowsContPeople" value="ja"> <label for="first">Ja</label>
                <input type="radio" id="second" name="knowsContPeople" value="nee"> <label for="second">Nee</label>

                <br />
                <br />

                <label for="countHosp">Aantal ziekenhuisopnames in je gemeente?*</label>
                <input type="text" id="countHosp" name="countHosp">
                <br />

                <input type="submit" value="Versturen">

                <br />

                <p>* Zie aantallen per gemeente per 100.000 bewoners
                    <a id="rivm" href="https://www.rivm.nl/actuele-informatie-over-coronavirus">site RIVM</a>
                </p>
            </form>

        </section>
    </main>

</div>

<?php
include "../includes/footer.php"
?>

</body>

</html>