let giorno = window.prompt("inserisci il giorno: ");
let mese = window.prompt("inserisci il mese: ");
let anno = window.prompt("inserisci il anno: ");

document.getElementById('es1-dataInserita').innerText = giorno + "/" + mese + "/" + anno;

let dataFutura;

if (anno == 2025) {
    if (mese == 11) {
        if (giorno == 26) {

        } else {
            dataFutura = (giorno > 26);}
        } else {
        dataFutura = (mese > 11);}
    } else {
        dataFutura = (anno > 2025);
    }

if (!risultato) {
    document.getElementById("es1-risultato").innerText
}

function esercisio02(){
    let giorno = window.prompt("inserisci il giorno: " );
    let mese = window.prompt("inserisci il mese: " );
    let anno = window.prompt("inserisci il anno: " );

    //coverto in  formato data
    let data = new Date (giorno + "/" + mese + "/" + anno);

    //Giorno della settimana(da 0 a 6)
    let giornoSettimana    data.getDay();
}