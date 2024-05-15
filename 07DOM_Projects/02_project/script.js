const form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault() // it will prevent to load the form data in server
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const weightGuide = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${BMI}</span>`

        if(BMI < 18.6){
            weightGuide.innerHTML =  '<span>Under Weight</span>'     
        }
        else if(BMI >= 18.6 && BMI <= 24.6){
            weightGuide.innerHTML =  '<span>Normal Range</span>'
        }
        else{
            weightGuide.innerHTML =  '<span>Overweight</span>'
        }
    }
})