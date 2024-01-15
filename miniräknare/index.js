alert("Välkommen till Enkel Miniräknare!");

// Fråga användaren efter det första talet
var tal1 = parseFloat(prompt("Ange det första talet:"));

// Fråga användaren efter det andra talet
var tal2 = parseFloat(prompt("Ange det andra talet:"));

// Fråga användaren efter räknesättet
var räknesätt = prompt("Vilket räknesätt vill du använda? (+, -, *, /)");

// Utför beräkning beroende på användarens val
if (räknesätt === "+") {
    var resultat = tal1 + tal2;
    alert("Resultatet av additionen är: " + resultat);
} else if (räknesätt === "-") {
    var resultat = tal1 - tal2;
    alert("Resultatet av subtraktionen är: " + resultat);
} else if (räknesätt === "*") {
    var resultat = tal1 * tal2;
    alert("Resultatet av multiplikationen är: " + resultat);
} else if (räknesätt === "/") {
    if (tal2 !== 0) {
        var resultat = tal1 / tal2;
        alert("Resultatet av divisionen är: " + resultat);
    } else {
        alert("Division med noll är inte tillåten!");
    }
} else {
    // Felaktigt räknesätt
    alert("Felaktigt räknesätt. Vänligen ange endast +, -, *, /");
}

// Avslutningsmeddelande
alert("Tack för att du använde Enkel Miniräknare. Hejdå!");