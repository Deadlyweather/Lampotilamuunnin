/*
CF = F = (C * 1.8) + 32 (0)
CK = K = C + 273.15 (0)
FC = C = (F - 32) / 1.8 (−273,15)
FK = K = (F + 459.67) * 5/9 (0)
KC = C = K - 273.15 (−273,15)
KF = F = (K * 9/5) - 459.67 (0)
*/

function convertTemperature() {
    let input = document.getElementById("määrä").value.trim();

    if (input === "") {
        console.log("Tyhjää muunnosta ei sallita");
        return;
    }

    let number = parseFloat(input);

    if (isNaN(number)) {
        console.log("Merkkien antaminen ei ole sallittua");
        return;
    }

    let muunnos = document.getElementById("valinta").value;
    let desimaalit = document.querySelector('input[name="desimaali"]:checked').value;

    let palautus;

    switch (muunnos) {
        case "CF":
            palautus = number * 9 / 5 + 32;
            palautus = palautus.toFixed(desimaalit) + "°F";
            break;
        case "CK":
            palautus = number + 273.15;
            palautus = palautus.toFixed(desimaalit) + "K";
            break;
        case "FC":
            palautus = (number - 32) * 5 / 9;
            palautus = palautus.toFixed(desimaalit) + "°C";
            break;
        case "FK":
            palautus = (number - 32) * 5 / 9 + 273.15;
            palautus = palautus.toFixed(desimaalit) + "K";
            break;
        case "KC":
            palautus = number - 273.15;
            palautus = palautus.toFixed(desimaalit) + "°C";
            break;
        case "KF":
            palautus = (number - 273.15) * 9 / 5 + 32;
            palautus = palautus.toFixed(desimaalit) + "°F";
            break;
        
    }
    if (palautus < 0) {
            console.log("Lämpötila on negatiivinen");
            return;
        }
    document.getElementById("output").innerText = palautus;
}