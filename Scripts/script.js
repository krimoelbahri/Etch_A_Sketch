    const container = document.getElementById('gridContainer');
    const changeScaleBtn= document.getElementById('changeScaleBtn');
    const clearBtn= document.getElementById('clearBtn');
    const eraseBtn= document.getElementById('eraseBtn');
    const rangeBtn= document.getElementById('rangeBtn');
    const scaleDiv= document.getElementById('scaleValue');
    const randomColorBtn= document.getElementById('random');
    const shadingBtn= document.getElementById('shading');
    let scaleValue = rangeBtn.value;

    const createGrids= function(x) {
        container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${x}, 1fr)`;

        for(let i=1 ; i<= x*x ; i++){
            squareDiv = document.createElement("div");
            squareDiv.setAttribute ('style','border: 0.1px solid ');
            squareDiv.setAttribute ('value','0');
            squareDiv.classList.add("squareDiv");
            gridContainer.appendChild(squareDiv);
        } 
    }
    createGrids(16); // set default grid.
    
    const randomColor= function(e) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    const shadingColor= function(e){
        let shade= Number(e.target.attributes.value.value) + 10;
        e.target.setAttribute('value',`${shade}`)
        e.target.style.backgroundColor = `rgba(0,0,0,${shade/100})`;
    }
    const whitBG= function(e){
        e.target.style.backgroundColor ='white';
        e.target.setAttribute('value','0')
    }
    const changeScale= function() {
        scaleValue = rangeBtn.value;
        eraseGrids();
        createGrids(scaleValue);
    }
    const showScaleValue= function(){
        scaleValue = rangeBtn.value;
        scaleDiv.textContent='';
        scaleDiv.textContent=`${scaleValue}`;
    }
    showScaleValue;
    const eraseGrids= function() {
        document.querySelectorAll('.squareDiv').forEach((element)=>{element.remove()});
    }
    
    const addEvntRndClr= function(){
        document.querySelectorAll('.squareDiv').forEach( (element)=> {
            element.addEventListener('mouseover',randomColor)
        })
    }
    const addEvntshdClr= function(){
        document.querySelectorAll('.squareDiv').forEach( (element)=> {
            element.addEventListener('mouseover',shadingColor)
        })
    }
    const addEvntWhiteBg= function(){
        document.querySelectorAll('.squareDiv').forEach( (element)=> {
            element.addEventListener('mouseover',whitBG)
        })
    }
    const remEvntRndClr= function(){
        document.querySelectorAll('.squareDiv').forEach( (element)=> {
            element.removeEventListener('mouseover',randomColor)
        })
    }
    const remEvntshdClr= function(){
        document.querySelectorAll('.squareDiv').forEach((element)=> {
            element.removeEventListener('mouseover',shadingColor);
        })
    }
    const remEvntWhiteBg= function(){
        document.querySelectorAll('.squareDiv').forEach( (element)=> {
            element.removeEventListener('mouseover',whitBG)
        })
    }
    const checkToggle= function(){
        if(eraseBtn.className == ("erase active")){return};
        let containerClass= container.classList.toggle("active");
        if(randomColorBtn.className == ("rndmClr active")){
            if(containerClass){
                addEvntRndClr();          
            }else{
                remEvntRndClr();
            }
        }
        if(shadingBtn.className == ("shadClr active")){
            if(containerClass){
                addEvntshdClr();           
            }else{
                remEvntshdClr();
            }
        }
    }
    
    const toggleRndSdnClr= function(){
        shadingBtn.classList.toggle("active");
        randomColorBtn.classList.toggle("active");
        remEvntshdClr();
        remEvntRndClr();
        if(container.className == ("container active")){
            checkToggle();
        }
    }
    const clear= function() {
        document.querySelectorAll('.squareDiv').forEach((element)=> {
                element.style.backgroundColor = 'white';
                element.setAttribute('value','0');
        })
    }
    const erase= function(){
        let eraseClass= eraseBtn.classList.toggle("active");
        if(eraseClass){
            remEvntRndClr();
            remEvntshdClr();
            addEvntWhiteBg();
        }else{
            if(container.className == ("container active")){
                remEvntWhiteBg();
                checkToggle();
            }else{
                remEvntWhiteBg();
            }
        }
    }
    container.addEventListener("click",checkToggle)
    changeScaleBtn.addEventListener("click", changeScale);
    clearBtn.addEventListener("click", clear);
    eraseBtn.addEventListener("click", erase);
    rangeBtn.addEventListener("click",showScaleValue);
    randomColorBtn.addEventListener("click",toggleRndSdnClr);
    shadingBtn.addEventListener("click",toggleRndSdnClr);