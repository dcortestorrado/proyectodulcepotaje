/* Para MongoDB */
export class Contactanos{
    _id?: string;
    /* con el ? se indica que el dato puede venir o no */
    nombre: string;
    correo: string;
    telefono: number;
    mensaje: string;
    /* En el constructor se vuelve a declarar el tipo de dato */
    constructor(nombre: string, correo: string, telefono:number, mensaje: string){
        this.nombre = nombre,
        this.correo = correo,
        this.telefono = telefono,
        this.mensaje = mensaje
    }
}