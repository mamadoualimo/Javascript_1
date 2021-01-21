// Condition IF
/*let age = prompt('Saisir votre age');

if (age < 18 ) {
    alert('Vous etes un mineur');
} else if (age >= 70 ) {
    alert('Vous etes Senior');
} else {
    alert('Vous etes Majeur');
}*/

//Condition SWITCH
let vehicule = prompt('quel vehicule souhaitez vous ? Peugeot, Renault, Mercedes').toLowerCase();

let km = prompt('Combien de KM souhaitez vous faire ?');

const prix = {
    peugeot: 0.4,
    renault: 0.6,
    mercedes: 0.8
};

switch (vehicule) {
    case 'peugeot': {
        alert('Vous payerez : ' + prix.peugeot * km + ' €');
        break;
    }
    case 'renault': {
        alert('Vous payerez : ' + prix.renault * km + ' €');
        break;
    }
    case 'mercedes': {
        alert('Vous payerez : ' + prix.mercedes * km + ' €');
        break;
    }
    default:
        alert('Veillez choisir un véhicule proposé dans la liste');
}