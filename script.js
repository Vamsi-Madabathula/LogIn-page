let pwdButton = document.querySelector(".pwd-button");
let pwd = document.getElementById("pwd");

let isvisible = false;

pwdButton.addEventListener("click",(e)=>{
    e.preventDefault();
    isvisible = !isvisible;
if(isvisible)
{
    pwd.setAttribute('type','text');
    pwdButton.innerText = "Hide";
}
else{
    pwd.setAttribute('type','password');
    pwdButton.innerText = "Show"
}
})