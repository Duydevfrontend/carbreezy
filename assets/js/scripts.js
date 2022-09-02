const searchForm = document.querySelector(".search-form");
const loginForm = document.querySelector(".form-container");
const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
const searchWrapper = document.querySelector(".search-input")
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");


// js code to show/hide form login, register
document.querySelector("#form-btn").onclick = () => {
    loginForm.classList.toggle("active");
}
document.querySelector("#close-btn").onclick = () => {
    loginForm.classList.remove("active");
}

// js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye")
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});



// js dropdown search button mobile
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}

window.onscroll = () => {

    searchForm.classList.remove("active");

    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }

}
