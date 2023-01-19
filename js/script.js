const fdmTechnology = document.querySelector(".fdm-technology");
const fdmTechnologyPlus = document.querySelector(".fdm-technology-plus");

function FdmTechnologyClickHandler() {
    console.log("hi")
    fdmTechnologyPlus.classList.toggle("fdm-plus-shown");
    fdmTechnology.classList.toggle("technology-plus");
}

fdmTechnology.addEventListener("click", FdmTechnologyClickHandler);
fdmTechnologyPlus.addEventListener("click", FdmTechnologyClickHandler);

/*slider*/

let offset = 0;
const sliderline = document.querySelector(".slider-line");

document.querySelector (".slider-next").addEventListener ("click", 
function () {
    offset +=490;
    if (offset > 1000) {
        offset = 980;
    }
    sliderline.style.left = -offset + "px";
});

document.querySelector (".slider-prev").addEventListener ("click", 
function () {
    offset -=490;
    if (offset < -1000) {
        offset = -980;
    }
    sliderline.style.left = -offset + "px";
});

/*
const callButtonElement = document.querySelector(".call-button");
const formBackgroundElement = document.querySelector(".form-background");
const callFormElement = document.querySelector(".call-form");

const callButtonClickHandler = function(event) {
    for (let index = 0; index < formInput.length; index++){
        const input = formInput[index]
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
        console.log(index)
    }
    invalidName.classList.remove("test-failed");
    invalidTelefon.classList.remove("test-failed");
    if (formBackgroundElement.classList.contains("form-background-shown")) { // система проверяет есть ли у бэкграунда класс для отображения
        formBackgroundElement.removeEventListener('click', callButtonClickHandler);
    } 
    if (callFormElement.classList.contains("form-box-shown")) {
        callFormElement.removeEventListener('click', callButtonClickHandler);
    }
    formBackgroundElement.classList.toggle("form-background-shown");
    callFormElement.classList.toggle("form-box-shown");
        
}

callButtonElement.addEventListener("click", callButtonClickHandler);

const totalFormElements = document.querySelectorAll(".form-box");

function backgroundClickHandler(event) {
    const isInForm = event.target.closest(".form-box");
    
    if (isInForm){
        event.stopPropagation()
    } else if (formBackgroundElement.classList.contains("form-background-shown") ){
        formBackgroundElement.classList.toggle("form-background-shown");
        totalFormElements.forEach(totalFormElementItem => {
            totalFormElementItem.classList.remove("form-box-shown")
        });
    }   
}
formBackgroundElement.addEventListener("click", backgroundClickHandler);


const clouseButtonElement = document.querySelectorAll(".button-clouse");
function closeButton(){
    formBackgroundElement.classList.toggle("form-background-shown")
        totalFormElements.forEach (totalFormElementItem => {
        totalFormElementItem.classList.remove("form-box-shown")
        })
    }
    clouseButtonElement.forEach (clouseButtonElementItem => {
        clouseButtonElementItem.addEventListener("click", closeButton)
        });


const buttonElement = document.querySelector(".button");
const countFormElement = document.querySelector(".form-count");

const buttonClickHandler = function() { 
    if (formBackgroundElement.classList.contains("form-background-shown")) { // система проверяет есть ли у бэкграунда класс для отображения
        formBackgroundElement.removeEventListener('click', buttonClickHandler);
    } if (  
        countFormElement.classList.contains("form-box-shown")) {
        countFormElement.removeEventListener('click', buttonClickHandler);
    } 
    formBackgroundElement.classList.toggle("form-background-shown");
    countFormElement.classList.toggle("form-box-shown");
}
buttonElement.addEventListener("click", buttonClickHandler);



const questionButtonElement = document.querySelector(".button-count");
const questionFormElement = document.querySelector(".form-question");
const questionButtonClickHandler = function() {
    for (let index = 0; index < formInput.length; index++){
        const input = formInput[index]
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
        console.log(index)
    } 
        totalFormElements.forEach(totalFormElementItem => {
        totalFormElementItem.classList.remove("form-box-shown");
    });
    questionFormElement.classList.toggle("form-box-shown");    
}
questionButtonElement.addEventListener("click",questionButtonClickHandler);



const sendButtonElement = document.querySelector(".send-button");
const thanksFormElement = document.querySelector(".thanks-block");
const thanksButtonClickHandler = function(e) {
    e.preventDefault();
    totalFormElements.forEach (totalFormElementItem => {
    totalFormElementItem.classList.remove("form-box-shown")
    })
    thanksFormElement.classList.toggle("form-box-shown");       
}
questionFormElement.addEventListener("submit", thanksButtonClickHandler);

/*Validation*/
/*
callFormElement.addEventListener("submit", formsend);
let formInput = document.querySelectorAll(".input");
let className = document.querySelector(".forname");
let telefon = document.querySelector(".telefon-namber");
let invalidName = document.querySelector(".input-test-name");
let invalidTelefon = document.querySelector(".input-test-telefon");
function formsend(e) {
    e.preventDefault();
    
    for (let index = 0; index < formInput.length; index++){
        const input = formInput[index]
        formRemuveError(input);
        console.log(index)

        if (input.classList.contains("telefon-namber")){
            if(telTest(input)){
                formRemuveError(input);
            } else {
                formAddError(input);
            } 
        }    
        if(input.value === ""){
            formAddError(input);
            invalidName.classList.add("test-failed");
            invalidTelefon.classList.add("test-failed");
        }
    }
        
    if (className.classList.contains("error")){
        invalidName.classList.add("test-failed");
    } else {
        invalidName.classList.remove("test-failed");
    }        
    if(telefon.classList.contains("error")){
        invalidTelefon.classList.add("test-failed");
    } else {
        invalidTelefon.classList.remove("test-failed");
    }
    

    if (!className.classList.contains("error")){    
        if(!telefon.classList.contains("error")){
            callFormElement.classList.toggle("form-box-shown");
            thanksFormElement.classList.toggle("form-box-shown");
        }   
    }
    
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    
    function formRemuveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
        
    }

    function telTest(input){
        return/^([0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2})$/.test(input.value);   
    }
    
}

/*Validation*/
/*
const endButtonElement = document.querySelector(".end-button");
endButtonElement.addEventListener("click", function(){
    formBackgroundElement.classList.toggle("form-background-shown");
    thanksFormElement.classList.toggle("form-box-shown");
})

const nextButtonElement = document.querySelector(".next-button");
nextButtonElement.addEventListener("click", function(){
    questionFormElement.classList.toggle("form-box-shown");
    countFormElement.classList.toggle("form-box-shown");
});*/
