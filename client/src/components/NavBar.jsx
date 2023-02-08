import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import s from '../styles/NavBar.module.css'
import { HiOutlineHome, HiArrowPath, HiMagnifyingGlass } from "react-icons/hi2";

import { getVideoGames, getByName, filterGenres, getGenres, createdBy, orderByLeter, orderByRating } from '../actions/index.jsx'

export default function NavBar({setCurrentPage, setOrder, name, setName}){

    const dispatch = useDispatch()
    const generos = useSelector((state) => state.genres)
    

    useEffect(() => {
        dispatch(getVideoGames())  
        dispatch(getGenres())
      }, [dispatch] )

    function handleClick(e){
        e.preventDefault()
        dispatch(getVideoGames())
    }

    function handleInput(e) {
        e.preventDefault()
        setName(e.target.value)
           
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getByName(name))
        
        setName('') 
    }

    function handleFilterGenre(e) {
        e.preventDefault()
        dispatch(filterGenres(e.target.value))
        setCurrentPage(1)
      setOrder(e.target.value)
    }

    function handleCreatedBy(e) {
        dispatch(createdBy(e.target.value))
    }

    function handleOrderLeter(e) {
        e.preventDefault()
        dispatch(orderByLeter(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    function handleOrderRating(e) {
        e.preventDefault()
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    return (
    <div className={s.container}>

          <div className={s.title}>
                <h1>Catalogo de juegos</h1>
          </div>
          <div className={s.aboutUs}>
            <Link to={'/AboutMe'}>
               <button className={s.aboutMe}>Sobre Mi</button>
            </Link>

          </div>
          

            <Link className={s.create} to='/create'>
            <button>Crear VideoJuego</button>
            </Link>

            <Link className={s.home} to={'/home'}>
            <button>< HiOutlineHome/></button>
            </Link>
            
             {/* arreglar no carga de nuevo */}
             {/* <button className={s.recargar} onClick={e => {handleClick(e)}}><HiArrowPath/></button>  */}
          
           <div className={s.busqueda}>
            <input  className={s.input} type='text'
            value={name}
            placeholder={'Buscar por nombre...'}
            onChange={e => { handleInput(e)}}
            ></input>

            <button className={s.inputButton}
            type='submit'
            onClick={e => {handleSubmit(e)}}
            ><HiMagnifyingGlass/></button>
           </div>
          
            
        
     <div className={s.container2}>

        <div className={s.text}>
        <label>Filtro por su Genero:</label>
        <select onChange={e => { handleFilterGenre(e)}}>
        <option value='All'>Todos</option>
        {
            generos?.map((e, i) => {
                return (<option value={e.name} key={i}>{e.name}</option>)
            })
        }
        </select>

        </div>

        <div className={s.text}>
            <label>Filtro por su Creacion:</label>
            <select onClick={e => { handleCreatedBy(e)}} >
            <option value='All'>Todos</option>
            <option value='created'>Creados</option>
            <option value='api'>Existentes</option>
            </select>
        </div>
       
        <div className={s.text}>
            <label>Ordenado Alfabetico:</label>
            <select onChange={e => {handleOrderLeter(e)}} > 
            <option value="All">Todos</option>
            <option value='ascendente'>A - Z</option>
            <option value='descendente'>Z - A</option>
            </select>
        </div>

        <div className={s.text}>
            <label>Ordenado por Rating:</label>
            <select onChange={e => {handleOrderRating(e)}} > 
            <option value="All">Todos</option>
            <option value='ascendente'>Ascendente</option>
            <option value='descendente'>Descendente</option>
            </select>
        </div>
     </div>
        
   
    </div>
    )
}