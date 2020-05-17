var tour = [
    "Geraint Thomas",
    "Tom Dumoulin",
    "Chris Froome",
    "Primoz Roglic",
    "Steven Kruijswijk",
    "Romain Bardet",
    "Mikei Landa",
    "Daniel Martin",
    "Ilnur Zakarin",
    "Nairo Quintana",
    "Bob Jungels",
    "Jakob Fuglsang",
    "Pierre Latour",
    "Alejandro Valverde",
    "Egan Bernal",
    "Tanel Kangert",
    "Warren Bargull",
    "Domenico Pozzovivo",
    "Alexey Lutsenko",
    "Jesus Herrada"
];

var team = [
    "Team Sky",
    "Team Sunweb",
    "Team Sky",
    "Team LottoNL Jumbo",
    "Team LottoNL Jumbo",
    "AG2R La Mondiale",
    "Movistar Team",
    "UAE Team Emirates",
    "Team Katusha - Alpecin",
    "Movistar Team",
    "Quick-Step Floors",
    "Astana Pro Team",
    "AG2R La Mondiale",
    "Movistar Team",
    "Team Sky",
    "Astana Pro Team",
    "Team Fortuneo -Samsic",
    "Bahrain - Merida",
    "Astana Pro Team",
    "Cofidis, solution credits"
];

var time = [
    "UK  83:17:13",
    "NL  +1:51",
    "UK +2:24",
    "FR +3:22",
    "UK +6:08",
    "IL +6:57",
    "FR +7:37",
    "UAE +9:05",
    "ES +12:37",
    "UK +14:18",
    "FR +16:32",
    "FR +19:46",
    "UK +22:13",
    "IL +27:26",
    "UK +27:52",
    "SW +34:52",
    "UK +37:06",
    "ES +39:08",
    "UK +48:52",
    "FR +51:57"
];

for (let i = 0; i < tour.length; i++){

    document.getElementById(i+1).innerHTML = tour[i];
    document.getElementById('p'+(i+1)).innerHTML = (i+1);
    document.getElementById('n'+(i+1)).innerHTML = team[i];
    document.getElementById('t'+(i+1)).innerHTML = time[i];
}


