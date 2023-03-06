//Definimo le variabili

const gridDom = document.getElementById('grid');

const play = document.getElementById('playTime');

const title = document.getElementById('title');

let levelDifficult = document.getElementById('level');


//Creo una condizione per il cambio di livello e di ciclo 

levelDifficult.addEventListener('change', function() {

    gridDom.innerHTML='';

    title.classList.remove('d-none');

    if(this.value == 'easy'){for(let i = 1 ; i <= 100; i++){

        const current = createSquare();

        current.innerHTML = `<div class="square-number">${i}</div>`;
        
        current.addEventListener('click',
            function(){
                this.classList.toggle('selected');  
                console.log(i);          
            }
        )
        play.addEventListener('click',

            function(){
                title.classList.add('d-none');
                current.classList.remove('d-none');
                current.classList.remove('selected');
                levelDifficult.value = 'nothing';
                }
        )
        gridDom.append(current);

    }}

    if(this.value == 'medium'){for(let i = 1 ; i <= 81; i++){

        const current = createSquare();

        current.innerHTML = `<div class="square-number">${i}</div>`;
        
        current.addEventListener('click',
            function(){
                this.classList.toggle('selected');  
                console.log(i);          
            }
        )
        play.addEventListener('click',

            function(){
                title.classList.add('d-none');
                current.classList.remove('d-none');
                current.classList.remove('selected');
                levelDifficult.value = 'nothing';
                current.classList.remove('square');
                current.classList.add('square-middle');
            }
        )
        gridDom.append(current);

    }}

    if(this.value == 'hard'){for(let i = 1 ; i <= 49; i++){

        const current = createSquare();

        current.innerHTML = `<div class="square-number">${i}</div>`;
        
        current.addEventListener('click',
            function(){
                this.classList.toggle('selected');  
                console.log(i);          
            }
        )
        play.addEventListener('click',

            function(){
                title.classList.add('d-none');
                current.classList.remove('d-none');
                current.classList.remove('selected');
                levelDifficult.value = 'nothing';
                current.classList.add('square-hard');
                current.classList.remove('square');
            }
        )
        gridDom.append(current);

    }}
})

//Creiamo la funzione della creazione della griglia

function createSquare(){

    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');
    elementSelected.classList.add('d-none');

    return elementSelected;
}


	





