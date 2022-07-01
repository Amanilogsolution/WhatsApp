import axios from 'axios';

export const LastId = async ()=>{
    const url = `http://localhost:8009/getlastid`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const SendWhatsApp = async (datas,message,message_id)=>{
    const url = `http://localhost:8009/insertwhatsapp`
    return axios.post(url,{datas,message,message_id}).then(response => response.data).catch(error => console.log(error));
}