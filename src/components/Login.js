// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// function Login(){
//     let navigate=useNavigate();
//     function viewcart(){
//         navigate('/cart');
//     }
//     return(
//         <div className='container w-25'>
//             <h1 className="display-1 text-center">Login</h1>
//         <form>
//           <input type='text' required='true' placeholder="Username" className='form-control mb-3'></input>
//           <input type='text' placeholder="Password" className='form-control mb-3'></input>
//         </form>
//         <button onClick={viewcart} className=' d-flex mx-auto mt-4 btn btn-success'>Login</button>
//         <p className="text-center mt-4">New User?<NavLink to={'/register'}>Register</NavLink></p>
//         <footer className="App-footer">
      
//       </footer>
//        </div>
//     );
// }
// export default Login;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const viewCart = () => {
    // Validate fields before navigating
    const newErrors = {};
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
    }
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    } else if (password.trim().length !== 8) {
      newErrors.password = 'Password must be exactly 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, navigate to /cart
    navigate('/cart');
  };

  return (
    <div className='container w-25'>
      <h1 className="display-1 text-center">Login</h1>
      <form>
        <input
          type='text'
          placeholder="Username"
          className='form-control mb-3'
          value={username}
          onChange={handleUsernameChange}
        />
        {errors.username && <p className="text-danger">{errors.username}</p>}
        <input
          type='password'
          placeholder="Password (8 characters)"
          className='form-control mb-3'
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}
      </form>
      <button onClick={viewCart} className='d-flex mx-auto mt-4 btn btn-success'>Login</button>
      <p className="text-center mt-4">New User? <NavLink to='/register'>Register</NavLink></p>
      <footer className="App-footer">
      
      </footer>
    </div>
  );
}

export default Login;
