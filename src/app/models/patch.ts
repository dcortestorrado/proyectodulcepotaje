/* Para MongoDB */
export class Patch{
    _id?: string;
    /* con el ? se indica que el dato puede venir o no */
    nombre: string;
    correo: string;
    /* En el constructor se vuelve a declarar el tipo de dato */
    constructor(nombre: string, correo: string){
        this.nombre = nombre,
        this.correo = correo
    }
}