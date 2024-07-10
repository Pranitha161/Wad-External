import { NavLink } from "react-router-dom";
function Homie(){
    // const style={
    //     backgroundImage="url"
    // }
    return(

     <div className='container text-center'>
        <h1 className='display-1 text-center'>Home</h1>
        <img src="https://th.bing.com/th/id/OIP.Xn3BBcFVmEN7CbRq0Ob4VAHaDe?rs=1&pid=ImgDetMain"></img>
        <p>Ths is ecommerce website having all the required components</p>
        <ul className="nav h-60 ">
            <li className="nav-item mx-4"><NavLink className='nav-link text-dark' to='/login'>Login</NavLink></li>
            <li className="nav-item  mx-4"><NavLink className='nav-link text-dark' to='/register'>Register</NavLink></li>
            
        </ul>
     </div>
    );
}
export default Homie;