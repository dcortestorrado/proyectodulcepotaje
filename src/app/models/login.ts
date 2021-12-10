/* Para MongoDB */
export class Login{
    /* con el ? se indica que el dato puede venir o no */
    correo: string;
    contrasena: string;
    /* En el constructor se vuelve a declarar el tipo de dato */
    constructor(correo: string, contrasena: string){
        this.correo = correo,
        this.contrasena = contrasena
    }
}
