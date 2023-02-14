import React from 'react';

const Logout = () => {

    const cancel = ()=>{
        window.location= '/home'
    }
    const logout = () =>{
       // localStorage.setItem("token","")
       localStorage.removeItem('token')
       window.location = "/home"
    }
    return (  
        <div className='logout_content'>
        <button onClick={logout}className='btn-logout'>Logout</button>
        <button onClick={cancel} className='cancel-logout'>Cancel</button>
        </div>
  
        
    );
}
 
export default Logout;