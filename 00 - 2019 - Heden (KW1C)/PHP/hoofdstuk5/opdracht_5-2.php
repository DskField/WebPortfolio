<!DOCTYPE html>

<?php
require "../includes/moduleheader.php"
?>

<html lang="nl">

<head>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>
        Opdracht 5.2
    </title>
</head>

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
            <h1>Uitschrijfformulier KW1C</h1>
            <hr>

            <form action="uitschrijf.php" method="get">

                <table>
                    <tr>
                        <td>
                            <label for="fullName">Voor en achternaam</label>
                        </td>
                        <td>
                            <input type="text" name="fullName" id="fullName" class="long">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="studentID">Studentennummer</label>
                        </td>
                        <td>
                            <input type="number" name="studentID" id="studentID" class="long">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="signOutDate">Datum van uitschrijving</label>
                        </td>
                        <td>
                            <input type="date" name="signOutDate" id="signOutDate" class="long">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="reason">Reden van uitschrijving</label>
                        </td>
                        <td>
                            <select name="reason" id="reason" class="long select">
                                <option>Verkeerde studiekeuze</option>
                                <option>Geen zin meer</option>
                                <option>Financiële redenen</option>
                                <option>Anders</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="grade">Leerjaar</label>
                        </td>
                        <td>
                            <input type="radio" id="first" name="grade" value="1e leerjaar">
                            <label for="first">1e leerjaar</label><br>
                            <input type="radio" id="second" name="grade" value="2e leerjaar">
                            <label for="second">2e leerjaar</label><br>
                            <input type="radio" id="third" name="grade" value="3e leerjaar">
                            <label for="third">3e leerjaar</label>
                        </td>
                    </tr>

                </table>
                <br />

                <input type="checkbox" id="successClass" name="successClass" value="ja" >
                <label for="successClass">Ik wil me aanmelden bij de succesklas</label> <br />

                <input type="checkbox" id="delData" name="delData" value="ja">
                <label for="delData">Verwijder mijn gegevens uit het systeem</label> <br />
                <br />
                <label for="message">Geef hieronder de reden van je uitschrijving op:</label> <br />
                <textarea name="message" id="message"> </textarea> <br />

                <input type="submit" value="Versturen">
            </form>

        </section>
    </main>

</div>

<?php
include "../includes/footer.php"
?>

</body>

</html>