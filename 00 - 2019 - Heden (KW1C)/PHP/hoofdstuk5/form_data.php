<?php

echo "<style> td{ border: 1px solid #000000 }</style>";

echo "<h3>Ingevoerde gegevens:</h3>";

echo "<table>";

echo "<tr>";
echo "<td>Bedrijfsnaam </td><td>" . $_GET["companyName"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Voornaam </td><td>" . $_GET["firstName"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Achternaam </td><td>" . $_GET["lastName"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Telefoon </td><td>" . $_GET["phoneNumber"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>E-mail </td><td>" . $_GET["email"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Bericht </td><td>" . $_GET["message"] . "</td>";
echo "</tr>";

echo "</table>";