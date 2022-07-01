import axios from 'axios';

export const LastId = async ()=>{
    const url = `http://192.168.146.136:8009/getlastid`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const SendWhatsApp = async (datas,message,message_id)=>{
    const url = `http://192.168.146.136:8009/insertwhatsapp`
    return axios.post(url,{datas,message,message_id}).then(response => response.data).catch(error => console.log(error));
}

export const SendWhatsAppMessage = async (phone_no,obgval)=>{
    console.log("Api",obgval)
    const url = `http://192.168.146.19:3000/91${phone_no}/sendText/`
    return axios.post(url,{obgval}).then(response => response.data).catch(error => console.log(error));
}