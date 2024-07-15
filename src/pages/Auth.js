// import React from 'react';
// import './Auth.css';
// import logo from '../imgs/efalia_logo.png'

// function Auth() {
//   function TratarErro(){
//       document.querySelector("#error").classList.remove("error");
//   }

//   function ValidateCredentials(username, password){
//       let response = fetch(url, {
//           method: 'POST',
//           body: JSON.stringify({
//               NameOrMail: username,
//               Password: password,
//               RememberMe: true
//           }),
//           headers: {
//               'Content-Type': 'application/json; charset=utf-8'
//           }
//       }).then(response => {
//           if (response.status === 200){
//               response.json()
//                   .then((json) => window.location.href = "php/form.php?Token=" + json["Token"]);
//           }
//           else{
//               TratarErro();
//           }
//       })
//   }

//   let LoginForm = document.getElementById("frmLogin");
//   //let url = "http://192.168.0.87:9000/filedirector/rest/v1/login";
//   let url = "https://fd.cedoc.net.br/filedirector/rest/v1/login";
//   LoginForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       let username = document.getElementById('txtUsername').value;
//       let password = document.getElementById('txtPassword').value;
//       ValidateCredentials(username, password);
//   });
//   return (
//     <div className="Auth">
//       <div id="frame">
//             <div id="box" className="corner">
//                 <div id="logo">
//                     <img src={logo} alt="Company Logo" className="logo-img" />
//                 </div>

//                 <div id="loginpane">
//                     <form id="frmLogin" method="post" action="">
//                         <input type="hidden" name="txtReturnUrl" value="/fileDirector/web" />
//                         <input type="hidden" name="txtIsGuest" value="false" />

//                         <h2>Login</h2>

//                         <div className="form-group">
//                             <label htmlFor="txtUsername">User name</label>
//                             <input type="text" id="txtUsername" name="txtUsername" required className="form-input" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="txtPassword">Password</label>
//                             <input type="password" id="txtPassword" name="txtPassword" required className="form-input" />
//                         </div>

//                         <div id="error" className="error" aria-live="polite">
//                             Wrong username or password
//                         </div>

//                         <div className="buttons">
//                             <input name="btnLogin" className="button" type="submit" value="Login" />
//                         </div>
//                     </form>
//                 </div>

//                 <div id="footer-small">
//                     <p>© Copyright 2006-2024 Efalia GmbH - All rights reserved.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Auth;
