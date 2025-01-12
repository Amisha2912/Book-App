const signInBox=document.querySelector(".signIn");
const signUpBox=document.querySelector(".signUp");
const signUp=document.querySelector(".btn-up");

const signinLink=document.querySelector(".signin");
const signupLink=document.querySelector(".signup");

signinLink.addEventListener("click",()=>{
    signInBox.classList.add("show");
    signUpBox.classList.remove("show");
});
signupLink.addEventListener("click",()=>{
    signInBox.classList.remove("show");
    signUpBox.classList.add("show");
});

signUp.addEventListener("click",()=>{
    signInBox.classList.add("show");
    signUpBox.classList.remove("show");
})

