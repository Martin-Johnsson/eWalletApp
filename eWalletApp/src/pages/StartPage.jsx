
import {GiWallet} from 'react-icons/gi';
import{BsFillArrowRightCircleFill} from 'react-icons/bs';
import Wallet from '../pictures/wallet.png';
import '../assets/styles/startPage.css'
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <section>
      <p><GiWallet className='wallet-icon'/> E-wallet</p>
      <header>
        <img src={Wallet} alt="image" />
      </header>
      <h1>Easy way to manage your payment</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad et reprehenderit ratione doloribus numquam incidunt amet, unde aut eaque quos odit inventore alias magnam. Corrupti assumenda amet laborum et ea!</h2>
    <Link to={
      {pathname:"/mycards"}
      }
      >  
    <BsFillArrowRightCircleFill className='icon'/> 
    </Link>
      </section>
      
  )
}

export default StartPage