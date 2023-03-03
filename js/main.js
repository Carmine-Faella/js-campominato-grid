//Definimo le variabili

const gridDom = document.getElementById('grid');

const play = document.getElementById('playTime');

const title = document.getElementById('title');

//Creiamo il ciclo

for(let i = 1; i <= 100; i++){
    
    const current = createSquare();

    current.classList.add('d-none');
    
    current.addEventListener('click',
        function(){
            this.classList.toggle('selected');  
            current.innerHTML = `<div class="square-number">${i}</div>`;
            console.log(i);          
        }

    );

    play.addEventListener('click',

    function(){
        current.classList.remove('d-none');
        title.classList.add('d-none');
        current.classList.remove('selected');  
        current.innerHTML = ``;
    }

)

    gridDom.append(current);

}


//Creiamo la funzione della creazione della griglia

function createSquare(){

    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');
    
    return elementSelected;

}





