<!DOCTYPE html>

    <?php
        require "../includes/moduleheader.php"
    ?>

    <html lang="nl">

    <head>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <title>
            Uitwerkingen
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
                <h3>Restaria Kees Kroket</h3>
                <ul>
                    <li>Visstraat 12</li>
                    <li>5211 DN 's-Hertogenbosch</li>
                    <li>073 613 6720</li>
                    <li>info@restariakeeskroket.nl</li>
                </ul>
            </section>

            <form action="form_data.php" method="get">
                <label for="companyName">Bedrijfsnaam</label> <br>
                <input type="text" name="companyName" id="companyName"> <br>

                <label for="firstName">Voornaam</label> <br>
                <input type="text" name="firstName" id="firstName"> <br>

                <label for="lastName">Achternaam</label> <br>
                <input type="text" name="lastName" id="lastName"> <br>

                <label for="phoneNumber">Telefoon</label> <br>
                <input type="tel" name="phoneNumber" id="phoneNumber"> <br>

                <label for="email">E-mail</label> <br>
                <input type="email" name="email" id="email"> <br>

                <label for="message">Bericht</label> <br>
                <textarea name="message" id="message"> </textarea> <br>
                <br>
                <input type="submit" value="Versturen">
            </form>

        </main>

    </div>

    <?php
        include "../includes/footer.php"
    ?>

    </body>

</html>