import axios from 'axios';

export const LastId = async ()=>{
    const url = `http://192.168.146.136:8009/getlastid`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const SendWhatsApp = async (datas,message,message_id)=>{
    const url = `http://192.168.146.136:8009/insertwhatsapp`
    return axios.post(url,{datas,message,message_id}).then(response => response.data).catch(error => console.log(error));
}

export const SendMessage = async (data,message,)=>{
    console.log(data,message)
    const url = `http://localhost:8009/sendmessage`
    return axios.post(url,{data,message}).then(response => response.data).catch(error => console.log(error));
}