$("H1").fadeIn();
$("H2").fadeIn();
$("P").fadeIn(2000);

$("IMG").slideToggle();

// FadeTo is een functie die ervoor zorgt dat een element naar een zelfbepaalde opacity gaat "faden".
// Het verschil tussen FadeIn en FadeTo is dat FadeIn automatisch naar opacity value 1.0 gaat.
// ... bij FadeTo kun je zelf de opacity bepalen.
$("H3").fadeTo(3000, 0.3);