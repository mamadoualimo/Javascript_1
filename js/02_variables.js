// Declaration + affectation
let prenom = "Alimou"; //String

let age = 25; //Number

let enLigne = true; //Boolean

let choix = null; //Null

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);

//Concatenation
console.log(prenom + ' ' + age + 'ans');
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

//Echapper un caractere anti-slash
console.log('il fait "beau aujourd\'hui"');

//Declaration et affectation d'une constante
const VILLE = 'Rouen';

//Array
let tab = ['Pomme', 30, true, ['bleu', 'rouge'], prenom];
//Grandeur du tableau
console.log(tab.length);
//index 1
console.log(tab[1]);
// Mot rouge
console.log(tab[3][1]);

//Object
let personne = {
    prenom: 'Alimou',
    age: 30,
    adresse: {
        rue: '12 rue de la Mare',
        ville: 'Lyon'
    }
};

console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adresse.rue);

let a = 6;
let b = 2;

//Addition
console.log(a + b);
//Soustraction
console.log(a - b);
//Multiplication
console.log(a * b);
//Division
console.log(a / b);
//Modulo
console.log(a % b);

//Incrementer
a += 1; //a++ equivaut à : a = a +1
console.log(a);

// Decrementer
b -= 1; //b-- equivaut à : b = b -1
console.log(b);