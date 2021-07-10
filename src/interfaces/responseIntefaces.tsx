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