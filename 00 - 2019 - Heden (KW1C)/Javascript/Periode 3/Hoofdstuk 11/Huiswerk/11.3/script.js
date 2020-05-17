
function getTime() {
    let today = new Date();
    return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

let myName = "David Klein Velderman";

function showLoad() {
    console.log(`Pagina van ${myName} is geladen. Tijd: ${getTime()}`);
}

function showResize() {
    console.log(`Pagina van ${myName} is vergroot of verkleind. Tijd: ${getTime()}`)
}

function textSelect() {
    console.log('Tekst geselecteerd');
}

function textChange() {
    console.log('Tekst is gesubmit');
}

function mouseOverAlert() {
    console.log('Je beweegt je muis over paragraaf 1');
}

function mouseClickAlert() {
    console.log(`Je kan toch niet klikken op een tekst, toch ${myName}?`);
}

function copyAlert() {
    console.log(`Attentie ${myName}, iemand kopieert paragraaf 3!`);
}