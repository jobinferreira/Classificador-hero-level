// Classificador nível de herói

let nomeHeroi = "Miranha";
let expHeroi = Math.random() * 10000;

function heroLevel(expHeroi) {
    if (expHeroi < 1000) {
        expHeroi = 'Ferro'
    } else if (expHeroi > 1001 && expHeroi < 2000) {
        expHeroi = 'Bronze'
    } else if (expHeroi > 2001 && expHeroi < 5000) {
        expHeroi = 'Prata'
    } else if (expHeroi > 6001 && expHeroi < 7000) {
        expHeroi = 'Ouro'
    } else if (expHeroi > 7001 && expHeroi < 8000) {
        expHeroi = 'Platina'
    } else if (expHeroi > 8001 && expHeroi < 9000) {
        expHeroi = 'Ascendente'
    } else if (expHeroi > 9001 && expHeroi < 10000) {
        expHeroi = 'Imortal'
    } else if (expHeroi >= 10000) {
        expHeroi = 'Radiante'
    }
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${expHeroi}`)
}

heroLevel(expHeroi)




