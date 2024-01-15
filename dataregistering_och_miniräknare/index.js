// Fråga användaren efter deras namn
var användarensNamn = prompt("Vad är ditt namn?");

// Visa ett hälsningsmeddelande med användarens namn
alert("Hej, " + användarensNamn + "! Välkommen till vår webbplats.");

// Fråga användaren efter deras födelseår
var födelseår = prompt("Vad är ditt födelseår?");

// Beräkna användarens ålder
var aktuelltÅr = new Date().getFullYear();
var ålder = aktuelltÅr - födelseår;

// Visa ett meddelande med användarens ålder
alert("Du är " + ålder + " år gammal.");

// Fråga användaren efter två nummer
var nummer1 = prompt("Ange det första numret:");
var nummer2 = prompt("Ange det andra numret:");

// Utför olika operationer på de två numrerna
var summa = parseFloat(nummer1) + parseFloat(nummer2);
var differens = parseFloat(nummer1) - parseFloat(nummer2);
var produkt = parseFloat(nummer1) * parseFloat(nummer2);
var kvot = parseFloat(nummer1) / parseFloat(nummer2);

// Visa resultaten av operationerna
alert("Summan av nummer1 och nummer2 är: " + summa);
alert("Differensen mellan nummer1 och nummer2 är: " + differens);
alert("Produkten av nummer1 och nummer2 är: " + produkt);
alert("Kvoten av nummer1 och nummer2 är: " + kvot);