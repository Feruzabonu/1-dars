alert('Valyuta konvertatsiyasi');

let uzs=prompt("O'zbek so'mini kiriting : ");

let usd = uzs/10654; let usd_y = Math.round(usd - 0);
let eur = uzs/12674; let eur_y = Math.round(eur - 0);

alert(
    `${uzs} so'm = ${usd} USD ga teng, yaxlitlaganda ${usd_y} USD ga teng; 
${uzs} so'm = ${eur} EUR ga teng, yaxlitlaganda ${eur_y} EUR ga teng`
)

