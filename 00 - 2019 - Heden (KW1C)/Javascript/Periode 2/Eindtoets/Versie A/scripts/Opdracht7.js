
let oddNumbers = [];

for (let i = 0; i < 21; i++) {
    // Het gebruik van modulo is hopelijk toegestaan!
    if (i & 1) {
        oddNumbers.push(i);
    }
}

window.alert(`Alle oneven getallen tussen de 0 en 20 zijn ${oddNumbers}`);