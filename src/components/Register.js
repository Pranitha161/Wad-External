import { NavLink, useNavigate } from "react-router-dom";
function Register(){
    let navigate=useNavigate();
    function clicksignin(){
        navigate('/login')
    }
    return(
        <div className='container w-25'>
            <h1 className="display-2 text-center mb-3">SignUp</h1>
        <form>
          <input type='text' placeholder="First Name" className='form-control mb-3'></input>
          <input type='text' placeholder="Last Name" className='form-control mb-3'></input>
          <input type='date' placeholder="Date of Birth" className='form-control mb-3'></input>
          <input type='text' placeholder="Father Name" className='form-control mb-3'></input>
          <input type='text'  placeholder="Mother Name"  className='form-control mb-3'></input>
          <input type='text'  placeholder="Roll Number" className='form-control mb-3'></input>
          <input type='text' placeholder="Phone Number" className='form-control mb-3'></input>
          <input type='text'  placeholder="Github Link"  className='form-control mb-3'></input>
          <input type='text' placeholder="LinkedIn" className='form-control mb-3'></input>
          <input type='email' placeholder="Email" className='form-control mb-3'></input>
          <input type='text' placeholder="Password" className='form-control mb-3'></input>
          <textarea placeholder="Address" className="cols-3 w-100"></textarea>
        </form>
        <button className=' d-flex mx-auto mt-4 btn btn-success' onClick={clicksignin}>Sign Up</button>
        <p className="text-center">Registered User? <NavLink to={'login'}> Login</NavLink></p>
       </div>
    );
}
export default Register;