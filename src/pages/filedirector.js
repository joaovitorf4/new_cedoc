import { token } from "./Auth";
import {md5} from "js-md5";
import header from "../imports/Header";
let baseurl = "https://fd.cedoc.net.br/filedirector/rest/v1/";

let params = {
    "DocTypeId": "1982f657",
    "IndexFields": [
        {
            "Id": "6B66C946",
            "Value": "00.000.000.000-0"
        }
    ]
}
let guid = '';
export const filedirector = async (pdf, ...uploadfile) =>{
    let headers = {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    await fetch(baseurl + "4AB65F16/createDocument", {
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
        "DocTypeId": "1982f657",
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
    await fetch(baseurl + "4AB65F16/" + guid + "/addFile", {
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
    await fetch (baseurl + "4AB65F16/" + guid + "/checkIn", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "DocTypeId": '1982f657',
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
    await fetch (baseurl + "4AB65F16/" + guid, {
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