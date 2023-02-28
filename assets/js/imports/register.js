var nextClickPsychologist = document.querySelectorAll(".next-button-psychologist");
var mainFormPsychologist = document.querySelectorAll(".main-psychologist");
var stepListPsychologist = document.querySelectorAll(".progress-bar-psychologist li");
var numPsychologist = document.querySelector(".step-number-psychologist");
let formnumberPsychologist = 0;

nextClickPsychologist.forEach(function (nextClickForm) {
    nextClickForm.addEventListener('click', function () {
        if (!validateform()) {
            return false
        }
        formnumberPsychologist++;
        updateformPsychologist();
        progressForwardPsychologist();
    });
});

var backClickPsychologist = document.querySelectorAll(".back-button-psychologist");
backClickPsychologist.forEach(function (backClickForm) {
    backClickForm.addEventListener('click', function () {
        formnumberPsychologist--;
        updateformPsychologist();
        progressBackwardPsychologist();
    });
});

var username = document.querySelector("#user-name");
var shownname = document.querySelector(".shown-name");

var submitClick = document.querySelectorAll(".submit-button");
submitClick.forEach(function (submitClickForm) {
    submitClickForm.addEventListener('click', function () {
        shownname.innerHTML = username.value;
        formnumber++;
        updateformPsychologist();
    });
});

function updateformPsychologist() {
    mainFormPsychologist.forEach(function (mainFormNumber) {
        mainFormNumber.classList.remove('active');
    })
    mainFormPsychologist[formnumberPsychologist].classList.add('active');
}

function progressForwardPsychologist() {
    numPsychologist.innerHTML = formnumberPsychologist + 1;
    stepListPsychologist[formnumberPsychologist].classList.add('active');
}

function progressBackwardPsychologist() {
    var form_num = formnumberPsychologist + 1;
    stepListPsychologist[form_num].classList.remove('active');
    numPsychologist.innerHTML = form_num;
}

// function validateform() {
//     validate = true;
//     var validateInputs = document.querySelectorAll(".main.active input");
//     validateInputs.forEach(function (vaildateInput) {
//         vaildateInput.classList.remove('warning');
//         if (vaildateInput.hasAttribute('require')) {
//             if (vaildateInput.value.length == 0) {
//                 validate = false;
//                 vaildateInput.classList.add('warning');
//             }
//         }
//     });
//     return validate;
// }

var nextClickPatient = document.querySelectorAll(".next-button-patient");
var mainFormPatient = document.querySelectorAll(".main-patient");
var stepListPatient = document.querySelectorAll(".progress-bar-patient li");
var numPatient = document.querySelector(".step-number-patient");
let formnumberPatient = 0;

nextClickPatient.forEach(function (nextClickForm) {
    nextClickForm.addEventListener('click', function () {
        if (!validateform()) {
            return false
        }
        formnumberPatient++;
        updateformPatient();
        progressForwardPatient();
    });
});

var backClickPatient = document.querySelectorAll(".back-button-patient");
backClickPatient.forEach(function (backClickForm) {
    backClickForm.addEventListener('click', function () {
        formnumberPatient--;
        updateformPatient();
        progressBackwardPatient();
    });
});

var username = document.querySelector("#user-name");
var shownname = document.querySelector(".shown-name");

var submitClick = document.querySelectorAll(".submit-button");
submitClick.forEach(function (submitClickForm) {
    submitClickForm.addEventListener('click', function () {
        shownname.innerHTML = username.value;
        formnumberPatient++;
        updateformPatient();
    });
});

function updateformPatient() {
    mainFormPatient.forEach(function (mainFormNumber) {
        mainFormNumber.classList.remove('active');
    })
    mainFormPatient[formnumberPatient].classList.add('active');
}

function progressForwardPatient() {
    numPatient.innerHTML = formnumberPatient + 1;
    stepListPatient[formnumberPatient].classList.add('active');
}

function progressBackwardPatient() {
    var form_num = formnumberPatient + 1;
    stepListPatient[form_num].classList.remove('active');
    numPatient.innerHTML = form_num;
}

function validateform() {
    validate = true;
    var validateInputs = document.querySelectorAll(".main.active input");
    validateInputs.forEach(function (vaildateInput) {
        vaildateInput.classList.remove('warning');
        if (vaildateInput.hasAttribute('require')) {
            if (vaildateInput.value.length == 0) {
                validate = false;
                vaildateInput.classList.add('warning');
            }
        }
    });
    return validate;
}