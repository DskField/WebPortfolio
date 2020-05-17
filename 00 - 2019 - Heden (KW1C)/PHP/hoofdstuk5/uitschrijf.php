<?php

    $delDatVar = "NEE";
    $succesVar = "NEE";

    if (!empty($_GET["delData"])){
        $delDatVar = "JA";
    }
    elseif (!empty($_GET["successClass"])) {
        $succesVar = "JA";
    }

    echo "<h1>Uitschrijfformulier KW1C</h1>";
    echo "<hr>";

    echo "<table>";

    echo "<tr>";
    echo "<td>Voor en achternaam: </td><td>" . $_GET["fullName"] . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Studentennummer: </td><td>" . $_GET["studentID"] . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Datum van uitschrijving: </td><td>" . $_GET["signOutDate"] . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Reden van uitschrijving: </td><td>" . $_GET["reason"] . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Leerjaar: </td><td>" . $_GET["grade"] . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Aanmelden bij succesklas: </td><td>" . $succesVar . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Verwijderen gegevens: </td><td>" . $delDatVar . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Reden van uitschrijving: </td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>" . $_GET["message"] . "</td>";
    echo "</tr>";

    echo "</table>";