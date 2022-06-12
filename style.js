function pogodiBroj() {
  let randomBroj = Math.floor(Math.random() * 10 + 1);
  let brojPokusaja = 1;
  let pogadjanje;

  do {
    pogadjanje = prompt("Pokušaj pogoditi broj između 1 i 10");

    if (pogadjanje > randomBroj) {
      alert("Krivo, broj koji tražiš je manji od ovoga");
      brojPokusaja++;

    } else if (pogadjanje < randomBroj) {
      alert("Krivo, broj koji tražiš je veći od ovoga");
      brojPokusaja++;

    } else if (isNaN(pogadjanje)) {
      alert("ERROR! Igra prihvaća samo brojke.");
    }

  } while (pogadjanje != randomBroj);

  alert(`Bravo! Pogodio si točan broj u ${brojPokusaja} pokusaja`);
}