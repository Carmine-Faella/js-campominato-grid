//Definimo le variabili

const gridDom = document.getElementById('grid');

const play = document.getElementById('playTime');

const title = document.getElementById('title');

let levelDifficult = document.getElementById('level').value;

const formDom = document.getElementById("form");

//Creiamo il ciclo

/*for(let i = 1; i <= 100; i++){
    
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
        current.innerHTML = ``;
        current.classList.remove('selected');  
    }

)
    gridDom.append(current);

}*/

//Creo una condizione per il cambio di livello

if(levelDifficult == 'hard'){

    for(let i = 1 ; i <= 49; i++){
            
        const current = createSquare();
        
        current.classList.add('d-none');

        current.classList.remove('square-middle');

        current.classList.remove('square');

        current.innerHTML = `<div class="square-number">${i}</div>`;   
        
        current.addEventListener('click',
            function(){
                this.classList.toggle('selected');  
                console.log(i);       
            }
    
        )

        play.addEventListener('click',

            function(){
                current.classList.remove('d-none');
                title.classList.add('d-none');
                current.classList.remove('selected'); 
            }

        )

        gridDom.append(current);
    
    }
    
    }else if(levelDifficult == 'medium'){

        for(let i = 1 ; i <= 81; i++){
        
            const current = createSquare();
        
            current.classList.add('d-none');

            current.classList.remove('square-hard');

            current.classList.remove('square');

            current.innerHTML = `<div class="square-number">${i}</div>`;    
        
            current.addEventListener('click',
                function(){
                    this.classList.toggle('selected');  
                    console.log(i);          
                }
        
            );
            play.addEventListener('click',

                function(){
                    current.classList.remove('d-none');
                    title.classList.add('d-none');
                    current.classList.remove('selected');  
                    
                }

            )

            gridDom.append(current);

    }

    }else{

        for(let i = 1 ; i <= 100; i++){
        
            const current = createSquare();
        
            current.classList.add('d-none');

            current.classList.remove('square-middle');

            current.classList.remove('square-hard');

            current.innerHTML = `<div class="square-number">${i}</div>`;
            
            current.addEventListener('click',
                function(){
                    this.classList.toggle('selected');  
                    console.log(i);          
                }
        
            );
            play.addEventListener('click',

                function(){
                    current.classList.remove('d-none');
                    title.classList.add('d-none');
                    current.classList.remove('selected');  
                    
                }

            )

            gridDom.append(current);

    } 
                     
}



//Creiamo la funzione della creazione della griglia

function createSquare(){

    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');
    elementSelected.classList.add('square-middle');
    elementSelected.classList.add('square-hard');

    return elementSelected;
}

  
  














