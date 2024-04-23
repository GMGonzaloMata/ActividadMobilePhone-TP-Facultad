class mobilePhone1 {
    constructor(camera,app){
        this.camera = camera;
        this.app = app;
    }

    abrirCamara(){
        return this.camera.accederCamara("Modo default");
    }

    capturarFoto(){
        return this.camera.capturar();
    }

    redimensionar(photo1,ancho,alto){
        this.app.ancho = ancho;
        this.app.alto = alto;
        return this.app.redimensionar(photo1);
    }
}

module.exports = mobilePhone1;