let inputSlider = document.getElementById("range");
let password = document.getElementById("passwordValue");
let sliderValue = document.getElementById("b");
let lowercase = document.getElementById("lower");
let uppercase = document.getElementById("upper");
let number = document.getElementById("number");
let symbols = document.getElementById("symbol");
let genBtn = document.getElementById("generate");
let i = document.querySelector("i");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;    
});

genBtn.addEventListener("click", ()=>{
    password.value = generatePassword();
})

let allSymbols = "!@#$%^&*";
let allNumber = "0123456789";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword(){
    let genPass = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? allNumber : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPass;
    };

    for(let i = 1; i <= inputSlider.value; i ++){
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPass;
};

i.addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = 'text'
        i.className = 'fa-solid fa-eye'
    }else{
        password.type = 'password'
        i.className = 'fa-solid fa-eye-slash'
    }
})