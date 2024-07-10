import { Outlet } from "react-router";
import Nav from "./Nav";
import Homie from "./Homie";
// import Footer from "./Footer";
function Home(){
    return(
      <div>
       <Nav/>
       {/* <Homie/> */}
       <Outlet/>
      
      </div>
    );
}
export default Home;