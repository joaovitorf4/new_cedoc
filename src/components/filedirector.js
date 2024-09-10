import { token } from "../pages/Auth";
import {md5} from "js-md5";
let baseurl = "https://fd.cedoc.net.br/filedirector/rest/v1/";

let guid = '';
export const filedirector = async (empresa, requisitante, telefone, email, meio, grau, observacao, pdf, ...uploadfile) =>{
    let params = {
        "DocTypeId": "505b59e9",
        "IndexFields": [
            {"Id": "1B172FF6", "Value": empresa},
            {"Id": "8D1782FD", "Value": requisitante},
            {"Id": "4BF72E9C", "Value": telefone},
            {"Id": "42959748", "Value": email},
            {"Id": "F6D55B57", "Value": meio},
            {"Id": "B455A072", "Value": grau},
            {"Id": "BD3D362E", "Value": observacao}
        ]
    }
    let headers = {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    await fetch(baseurl + "DF65779E/createDocument", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    }).then(response => response.json())
        .then(data => {
            guid = (data['DocGuid']);
        })
        .catch((error) => {
            return ('Error:' + error);
        });
    const hash = md5ArrayBuffer(pdf);
    let pdfFile = await arrayBufferToFile(pdf, "form.pdf", "application/pdf");
    let size = pdfFile.size;
    try {
        await addFile(hash, size, pdfFile);
    }
    catch (error) {
        await Delete(guid);
        return ('Error:' + error);
    }
    try{
        if (uploadfile.length !== 0) {
            const hash2 = await getFileHash(uploadfile[0]);
            let size2 = uploadfile[0].size;
            await addFile(hash2, size2, uploadfile[0]);
        }
    }
    catch (error) {
        await Delete(guid);
        return ('Error:' + error);
    }
    await checkIn(headers);
}

function md5ArrayBuffer(arrayBuffer) {
    const wordArray = new Uint8Array(arrayBuffer);
    return md5.base64(wordArray);
}

async function addFile(hash, size, file) {
    let data = {
        "DocTypeId": "505b59e9",
        "HashType": "MD5",
        "Hash": hash,
        "Offset": 0,
        "TotalLength": size,
        "Position": 0,
        "InsertOrReplacePosition": 0
    }
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    const formdata = new FormData();
    formdata.append('AddFileParams', JSON.stringify(data));
    formdata.append('FileData', file);
    await fetch(baseurl + "DF65779E/" + guid + "/addFile", {
        method: 'POST',
        headers: headers,
        body: formdata})
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch((error) => {
            return ('Error:' + error);
        });
}

async function checkIn(headers) {
    await fetch (baseurl + "DF65779E/" + guid + "/checkIn", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "DocTypeId": '505b59e9',
            "AutoactionConfirmed": true
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            return ('Error:' + error);
        });
}

const getFileHash = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const arrayBuffer = event.target.result;
            const hash = md5ArrayBuffer(arrayBuffer);
            resolve(hash);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsArrayBuffer(file);
    });
};

function arrayBufferToFile(arraybuffer, fileName, mimeType){
    const blob = new Blob([arraybuffer], {type: mimeType});
    const file = new File([blob], fileName, {type: mimeType});
    return file;
}

async function Delete (guid) {
    let headers = {
        'Authorization': 'Bearer ' + token
    }
    await fetch (baseurl + "DF65779E/" + guid, {
        method: 'DELETE',
        headers: headers,
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            return ('Error:' + error);
        });
}