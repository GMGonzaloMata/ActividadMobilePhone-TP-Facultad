const camera1 = require("../src/camera1");
const app1 = require("../src/app1");
const client1 = require("../src/client1");
const mobilePhone1 = require("../src/mobilePhone1");
const photo1 = require("../src/photo1");



test('client abrir camera', () =>{
    const camera = new camera1();
    const mobilePhone = new mobilePhone1(camera);
    const client = new client1(mobilePhone);
    let a = client.mobilePhone.abrirCamara(); 
    expect(a).toBe(0);
});



test('client capturar foto', () =>{
    const camera = new camera1();
    const mobilePhone = new mobilePhone1(camera);
    const client = new client1(mobilePhone);
    let a = client.mobilePhone.capturarFoto(); 
    expect(a instanceof photo1).toBe(true);
});



test('dimensionar foto', () =>{
    const camera = new camera1();
    const app = new app1();
    const mobilePhone = new mobilePhone1(camera, app);
    const client = new client1(mobilePhone);
    let foto = client.mobilePhone.capturarFoto(); 
    let a = client.mobilePhone.redimensionar(foto, 3, 3);
    expect(a.pixelesAncho).toBe(3);
    expect(a.pixelesAlto).toBe(3);
});

