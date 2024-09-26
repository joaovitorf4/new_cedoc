import React, { useEffect } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/efalia_logo.png';
import { useUser } from './UserContext';
import background from '../imgs/bg-cedoc.jpg';

let token = '';
let domain = '';

function Auth({bgImg = `url(${background})`}) {
  const style = {
    backgroundImage: bgImg,
  };
  const navigate = useNavigate();
  const { setUser } = useUser();
  // const url = "https://fd.cedoc.net.br/filedirector/rest/v1/login";
  const url = "http://192.168.0.87:9000/filedirector/rest/v1/login";
  // const linkFormFile = "https://fd.cedoc.net.br/FileDirector/basicaccess?action=getform&id1=qeJv5z5QnWt8aXVRmEN%2fJQ%3d%3d&id2=O%2fvC1DDXwGKM49gfCLzuzH%2fpzrRUkTEvgZ23%2btPA3gM%3d";

  useEffect(() => {
    const LoginForm = document.getElementById("frmLogin");

    const handleSubmit = (e) => {
      e.preventDefault();
      const username = document.getElementById('txtUsername').value;
      const password = document.getElementById('txtPassword').value;
      ValidateCredentials(username, password);
    };

    const TratarErro = () => {
      document.querySelector("#error").classList.add("error-show");
    };

    const ValidateCredentials = async (username, password) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            NameOrMail: username,
            Password: password,
            RememberMe: true
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });

        if ( response.status === 200 || response.status === 500 ) {
          token = await response.json();
          token = token['Token'];
          let [domain, ...user] = username.split('\\');
          const condition = domain === 'filedirector';
          setUser(true);
          navigate('/form', { state: { showForm: condition } });
          //window.location.href = linkFormFile;
        } else {
          TratarErro();
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    if (LoginForm) {
      LoginForm.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (LoginForm) {
        LoginForm.removeEventListener('submit', handleSubmit);
      }
    };
  }, [url, setUser, navigate]);

  return (
    <div className="Auth" style={style}>
      <div id="frame">
        <div id="box" className="corner">
          <div id="logo">
            <img src={logo} alt="Company Logo" className="logo-img" />
          </div>

          <div id="loginpane">
            <form id="frmLogin" method="post" action="">
              <input type="hidden" name="txtReturnUrl" value="/fileDirector/web" />
              <input type="hidden" name="txtIsGuest" value="false" />

              <h2>Login</h2>

              <div className="form-group">
                <input type="text" id="txtUsername" name="txtUsername" placeholder='Usuário' required className="form-input" />
              </div>

              <div className="form-group">
                <input type="password" id="txtPassword" name="txtPassword" placeholder='Senha' required className="form-input" />
              </div>

              <div id="error" className='error' aria-live="polite">
                Wrong username or password
              </div>

              <div className="buttons">
                <input name="btnLogin" className="button" type="submit" value="Login" />
              </div>
            </form>
          </div>

          <div id="footer-small">
            <p>© Copyright 2006-2024 Efalia GmbH - All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
export { token };