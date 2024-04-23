const photo1 = require("../src/photo1");

class camera1 {
    constructor(){
        this.modos = ["Modo default", "Modo retrato"];
    }

    accederCamara(modoDefault){
        if(modoDefault === this.modos[0]){
            return 0;
        } else {
            return 1;
        }
    }

    capturar(){
        const photo = new photo1(10,10);
        return photo;
    }
}

module.exports = camera1;