import { Outlet } from 'react-router-dom';
import Head from './Head';
import Footer from './Footer';
import Nav from './Nav';


const Root = () => {
    return (
        <div >
            


            <Head></Head>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Root;