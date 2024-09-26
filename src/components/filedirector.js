import {token, username} from "../pages/Auth";
import {md5} from "js-md5";

let baseurl = "https://fd.cedoc.net.br/filedirector/rest/v1/";
// let baseurl = "http://192.168.0.87:9000/filedirector/rest/v1/";

let guid = '';
export const filedirector = async (requisitante, telefone, empresa, email, meio, grau, observacao, caixasVaziasIn, etiquetasIn, lacresIn, fitasIn, requisicoesIn, coletaIn, entregaIn, pdf, ...uploadfile) =>{
    if (email === 0){
        let response = await User();
        if (response === false) {
            return ("Error parsing user");
        }
        else{
            //tratar o objeto pra pegar email e empresa
        }
    }
//     let params = {
//         "DocTypeId": "505b59e9",
//         "IndexFields": [
//             {"Id": "8D1782FD", "Value": requisitante},
//             {"Id": "4BF72E9C", "Value": telefone},
//             {"Id": "F6D55B57", "Value": meio},
//             {"Id": "B455A072", "Value": grau},
//             {"Id": "BD3D362E", "Value": observacao},
//             {"Id": "02E2869E", "Value": caixasVaziasIn},
//             {"Id": "6ADCF5E0", "Value": etiquetasIn},
//             {"Id": "73BA3503", "Value": fitasIn},
//             {"Id": "48A4732F", "Value": lacresIn},
//             {"Id": "27DA53BB", "Value": requisicoesIn},
//             {"Id": "FB5ABF68", "Value": coletaIn},
//             {"Id": "74C0F79E", "Value": entregaIn},
//             {"Id": "1B172FF6", "Value": empresa},
//             {"Id": "42959748", "Value": email},
//         ]
//     }
//     let headers = {
//         'content-type': 'application/json',
//         'Authorization': 'Bearer ' + token
//     }
//     await fetch(baseurl + "DF65779E/createDocument", {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(params)
//     }).then(response => response.json())
//         .then(data => {
//             guid = (data['DocGuid']);
//         })
//         .catch((error) => {
//             return ('Error:' + error);
//         });
//     const hash = md5ArrayBuffer(pdf);
//     let pdfFile = await arrayBufferToFile(pdf, "form.pdf", "application/pdf");
//     let size = pdfFile.size;
//     try {
//         await addFile(hash, size, pdfFile);
//     }
//     catch (error) {
//         await Delete(guid);
//         return ('Error:' + error);
//     }
//     try{
//         if (uploadfile.length !== 0) {
//             const hash2 = await getFileHash(uploadfile[0]);
//             let size2 = uploadfile[0].size;
//             await addFile(hash2, size2, uploadfile[0]);
//         }
//     }
//     catch (error) {
//         await Delete(guid);
//         return ('Error:' + error);
//     }
//     await checkIn(headers);
// }
//
// function md5ArrayBuffer(arrayBuffer) {
//     const wordArray = new Uint8Array(arrayBuffer);
//     return md5.base64(wordArray);
// }
//
// async function addFile(hash, size, file) {
//     let data = {
//         "DocTypeId": "505b59e9",
//         "HashType": "MD5",
//         "Hash": hash,
//         "Offset": 0,
//         "TotalLength": size,
//         "Position": 0,
//         "InsertOrReplacePosition": 0
//     }
//     let headers = {
//         'Authorization': 'Bearer ' + token
//     }
//     const formdata = new FormData();
//     formdata.append('AddFileParams', JSON.stringify(data));
//     formdata.append('FileData', file);
//     await fetch(baseurl + "DF65779E/" + guid + "/addFile", {
//         method: 'POST',
//         headers: headers,
//         body: formdata})
//         .then(response => response.json())
//         .then(data => {console.log(data)})
//         .catch((error) => {
//             return ('Error:' + error);
//         });
// }
//
// async function checkIn(headers) {
//     await fetch (baseurl + "DF65779E/" + guid + "/checkIn", {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify({
//             "DocTypeId": '505b59e9',
//             "AutoactionConfirmed": true
//         })
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch((error) => {
//             return ('Error:' + error);
//         });
// }
//
// const getFileHash = async (file) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//             const arrayBuffer = event.target.result;
//             const hash = md5ArrayBuffer(arrayBuffer);
//             resolve(hash);
//         };
//         reader.onerror = (error) => {
//             reject(error);
//         };
//         reader.readAsArrayBuffer(file);
//     });
// };
//
// function arrayBufferToFile(arraybuffer, fileName, mimeType){
//     const blob = new Blob([arraybuffer], {type: mimeType});
//     return new File([blob], fileName, {type: mimeType});
// }
//
// async function Delete (guid) {
//     let headers = {
//         'Authorization': 'Bearer ' + token
//     }
//     await fetch (baseurl + "DF65779E/" + guid, {
//         method: 'DELETE',
//         headers: headers,
//     }).then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch((error) => {
//             return ('Error:' + error);
//         });
}

async function User(){ //vou ter q refatorar ja que n vai usar mais o token do auth, e sim o usuario do .env
    let response = await fetch(baseurl + "login", {
        method: 'POST',
        body: JSON.stringify({
            NameOrMail: process.env.REACT_APP_USERNAME_FD,
            Password: process.env.REACT_APP_PASSWORD_FD,
            RememberMe: true
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    let response_json = await response.json();
    let Token = response_json["Token"];
    response = await fetch (baseurl + "accounts", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + Token
        }
    });
    response_json = await response.json();
    for (let item of response_json) {
        if (item["IdentityName"] === username){ //nao acha usuários sem acesso a nada
            return item;
        }
    }
    return false;
}