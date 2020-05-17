<?php

    $task2 = "Lancering in: ";
    $task3 = $task2;

    $task4 = "";
    $task5 = $task4;
    $task6 = $task4;
    $task7 = $task4;

    // Taak 2
    $i = 20;
    while ($i > 0) {
        $i--;
        if ($i == 0) $task2 .= "$i";
        else $task2 .= "$i, ";
    }

    // Taak 3
    for ($x = 19; $x >= 0; $x--) {
        if ($x == 0) $task3 .= "$x";
        else $task3 .= "$x, ";
    }

    // Taak 4
    $y = 1;
    while ($y <= 6) {
        $task4 .= "<h" . $y . ">Dit is de " . $y . "e iteratie</h" . $y . ">";
        $y++;
    }

    // Taak 5
    $task5 = "<table> <tr>";
    for ($z = 1; $z <= 10; $z++) {
        $task5 .= "<td> Dit is de " . $z . "e iteratie </td>";
    }
    $task5 .= "</tr> </table>";

    // Taak 6
    $countYear = 2020;
    $birthYear = 1999;
    while ($countYear >= $birthYear) {
        if ($countYear == 2020){
            $task6 .= "<p>In " . $countYear . " ben/word ik " . ($countYear - $birthYear) . " jaar oud</p>";
        } elseif ($countYear == $birthYear){
            $task6 .= "<p>In " . $countYear . " ben ik geboren</p>";
        } else {
            $task6 .= "<p>In " . $countYear . " was ik " . ($countYear - $birthYear) . " jaar oud</p>";
        }
        $countYear--;
    }

    // Taak 7
    for ($nuCountYear = 2020; $nuCountYear >= $birthYear; $nuCountYear--) {
        $age = $nuCountYear - $birthYear;

        if ($nuCountYear == 2020){
            $task7 .= "<p>In " . $nuCountYear . " ben/word ik " . ($age) . " jaar oud</p>";
        }

        else {
            switch ($age) {
                case 0:
                    $task7 .= "<p>In " . $nuCountYear . " ben ik geboren</p>";
                    break;
                case 2:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud en werd ik een peuter</p>";
                    break;
                case 4:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud en werd ik een kleuter</p>";
                    break;
                case 8:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud en werd ik een tiener</p>";
                    break;
                case 12:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud en werd ik een puber</p>";
                    break;
                case 18:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud en werd ik een adolescent</p>";
                    break;
                case 20:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud en werd ik een volwassene</p>";
                    break;
                default:
                    $task7 .= "<p>In " . $nuCountYear . " was ik " . ($age) . " jaar oud</p>";
            }
        }
    }

?>