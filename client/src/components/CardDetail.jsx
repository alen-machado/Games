import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getDetail, cleanGameId } from '../actions/index.jsx'
import { useEffect } from 'react'
import s from '../styles/CardDetail.module.css'
import { HiOutlineHome, HiArrowPath, HiMagnifyingGlass } from "react-icons/hi2";

export default function CardDetail(){
    const { id } = useParams();

  const dispatch = useDispatch()
  const game = useSelector((state) => state.detail)

  useEffect(() => {
    dispatch(getDetail(id))
    dispatch(cleanGameId())
  },[dispatch, id])

  function handleClick(e){
    e.preventDefault()
    dispatch(getDetail(id))
  }
 
    return (
        <div  key={id}>

            

            <Link className={s.create} to='/create'>
            <button>Create VideoGame</button>
            </Link>

            <Link className={s.home} to={'/home'}>
            <button>< HiOutlineHome/></button>
            </Link>


           

           <div >
            {
                game.length > 0 ?
                <div className={s.conteiner}>
                  
                    <h1 className={s.title}>{game[0].name.toLowerCase()}</h1>
                    <img className={s.img} src={game[0].image } alt="img not found" width="450px" height="400px"/>
                    <h3 >FECHA DE LANZAMIENTO:   {game[0].released} </h3>
                    <h3 >RATING:   {game[0].rating} </h3>
                    <h3 >PLATAFORMAS DISPONIBLES: {game[0].platforms.join(', ')} </h3>
                    <h3 >DESCRIPCION: {game[0].description} </h3>
                     <h3> GENEROS: {game[0].genres.join(', ')}</h3> 
    
                </div> : <div className={s.loading} >Loading...</div>
            }
           </div>
        </div>
    )
}