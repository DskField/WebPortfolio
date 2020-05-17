<?php

include "../includes/functions.php";

echo "
<style>
 th,
 td { 
        width: 300px; 
        border: 1px solid #000000;
    }
</style>";

echo "<table>";

echo "<tr>";
echo "<th>Vraag</th> <th>Antwoord</th>";
echo "</tr>";

echo "<tr>";
echo "<td>Naam</td> <td>" . $_POST["fullName"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Leeftijd</td> <td>" . $_POST["age"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Gemeente</td> <td>" . $_POST["munic"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Inwoners</td> <td>" . $_POST["inhab"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Aantal opnames</td> <td>" . $_POST["countHosp"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td>Kennissen besmet</td> <td>" . $_POST["knowsContPeople"] . "</td>";
echo "</tr>";

echo "</table>";