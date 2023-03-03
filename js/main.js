//Definimo le variabili

const gridDom = document.getElementById('grid');

//Creiamo il ciclo

for(let i = 1; i <= 100; i++){
    
    const current = createSquare();

    current.append(i);

    console.log(i);
    
    current.addEventListener('click',
        function(){
            this.classList.toggle('selected');
        }

    );

    gridDom.append(current);

}

//Creiamo la funzione della creazione della griglia

function createSquare(){

    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');
    
    return elementSelected;

}





