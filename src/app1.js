class app1 {
    constructor(){
        this.alto = null;
        this.ancho = null;
    }

    redimensionar(photo1){
        photo1.pixelesAncho = this.ancho;
        photo1.pixelesAlto = this.alto;

        return photo1;
}
}

module.exports = app1;