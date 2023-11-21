/********************************************JS***********************************************/
'use strict';

// MILESTONE 0 - Creare l’array di oggetti con le informazioni fornite
// MILESTONE 1 - Stampare su console, per ogni membro del team, le informazioni nome, ruolo e image
// MILESTONE 2 - Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1 - Trasformare la stringa foto in una immagine effettiva
// BONUS 2 - Organizzare i singoli membri in card/schede come immagine qui sotto
/* 
<li class="card">
    <img src="img/wayne-barnett-founder-ceo.jpg" alt="image1">
    <h3>Wayne Barnett</h3>
    <h4>Founder & CEO</h4>
</li>

*/

/*
FUNCTIONS
*/



/*
OPERATIONS
*/

const membriTeam = [
    {
    "nome" : 'Wayne Barnett',
    "role" : 'Founder & Ceo',
    "photo" : 'wayne-barnett-founder-ceo.jpg'
    },
    {  
    "nome" : 'Angela Caroll',
    "role" : 'Chief Editor',
    "photo" : 'angela-caroll-chief-editor.jpg'
    },
    {
    "nome" : 'Walter Gordon',
    "role" : 'Office Manager',
    "photo" : 'walter-gordon-office-manager.jpg'
    },
    {
    "nome" : 'Angela Lopez',
    "role" : 'Social Media Manager',
    "photo" : 'angela-lopez-social-media-manager.jpg'
    },
    {
    "nome" : 'Scott Estrada',
    "role" : 'Developer',
    "photo" : 'scott-estrada-developer.jpg'
    },
    {
    "nome" : 'Barbara Ramos',
    "role" : 'Graphic Designer',
    "photo" : 'barbara-ramos-graphic-designer.jpg'
    }
];

//m.0
console.log(membriTeam);

//m.1 attraversare l'array di oggetti
const ulElemento = document.getElementById('grid-cards');

for (let i = 0; i < membriTeam.length; i++) {
    const membriSignoli = membriTeam[i];
    console.log(`MEMBRO ${i + 1}`)

    console.log(membriSignoli.nome);

    //ciclare l'oggetto
    for(let key in membriSignoli) {
        const detailsMembro = `${key}: ${membriSignoli[key]}`;
        console.log(detailsMembro);
    }

    // soggetto
    // cosa voglia
    // dove
    // ulElemento.innerHTML += `<li class="card">
    //                             <img src="img/${membriSignoli.photo}">
    //                             <h3>${membriSignoli.nome}</h3>
    //                             <h4>${membriSignoli.role}</h4>
    //                         </li>`;

    // oppure

    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = `img/${membriSignoli.photo}`;
    li.append(img);
    
    const h3Elemento = document.createElement('h3');
    h3Elemento.innerHTML = membriSignoli.nome;
    li.append(h3Elemento);
    
    const h4Elemento = document.createElement('h4');
    h4Elemento.innerHTML = membriSignoli.role;
    li.append(h4Elemento);


    ulElemento.append(li);


    //TODO:FUNZIONE + BONUS 1, 2
    
}

