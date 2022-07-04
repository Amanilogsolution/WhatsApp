import axios from 'axios';

export const UserLogin = async (userId,userpassword)=>{
    console.log('Login',userId,userpassword)
    const url = `http://localhost:8009/login`
    return axios.post(url,{userId,userpassword}).then(response => response.data).catch(error => console.log(error));
}

export const LastId = async ()=>{
    const url = `http://182.76.62.178:8112/getlastid`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const SendWhatsApp = async (datas,message,message_id)=>{
    const url = `http://182.76.62.178:8112/insertwhatsapp`
    return axios.post(url,{datas,message,message_id}).then(response => response.data).catch(error => console.log(error));
}

export const SendMessage = async (data,message)=>{
    console.log('WhatsApp',data,message)
    const url = `http://182.76.62.178:8009/sendmessage`
    return axios.post(url,{data,message}).then(response => response.data).catch(error => console.log(error));
}
export const SendImage = async (data,message)=>{
    console.log('WhatsApp',data,message)
    const url = `http://localhost:8009/sendimage`
    return axios.post(url,data).then(response => response.data).catch(error => console.log(error));
}