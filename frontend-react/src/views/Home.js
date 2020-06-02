import React, { useEffect } from 'react';
import '../styles/GlobalStyles.scss';
//import {useSpring, animated} from 'react-spring';
import banner from '../Images/home.jpg';
//import Skeleton from '@material-ui/lab/Skeleton';
//import logo from '../../logos/Logo2.png';
import { HashLink as Link } from 'react-router-hash-link';


function Home () {

    //const spring = useSpring({ to: {number: 100}})
    
    return (
        <div >
            <div className='home-img'>
                <div >
                    {/* <img alt='logoMedu' style={{width: '2.5em', height: 'auto'}} src={logo}></img> */}
                    <Link  className='home-text-container' style={{width: '2em', padding: '20px'}} smooth to="/dashboard">
                        <h1 style={{fontWeight: '200', fontSize: '2.5em'}} className='home-wMainTitleFont home-text-container'>
                            1001
                        </h1>
                    </Link>
                </div>
                <section className="section04" >
                </section>
            </div>
        </div>
    )
}

export default Home;