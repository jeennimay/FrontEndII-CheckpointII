export function darkMode() {
    document.querySelector("body").style.backgroundColor = "#141A26";
    document.querySelector("body").style.color = "rgb(245, 245, 245)";
    document.querySelector("a").style.color = "rgb(245, 245, 245)";
    document.querySelector(".api").style.color = "rgb(245, 245, 245)";
    document.querySelector(".firstCircle").style.animationName = "toRigth";
    document.getElementById("meiaLua").classList.add("secondCircle");
    document.querySelector(".firstCircle").classList.add("firstCircle-position");
    

};

export function ligthMode() {
    document.querySelector("body").style.backgroundColor = "";
    document.querySelector("body").style.color = "black";
    document.querySelector("a").style.color = "black";
    document.querySelector(".api").style.color = "black";
    document.querySelector(".firstCircle").style.animationName = "toLeft";
    document.getElementById("meiaLua").classList.remove("secondCircle");
    document.querySelector(".firstCircle").classList.remove("firstCircle-position");

};