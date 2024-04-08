import { Outlet } from 'react-router-dom';
import Head from './Head';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';

const Root = () => {
    return (
        <div >
            


            <Head></Head>
            <Nav></Nav>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Root;