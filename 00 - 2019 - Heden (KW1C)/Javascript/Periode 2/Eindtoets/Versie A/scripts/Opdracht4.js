
let isEducationHBO = false;
let experience = 2;
let totalSalary;

// Deze notatie bij booleans in if-statements is efficiënter dan '=== true' en '=== false'
if (isEducationHBO) {

    if (experience < 1) {
        totalSalary = 1500;
    }
    else if (experience >= 1 && experience <= 3) {
        totalSalary = 1800;
    }
    else if (experience > 3) {
        totalSalary = 2150;
    }
}

if (!isEducationHBO) {

    if (experience < 1) {
        totalSalary = 1800;
    }
    else if (experience >= 1 && experience <= 2) {
        totalSalary = 2100;
    }
    else if (experience > 2) {
        totalSalary = 2600;
    }
}

window.alert(`Je volledige salaris is ${totalSalary}!`);