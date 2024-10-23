import {username} from "../pages/Auth";
import {md5} from "js-md5";

let baseurl = "https://fd.cedoc.net.br/filedirector/rest/v1/";
// let baseurl = "http://192.168.0.87:9000/filedirector/rest/v1/";

let Token = '';

let guid = '';
export const filedirector = async (requisitante, telefone, empresa, email, meio, grau, observacao, caixasVaziasIn, etiquetasIn, lacresIn, fitasIn, requisicoesIn, coletaIn, entregaIn, pdf, ...uploadfile) =>{
    try{
        await login();
    }
    catch(error){
        console.log(error);
        return error;
    }
    let DocTypeId = "505b59e9";
    if (email === 0){
        let response = await accounts();
        let id = response;
        if (response === false) {
            await logout();
            return ("Error parsing user");
        }
        else{
            response = await user(id);
            email = response["EMailAddress"];
            let [domain, _user] = response["IdentityName"].split("\\");
            empresa = domain;
            requisitante = response["FullName"];
        }
        if (empresa === "cohab"){
            DocTypeId = "dcc5e7f1";
        }
    }
    let params = {
        "DocTypeId": DocTypeId,
        "IndexFields": [
            {"Id": "8D1782FD", "Value": requisitante},
            {"Id": "4BF72E9C", "Value": telefone},
            {"Id": "F6D55B57", "Value": meio},
            {"Id": "B455A072", "Value": grau},
            {"Id": "BD3D362E", "Value": observacao},
            {"Id": "02E2869E", "Value": caixasVaziasIn},
            {"Id": "6ADCF5E0", "Value": etiquetasIn},
            {"Id": "73BA3503", "Value": fitasIn},
            {"Id": "48A4732F", "Value": lacresIn},
            {"Id": "27DA53BB", "Value": requisicoesIn},
            {"Id": "FB5ABF68", "Value": coletaIn},
            {"Id": "74C0F79E", "Value": entregaIn},
            {"Id": "1B172FF6", "Value": empresa},
            {"Id": "42959748", "Value": email},
            {"Id": "BF2827E1", "Value": username}
        ]
    }
    await fetch(baseurl + "DF65779E/createDocument", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + Token
        },
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
        await addFile(DocTypeId, hash, size, pdfFile);
    }
    catch (error) {
        await Delete(guid);
        return ('Error:' + error);
    }
    try{
        if (uploadfile.length !== 0) {
            const hash2 = await getFileHash(uploadfile[0]);
            let size2 = uploadfile[0].size;
            console.log(size2);
            await addFile(DocTypeId, hash2, size2, uploadfile[0]);
        }
    }
    catch (error) {
        await Delete(guid);
        await logout();
        return ('Error:' + error);
    }
    await checkIn(DocTypeId);
    await logout();
    return 0;
}

function md5ArrayBuffer(arrayBuffer) {
    const wordArray = new Uint8Array(arrayBuffer);
    return md5.base64(wordArray);
}

async function addFile(DocTypeId, hash, size, file) {
    let data = {
        "DocTypeId": DocTypeId,
        "HashType": "MD5",
        "Hash": hash,
        "Offset": 0,
        "TotalLength": size,
        "Position": 0,
        "InsertOrReplacePosition": 0
    }
    let headers = {
        'Authorization': 'Bearer ' + Token
    }
    const formdata = new FormData();
    formdata.append('AddFileParams', JSON.stringify(data));
    formdata.append('FileData', file);
    await fetch(baseurl + "DF65779E/" + guid + "/addFile", {
        method: 'POST',
        headers: headers,
        body: formdata
    }).catch((error) => {
        console.log('Error: ' + error);
        return ('Error:' + error);
    });
}

async function checkIn(DocTypeId) {
    await fetch (baseurl + "DF65779E/" + guid + "/checkIn", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + Token
        },
        body: JSON.stringify({
            "DocTypeId": DocTypeId,
            "AutoactionConfirmed": true
        })
    }).catch((error) => {
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
    return new File([blob], fileName, {type: mimeType});
}

async function Delete (guid) {
    let headers = {
        'Authorization': 'Bearer ' + Token
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

async function login(){
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
    Token = response_json["Token"];
}

async function logout(){
    await fetch(baseurl + "logout", {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + Token},
    });
}

async function accounts(){
    let response = await fetch (baseurl + "accounts", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + Token
        }
    });
    let response_json = await response.json();
    for (let item of response_json) {
        if (item["IdentityName"] === username){ //nao acha usuários sem acesso a nada
            return item["Id"];
        }
    }
    return false;
}

async function user(id){
    let response = await fetch (baseurl + "account/" + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + Token
        }
    });
    return await response.json();
}