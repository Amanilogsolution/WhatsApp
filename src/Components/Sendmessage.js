
import './sendmessage.css'
import * as XLSX from "xlsx";
import Formate from '../Whatsapp_formate.xlsx'
import React, { useState, useEffect } from 'react'
import { LastId, SendWhatsApp, SendMessage, SendImage } from '../api/index'


const Sendmessage = () => {
    const [id, setId] = useState();
    const [importdata, setImportdata] = useState([]);
    const [emptyfileerror, setEmptyfileerror] = useState(false);
    const [files, setFiles] = useState()


    useEffect(() => {
        async function fetch() {
            const lastId = await LastId()
            const no = parseInt(lastId.message_id)
            setId(no + 1)
        }
        fetch()
    }, [])

    const handleSendmessage = async (e) => {
        e.preventDefault();
        // if (importdata.length === 0) {
        //     setEmptyfileerror(true)
        // }
        // else {
        //     setEmptyfileerror(false)
            let message = document.getElementById("message").value;
            message = message.replace(/’/g, '');
            message = message.replace(/(?:\r\n|\r|\n)/g, ' ');

            const data = new FormData()
            data.append('images', files)
         

            const result2 = await SendImage(data,message)

            //    const result = await SendWhatsApp(importdata,message,id)
            //    if(result==='Added'){
            //    const result1 = await SendMessage(importdata,message)
            //    console.log(result1)
            //    if (result1){
            //     window.location.reload()
            //    }   
            //    }    else{
            //     alert("Server Error")
            //    }
            // }

        
    }

        //##########################  for convert excel to array start  #################################
        const onChange = (e) => {
            const [file] = e.target.files;
            const reader = new FileReader();

            reader.onload = (evt) => {
                const bstr = evt.target.result;
                const wb = XLSX.read(bstr, { type: "binary" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                let data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
                data = data.replace(/,/g, ' ')
                data = data.replace(/"/g, '')
                data = data.replace(/’/g, '')


                var lines = data.split("\n");
                var result = [];
                var headers = lines[0].split(",");
                for (var i = 1; i <= lines.length - 1; i++) {
                    var obj = {};
                    var currentline = lines[i].split(",");
                    for (var j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentline[j];
                    }
                    result.push(obj);
                }
                setImportdata(result);
                if (importdata.length === 0) { }
                else {

                    // importdata.map(item=>(item.phone_no.length>0)?setNumlength(numlength++))
                    // if(numlength > 0){
                    //     alert("Invalid number")
                    // }
                    // else{
                    const array = JSON.stringify(importdata)
                    const datas = JSON.parse(array)
                    setImportdata(datas);
                    //     console.log(result)

                    // }

                }
            };
            reader.readAsBinaryString(file);
        };
<<<<<<< HEAD
        reader.readAsBinaryString(file);
    };

    return (
        <>
            <div className="containersendmess" >
                <div className="box">
                    <h1 className>Send Whatsapp Message</h1>
                    <div>
                        <label htmlFor=""><b>Select the excel file :-</b></label><br />  <br />

                        <input type="file" id="clicked" style={{display:"none"}} onChange={onChange} accept=".xlsx" />
                        <br/>
                        <a href="#" onClick={(e)=>{e.preventDefault();document.getElementById('clicked').click()}}>Upload Excel File</a> &nbsp; &nbsp;
                        <a href={Formate} download>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>&nbsp;
                            Formate
                        </a>
                    </div> <br />
                    {
                        emptyfileerror ?
                            <small>Please! select the file. . .</small> : null
                    }
                    <br />
                    <div>
                        <label htmlFor="message"><b>Message :-</b></label><br />
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <br />
=======
        const onChangeImage = (event) => {
            const file = event.target.files[0];
            setFiles(file)
        }
>>>>>>> a4faa275968c7033c4063c0111d2b2d85a656576

        return (
            <>
                <div className="container" >
                    <div className="box">
                        <h1 className>Send Whatsapp Message</h1>
                        <div>
                            <label htmlFor=""><b>Select the excel file :-</b></label><br />  <br />

                            <input type="file" id="clicked" style={{ display: "none" }} onChange={onChange} accept=".xlsx" />
                            <input type="file" id="clickedImage" style={{ display: "none" }} onChange={onChangeImage} />

                            <br />
                            <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('clicked').click() }}>Upload Excel File</a> &nbsp; &nbsp;

                            <a href={Formate} download>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>&nbsp;
                                Formate
                            </a>
                            <br />
                            <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('clickedImage').click() }}>Upload Image</a>

                        </div> <br />
                        {
                            emptyfileerror ?
                                <small>Please! select the file. . .</small> : null
                        }
                        <br />
                        <div>
                            <label htmlFor="message"><b>Message :-</b></label><br />
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <br />

                        <button className="button" style={{ float: "right" }} onClick={handleSendmessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>
                            &nbsp;
                            Send
                        </button>
                        <button onClick={(e) => { e.preventDefault(); window.location.href = "/"; localStorage.clear() }}>Logout</button>
                    </div>
                </div>
            </>
        )
    
}

export default Sendmessage;