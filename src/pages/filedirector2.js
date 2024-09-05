import { token } from "./Auth";
import {md5} from "js-md5";

export const filedirector2 = async(file) => {
    let baseurl = "https://fd.cedoc.net.br/filedirector/rest/v1/";

    let headers = {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

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
    await fetch(baseurl + "4AB65F16/createDocument", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    }).then(response => response.json())
        .then(data => {
            guid = (data['DocGuid']);
        })
        .catch((error) => {
            return('Error:' + error);
        });
    function md5ArrayBuffer(arrayBuffer) {
        const wordArray = new Uint8Array(arrayBuffer);
        return md5.base64(wordArray);
    }
    const hash = md5ArrayBuffer(file);

    let size = file.size;

    let data = {
        "DocTypeId": "1982f657",
            "HashType": "MD5",
            "Hash": hash,
            "Offset": 0,
            "TotalLength": size,
            "Position": 2,
            "InsertOrReplacePosition": 0
    }

    const formdata = new FormData();

    formdata.append('AddFileParams', JSON.stringify(data));
    formdata.append('FileData', file);
    await fetch(baseurl + "4AB65F16/" + guid + "/addFile", {
        method: 'POST',
        headers: {'Authorization': 'Bearer ' + token},
        body: formdata})
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            return('Error:' + error);
        });
    await fetch(baseurl + "4AB65F16/" + guid + "/checkIn", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "DocTypeId": '1982f657',
            "AutoactionConfirmed": true
        })
    }).then(response => response.json())
        .then(data => {
            return data;
        })
        .catch((error) => {
            return('Error:' + error);
        });

    await fetch (baseurl + "4AB65F16/" + guid, {
        method: 'DELETE',
        headers: headers,
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            return('Error:' + error);
    })
}
