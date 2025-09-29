function convertTemperature() {
    let input = document.getElementById("määrä").value.trim();

    if (input === "") {
        document.getElementById("output").innerText = "Tyhjät muutokset ovat kielletty";
        return;
    }

    let number = parseFloat(input);

    if (isNaN(number)) {
        document.getElementById("output").innerText = "Merkit ovat kielletty";
        return;
    }

    let muunnos = document.getElementById("valinta").value;
    let desimaalit = document.querySelector('input[name="desimaali"]:checked').value;

    let palautus;
    let tulos;

    switch (muunnos) {
        case "CF":
            tulos = (number * 1.8) + 32;
            palautus = tulos.toFixed(desimaalit) + " °F";
            break;
        case "CK":
            tulos = number + 273.15;
            palautus = tulos.toFixed(desimaalit) + " K";
            break;
        case "FC":
            tulos = (number - 32) / 1.8;
            palautus = tulos.toFixed(desimaalit) + " °C";
            break;
        case "FK":
            tulos = (number + 459.67) * 5 / 9;
            palautus = tulos.toFixed(desimaalit) + " K";
            break;
        case "KC":
            tulos = number - 273.15;
            palautus = tulos.toFixed(desimaalit) + " °C";
            break;
        case "KF":
            tulos = (number - 273.15) * 1.8 + 32;
            palautus = tulos.toFixed(desimaalit) + " °F";
            break;
        default:
            document.getElementById("output").innerText = "Tuntematon muunnos";
            return;
    }

    document.getElementById("output").innerText = palautus;

    if (tulos < 0) {
        document.getElementById("info").innerText = "Tulos on negatiivinen";
    } else {
        document.getElementById("info").innerText = "Tulos on positiivinen"; 
    }
}