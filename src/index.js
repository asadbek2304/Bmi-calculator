const changeBackground = function(color) {
    document.querySelector('body').style.backgroundColor = color 
}

function myFunction() {
    const modalGlass = document.querySelector('#glass');
    const closeBtn = document.querySelector('#closeBtn');
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result"); 
    const overlay = document.querySelector('.overlay');
    
    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    let bmi = (weight / (height * height)).toFixed(2);
    let currentval;
    
    if (bmi < 19){
        currentval = "Bu juda yengil";
        changeBackground('red')
    }
    else if (bmi >=19 && bmi < 25 ){
        currentval = "Normal";
        changeBackground('green')
    }
    else {
        currentval = "Ortiqcha vazn";
        changeBackground('red');
    } if(!weight && !height){
        modalGlass.classList.remove('hidden');
        overlay.classList.remove('hidden')
        result.textContent = ` `;
        changeBackground('#221e1b')
    } else {result.innerHTML = `${name.value} ning BMIsi ${bmi} <br> ${currentval}`
  }
  closeBtn.addEventListener('click', function(){
    modalGlass.classList.add('hidden');
    overlay.classList.add('hidden')
})
  
}
function newFunction() {
    const natijaVal = document.getElementById("result");
    natijaVal.innerHTML = null;
    document.querySelector('#name').value = '';
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    changeBackground('#221e1b');
}


   
        
         
        
    

