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

//interfaces para clientes:


export interface Cliente{
    _id:string,
    nombre:string,
    apellidos:string,
    email:string,
    telefono:string,
    ci:string,
    zona:string,
    calleNumero:string,
    tipoCliente:string,
    probabilidadCaptacion:number,
    estadoCliente:string,
    claseCliente:boolean,        
    idVendedor:string,
    pathavatar?:string,
    uriavatar?:string
}
export interface ClientesResponse{
    products:Array<Cliente>
}
//cliente para guardar
export interface ClienteG{
    nombre:string,
    apellidos:string,
    email:string,
    telefono:string,
    ci:string,
    zona:string,
    calleNumero:string,
    tipoCliente:string,
    probabilidadCaptacion?:number,
    estadoCliente?:string,
    claseCliente?:boolean       
}


//Reuniones 

export interface Reunion{

    clienteId?: string,
    vendedorId?: string,
    reunionFecha?:Date,
    resultadoReunion?:boolean,
    reunionRealizada?:boolean,
    fechaRegistro?:Date
}

export interface ReunionG{

    clienteId?: string,
    vendedorId?: string,
    reunionFecha?:Date,
    resultadoReunion?:boolean,
    reunionRealizada?:boolean,
    fechaRegistro?:Date
}

//Pedidos
export interface Pedido
{
    _id:string,
    nombreCLiente?:string,
    nombreVendedor?:string,
    vendedorId?:string,
    clienteId?:string,
    fechaEntrega?:Date,
    registerDate?:Date
    estadoPedido?:boolean,//entregado- no entregado
    pagoTotal:string,
    uriRecibo?:string,
    pathRecibo?:string,
    metodoPago:string,//efectivo-cuenta bancaria
    ordenarPedido?:boolean,//cuando se cancela el pedido
    motivoCancelacion?:string,//tiene stock - no tiene efectivo - otro
    productosPedido?:Array<itemPedido>
}
export interface itemPedido{
            idProducto?:string,
            nombreProduto?:string,
            cantidad?:number,
            costoUnitario?:number,
            costoTotal?:string,
}

