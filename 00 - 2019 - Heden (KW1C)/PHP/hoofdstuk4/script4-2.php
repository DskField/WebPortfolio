<?php

    $courseName = "PHP";
    $teacherName = null;

    switch ($courseName) {

        case "PHP":
            $teacherName = "Evers";
            break;

        case "Javascript":
        case "Database SQL":
            $teacherName = "Van de Wetering";
            break;

        case "Rekenen":
            $teacherName = "Van Meer";
            break;

        case "Nederlands":
            $teacherName = "Van Rijswijk";
            break;

        case "L&B":
            $teacherName = "Lambrechts";
            break;

        case "Modelleren":
        case "ASP":
            $teacherName = "Gijsbrechts";
            break;

        case "Digitale vaardigheden":
            $teacherName = "Pielage";
            break;

        case "Computertekenen":
            $teacherName = "Van den Berg";
            break;

        case "Engels":
            $teacherName = "Mitrovic";
            break;
    }
?>
