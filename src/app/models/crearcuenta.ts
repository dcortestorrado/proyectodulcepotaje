/* Para MongoDB */
export class Crear{
    _id?: string;
    /* con el ? se indica que el dato puede venir o no */
    nombre: string;
    correo: string;
    contrasena: string;
    /* En el constructor se vuelve a declarar el tipo de dato */
    constructor(nombre: string, correo: string, contrasena: string){
        this.nombre = nombre,
        this.correo = correo,
        this.contrasena = contrasena
    }
}