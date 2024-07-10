import {NavLink} from 'react-router-dom';
// import Login from './Login';
function Nav(){
    return(
        <div className='nav-container'>
      <div className='d-flex justify-content-end bg-info  '>
        <ul className="nav h-60 ">
            <li className="nav-item mx-4"><NavLink className='nav-link text-dark' to='/login'>Login</NavLink></li>
            <li className="nav-item  mx-4"><NavLink className='nav-link text-dark' to='/register'>Register</NavLink></li>
            <li className='nav-item  mx-4'><NavLink className='nav-link  text-dark' to='/contact'>Contact</NavLink></li>
            <li className='nav-item  mx-4'><NavLink className='nav-link  text-dark' to='/about'>About</NavLink></li>
            <li className='nav-item  mx-4'><NavLink className="nav-link  text-dark" to='/cart'>Catalogue</NavLink></li>
            {/* <li className='nav-item  mx-4'><NavLink className="nav-link  text-dark" to='/catalogue'>Catalogue</NavLink></li> */}
        </ul>
        <footer className="App-footer">
        <p className='text-center'>&copy; {new Date().getFullYear()} 22071A0560 Pranitha</p>
      </footer>
      </div>
      </div>
    );
}
export default Nav;
