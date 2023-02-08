import React from 'react'
import {Link} from 'react-router-dom'
import s from '../styles/LandingPage.module.css'
import { HiArrowLongRight } from "react-icons/hi2";

export default function LandingPage(){
    return (
        <div >

      <header className={s.aboutUs}>
      <div className={s.title}>
        <h1 >Encontrá tu juego!</h1>
     </div>
        <Link to={'/AboutMe'}>
        <button className={s.aboutMe}>Sobre Mi</button>
        </Link>
        

      </header>


    <div className={s.conteiner}>
      

    {/* <div className={s.title}>
        <h1 >Find your Game!</h1>
    </div> */}

       <div className={s.buttonBox}>
        <Link to='/home'>
                <button className='button'> < HiArrowLongRight /></button>
            </Link>
      </div>
      
            
    </div>
    </div>
    )
}