export interface loginResponse{ 
    email:string,
    username:string,
    token:string,
    id:string,
    rol:Array<
        {
            name:string
        }>,
    img?:string
}
export interface LoginRequest{
    email:string,
    password:string
}

//Productos
export interface Producto{
    _id:string,
    nombreProducto:string
    precio:number,
    stock:number,
    estado:boolean,
    categoria?:string,
    pathImagen?:string,
    uriImagen?:string
}
export interface ProductosResponse{
    products:Array<Producto>
}
//producto para guardar
export interface ProductoG{
    nombreProducto:string
    precio:string,
    stock:string,
    estado:boolean,
    categoria?:string,
}