/* Para MongoDB */
export class Inventario{
    _id?: string;
    /* con el ? se indica que el dato puede venir o no */
    id: string;
    nombre_producto: string;
    rama: string;
    categoria: string;
    data_producto: [];
    /* En el constructor se vuelve a declarar el tipo de dato */
    constructor(id: string, nombre_producto: string, rama: string, categoria:string, data_producto: []){
        this.id = id;
        this.nombre_producto = nombre_producto,
        this.rama = rama,
        this.categoria = categoria,
        this.data_producto = data_producto
    }
}