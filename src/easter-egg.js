class EasterEgg
{
    constructor (){
        this.p = document.querySelector('.easter-egg');
    }
    show() {
       this.p.classList.remove("hide");
    }

    hide () {
        this.p.classList.add("hide");
        this.p.style = ''
    }
}