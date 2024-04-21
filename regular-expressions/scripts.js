// Nama Lengkap
let fullName = document.querySelector("#fullName");
let validationTextFN = document.querySelector("#validation-text-FN");

const REGULAR_EXPRESSION_FULLNAME = /^[a-zA-Z\s]+$/;

fullName.addEventListener("input", function() {
    
    if (!REGULAR_EXPRESSION_FULLNAME.test(fullName.value)) {
        validationTextFN.textContent= "Invalid, nama lengkap hanya dapat diisi oleh huruf";
        validationTextFN.style.color = "red";
    } else {
        validationTextFN.textContent = "Valid";
        validationTextFN.style.color = "green";
    }
});

//NIM
let NIM = document.querySelector("#NIM");
let validationTextNim = document.querySelector("#validation-text-nim");

const REGULAR_EXPRESSION_ANGKA = /^\d*$/;
const REGULAR_EXPRESSION_NIM_DIGIT = /^\d{9}$/;

NIM.addEventListener("input", function() {
    if (!REGULAR_EXPRESSION_ANGKA.test(NIM.value)) {
        validationTextNim.textContent = "NIM harus berupa angka.";
        validationTextNim.style.color = "red";
    } else if (!REGULAR_EXPRESSION_NIM_DIGIT.test(NIM.value)) {
        validationTextNim.textContent = "NIM harus terdiri atas 9 digit angka.";
        validationTextNim.style.color = "red";
    } else {
        validationTextNim.textContent = "Valid";
        validationTextNim.style.color = "green";
    }
});

// Email
let regexInputEmail = document.querySelector("#regexInputEmail");
let validationTextEmail = document.querySelector("#validation-text-Email");

const REGULAR_EXPRESSION_EMAIL = /^[a-zA-Z0-9_]+@([\w-]+\.)+[\w-]{2,4}$/;

regexInputEmail.addEventListener("input", function() {
    validationTextEmail.textContent = REGULAR_EXPRESSION_EMAIL.test(regexInputEmail.value) 
    ? "Valid" : "Invalid email format.";

    if (!REGULAR_EXPRESSION_EMAIL.test(regexInputEmail.value)) {
        validationTextEmail.textContent= "Invalid, email Anda tidak sesuai format.";
        validationTextEmail.style.color = "red";
    } else {
        validationTextEmail.textContent = "Valid";
        validationTextEmail.style.color = "green";
    }

});

// noTelp
let regexInputNo = document.querySelector("#regexInputNo");
let validationTextNo = document.querySelector("#validation-text-No");

const REGULAR_EXPRESSION_NO = /^08\d{8,10}$/;

regexInputNo.addEventListener("input", function() {
    if (REGULAR_EXPRESSION_NO.test(regexInputNo.value)) {
        validationTextNo.textContent = "Valid";
        validationTextNo.style.color = "green";
    } else {
        if (!/^\d+$/.test(regexInputNo.value)) {
            validationTextNo.textContent = "Hanya boleh diisi oleh angka";
            validationTextNo.style.color = "red";
        } else if (!/^08/.test(regexInputNo.value)) {
            validationTextNo.textContent = "Nomor harus diawali angka 08";
            validationTextNo.style.color = "red";
        } else if (regexInputNo.value.length < 10 || regexInputNo.value.length > 12) {
            validationTextNo.textContent = "Angka harus terdiri atas 10-12 digit";
            validationTextNo.style.color = "red";
        }
    }
});

// password
let regexInputPass = document.querySelector("#regexInputPass");
let validationTextPass = document.querySelector("#validation-text-Pass");

const REGULAR_EXPRESSION_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/;

regexInputPass.addEventListener("input", function() {
    if (REGULAR_EXPRESSION_PASSWORD.test(regexInputPass.value)) {
        validationTextPass.textContent = "Password Kuat";
        validationTextPass.style.color = "green";
    } else {
        validationTextPass.textContent = "Password harus minimal 12 karakter dan terdiri atas huruf besar dan kecil, angka, serta karakter khusus.";
        validationTextPass.style.color = "red";
    }
});


