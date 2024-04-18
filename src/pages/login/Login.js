import React from 'react'
import FormDetails from '../../components/FormDetails';
import LoadingSpin from '../../components/icon/LoadingSpin';
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import  jwtDecode  from "jwt-decode";

export default function Login() {

    const [username, setUserName] = useState({});
    const [password, setPassword] = useState({});
    let navigate = useNavigate();

    const handleLoginForm = (e) => {
        let { NODE_ENV, API_NAME, HOST_NAME } = process.env;
        console.log(NODE_ENV, API_NAME, HOST_NAME)
        e.preventDefault();

        axios({
            method: 'post',
            url: `${HOST_NAME}/${API_NAME}/login`,
            data: {
                username, password
            },
          }).then(function (response) {

            if (response.status === 200) {
                const { accessToken } = response.data;
                localStorage.setItem('accessToken', accessToken); 
                const decoded = jwtDecode(accessToken);
                localStorage.setItem("username", decoded?.sub);
                localStorage.setItem("expiredTime", decoded?.exp);
                localStorage.setItem("permissions", decoded?.permissions);
                navigate('/');

            } 

          }).catch(error => {
            console.log("error",error)})
          .finally(() => {
        
            });
    } 

  return (
    <>
 
            <div className="text-center">
                <div className="px-3 py-2">Thông tin đăng nhập</div>

                <input onChange={(e) => setUserName(e.target.value)}  className="border-solid border-2 px-3 py-2 focus:border-blue-500"  type="text" name="username" placeholder='Tên đăng nhập'></input>
                <br/>
                <input  onChange={(e) => setPassword(e.target.value)} className="border-solid border-2 px-3 py-2 focus:border-blue-500"  type="password" name="password" placeholder='Mật khẩu'></input>
                <br/>

                <div className="inline-flex rounded-md" >
                {/* <LoadingSpin classNameName={'text-blue-400 '}/> */}
                <button onClick={e => handleLoginForm(e)} className="p-2 rounded-lg border-2 border-solid border-white text-white bg-sky-400">Đăng nhập</button>
                <button className="p-2 rounded-lg border-2 border-solid border-white text-white bg-rose-500">Thoát</button>
               
                </div>
               
            </div>

       
    </>
   
  )
}
