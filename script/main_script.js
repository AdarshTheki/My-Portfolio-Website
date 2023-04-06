// Background Color Change:
const btn = document.getElementById("BgColor");
const randColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
const colorRandomChanger = () => {
    document.body.style.backgroundColor = randColor();
    console.log(randColor());
};
btn.addEventListener("click", colorRandomChanger);

// SignIn pop:
const hello = () => {
    alert("☑This is a SignIn Button☑ \n 🚀Thanks You Visiting My profile Website.🚀 \n ☺Please the logIn button coming soon☺")
}