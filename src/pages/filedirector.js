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
export const filedirector = async (file) => {
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
    const hash = md5ArrayBuffer(file);
    let size = file.size;
    let data = {
        "DocTypeId": "1982f657",
        "HashType": "MD5",
        "Hash": "xX/a88Dl+IeSnY8DMa2QXA==", //HASH FILHA DA PUTA COMO Q CALCULA ESSA MERDA
        "Offset": 0,
        "TotalLength": size,
        "Position": 0,
        "InsertOrReplacePosition": 0
    }
    const formdata = new FormData();
    formdata.append('AddFileParams', JSON.stringify(data));
    formdata.append('FileData', file);
    console.log(guid);
    console.log(file);
    await addFile(formdata);
    await checkIn(headers);
}

function md5ArrayBuffer(arrayBuffer) {
    const wordArray = new Uint8Array(arrayBuffer);
    return md5.base64(wordArray);
}

async function addFile(formdata) {
    let headers = {
        //'content-type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    await fetch(baseurl + "4AB65F16/" + guid + "/addFile", {
        method: 'POST',
        headers: headers,
        body: formdata})
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch((error) => {
            return ('Error:' + error);
            //call delete function to guid created
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