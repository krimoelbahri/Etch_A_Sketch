    const container = document.getElementById('gridContainer');
    document.getElementById('changeScaleBtn').addEventListener("click", changeScale);
    document.getElementById('clearBtn').addEventListener("click", clear);

    function createGrids(x) {
        
        container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
        
        let i=1
             for(i=1 ; i<= x*x ; i++){
                squareDiv = document.createElement("div");
                squareDiv.setAttribute ('style','border: 0.1px solid ');
                squareDiv.classList.add("squareDiv");
                gridContainer.appendChild(squareDiv);
             } 
            document.querySelectorAll('.squareDiv').forEach( function(a) {
             a.addEventListener('mouseover',randomColor)
            })
        }
        createGrids(16); // set default grid.

    function changeScale() {
        let scaleValue = prompt("please enter a number between 1 and 64");
            scaleValue = Number(scaleValue);
        if (scaleValue > 1 && scaleValue <=64){ 
            eraseGrids();
            createGrids(scaleValue);
        } else {
           changeScale();
        }
    }

    function randomColor(a) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        a.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }

    function eraseGrids () {
        document.querySelectorAll('.squareDiv').forEach(function(a) {
                a.remove();
        })
    }
    function clear () {
        document.querySelectorAll('.squareDiv').forEach(function(a) {
                a.style.backgroundColor = 'white';
        })
    }