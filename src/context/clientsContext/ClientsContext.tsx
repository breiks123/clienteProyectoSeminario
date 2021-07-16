import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { ImagePickerResponse } from "react-native-image-picker";
import apiCasaReal from "../../api/casaRealApi";
import { Cliente, ClienteG} from "../../interfaces/responseIntefaces";
import { AuthContext } from "../authContext/AuthContext";


type ClientesContextProps ={
    clientes:Cliente[];
    clientesPotenciales:Cliente[];
    loadClientesRegulares: () => Promise<void>;
    loadClientesPotenciales: () => Promise<void>;
    loadAllClientes: () => Promise<void>;
    addCliente: ( dataProducto:ClienteG,idVen:string ) => Promise<void>;
   /*  updateCliente: ( productName: string, productId: string ) => Promise<void>;
    deleteCLiente: ( id: string ) => Promise<void>;
    loadCLienteById: ( id: string ) => Promise<Producto>; */
    uploadImageCliente: ( data: any, id: string ) => Promise<void>; // TODO: cambiar ANY
    
}


export const ClientesContext = createContext({}as ClientesContextProps);


export const ClientesProvider = ({children}:any)=>{
    const [clientes, setClientes] = useState <Cliente[]>([]);
    const[clientesPotenciales,setCLientesPotenciales]=useState<Cliente[]>([]);
    const[allClientesByVendedor,setAllClientes]=useState<Cliente[]>([]);
    const {user}=useContext(AuthContext);

    useEffect(()=>{
        loadClientesPotenciales();
        loadClientesRegulares();
        loadAllClientes();
        //
    },[user]);
    /* useEffect(()=>{
        loadClientesPotenciales();
    },[user]); */
    const loadAllClientes=async()=>{
        if(user!==null&&user!=='no data')
        {
            if(user.rol[0].name ==='vendedor')
            {
                const respon = await apiCasaReal.get<any>(`/api/clientesVendedor/${user.id}`);
                //console.log("este es del vendedor ",user.username," y este es su id ",user.id);
                setClientes([...respon.data.serverResponse]);
            }
            else
            {
                const respon = await apiCasaReal.get<any>(`/api/clientes`);
                setClientes([...respon.data.serverResponse]);
            }
        }
    }
    const loadClientesRegulares = async() => {
        if(user!==null&&user!=='no data')
        {
            if(user.rol[0].name ==='vendedor')
            {
                const respon = await apiCasaReal.get<any>(`/api/clientesRegularesByVendedor/${user.id}`);
                console.log("este es del vendedor ",user.username," y este es su id ",user.id);
                setClientes([...respon.data.serverResponse]);
            }
            else
            {
                const respon = await apiCasaReal.get<any>(`/api/clientesRegulares`);
                setClientes([...respon.data.serverResponse]);
            }
        }
        //console.log(respon.data)
    }
    const loadClientesPotenciales=async()=>{
        if(user!==null&&user!=='no data')
        {
            if(user.rol[0].name ==='vendedor')
            {
                const respon = await apiCasaReal.get<any>(`/api/clientesPotencialesByVendedor/${user.id}`);
                console.log("este es del vendedor ",user.username," y este es su id ",user.id);
                setCLientesPotenciales([...respon.data.serverResponse]);
            }
            else
            {
                const respon = await apiCasaReal.get<any>(`/api/clientesPotenciales`);
                setCLientesPotenciales([...respon.data.serverResponse]);
            }
        }
    }

    const addCliente = async(  dataCliente:ClienteG,idVen:string ) => {
        try {
            const respon = await apiCasaReal.post(`/api/clientes/${idVen}`,{
                nombre:dataCliente.nombre,
                apellidos:dataCliente.apellidos,
                email:dataCliente.email,
                telefono:dataCliente.telefono,
                ci:dataCliente.ci,
                zona:dataCliente.zona,
                calleNumero:dataCliente.calleNumero,
                tipoCliente:dataCliente.tipoCliente,
                probabilidadCaptacion:dataCliente.probabilidadCaptacion,
                estadoCliente:'default',
                claseCliente:dataCliente.claseCliente
            });
            if(dataCliente.claseCliente)
                setClientes([...clientes,respon.data.serverResponse]);
            else
                setCLientesPotenciales([...clientesPotenciales,respon.data.serverResponse]);
        } catch (error) {
            console.log("error del servidor ",error);
        }
        
        //console.log("este es la respuesta de servido :",respon.data.serverResponse)
    }

    //implementar para cliente:
    /* const updateProduct = async( productName: string, productId: string ) =>{
        
    }

    const deleteProduct = async( id: string ) => {
        
    }

    const loadProductById = async( id: string ) => {
        throw new Error('Not implemented');
    }; */

    // TODO: cambiar ANY
    const uploadImageCliente = async( data: ImagePickerResponse, id: string ) => {
        const fileToUpload ={
            uri:data.assets[0].uri,
            type:data.assets[0].type,
            name:data.assets[0].fileName,
        }
        const formData = new FormData();
        formData.append('image1',fileToUpload);
        try {
            await apiCasaReal.post(`/api/uploadImagenCliente/${id}`,formData);
        } catch (error) {
            console.log("error al subir la imagen", error)
        }
        loadClientesRegulares();
        loadClientesPotenciales();
    }

    return(
        <ClientesContext.Provider value={{
            clientes,
            addCliente,
            loadClientesRegulares,
            uploadImageCliente,
            loadClientesPotenciales,
            clientesPotenciales,
            loadAllClientes

        }}
        >
            {children}
        </ClientesContext.Provider>

    )
}