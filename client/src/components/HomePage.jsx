import React from 'react'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux"

import Card from './Card.jsx'
import NavBar from "./NavBar.jsx";
import Paginado from './Paginado.jsx'

import s from '../styles/Home.module.css'
import {getVideoGames} from '../actions/index.jsx'

export default function HomePage(){

    const dispatch = useDispatch()
    const videoGames = useSelector((state) => state.videoGames)
    
    useEffect(() => {
        dispatch(getVideoGames())  
      }, [dispatch] )

      const [ currentPage, setCurrentPage ] = useState(1) 
      const [ gamesPerPage, setGamesPerPage ] = useState(9)

  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = videoGames.slice(indexOfFirstGame, indexOfLastGame)

  const [order, setOrder] = useState("")
  const [name, setName] = useState("")

    return (
        <div >
             <NavBar 
             setCurrentPage={setCurrentPage} 
             setOrder={setOrder}
             name={name}
             setName={setName}
             />   

            <Paginado 
            gamesPerPage={gamesPerPage}
            videoGames={videoGames.length}  
            setCurrentPage={setCurrentPage}
            
            /> 

            <div className={s.cards}>
                {
                  currentGames.length ? currentGames.map(v => {
                    
                    return(
                        <div key={v.id} >
                        <Card id={v.id} name={v.name} description={v.description} genres={v.genres || v.genres.map(e => e.name)} rating={v.rating} image={v.image? v.image : 'https://cdn.dribbble.com/users/458522/screenshots/5864883/media/4ee7891e185fdc7723f31a9a0287e492.jpg?compress=1&resize=400x300&vertical=top'} />
                        </div>
                    )
                  }): <div className={s.loading}>Loading...</div>
                }
            </div>

            <Paginado 
            gamesPerPage={gamesPerPage}
            videoGames={videoGames.length}  
            setCurrentPage={setCurrentPage}
            /> 
        </div>
    )
}