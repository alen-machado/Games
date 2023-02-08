import React from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/AboutMe.module.css'
import { HiOutlineHome } from "react-icons/hi2";


export default function AboutMe() {
  return (

    <div> 

            <Link className={s.home} to={'/home'}>
            <button>< HiOutlineHome/></button>
            </Link>

      <div className={s.container}>

            

      <h1 className={s.title}>Hola, soy Alen Machado!</h1>

      <img className={s.img} src={'https://res.cloudinary.com/daxy95gra/image/upload/v1675701758/img_e93ckq.jpg'} alt="img not found" />

      <h3 className={s.div}>
        Me presento, tengo 26 años y soy de Buenos Aires, Argentina. Un desarrollador web FullStack enfocado en Front-end, 
        me considero una persona que esta en constante busqueda de crecimiento y nuevos desafios, un dia me di cuenta que lo 
        que estaba haciendo no me gustaba, no me hacia feliz, yo necesitaba seguir avanzando en mi camino, Tras cumplir mi horario
        laboral por la mañana, junto con un gran amigo de la infancia, decidimos emprender juntos, Abrimos una heladeria llamada Lennys,
        Luego de ahorrar durante un tiempo tomé la decision de dimitir a mi trabajo para dedicarme tiempo completo a estudiar programacion.
        Ingresé en este hermoso mundo de forma autodidacta, gracias a tutoriales y cursos online pude plasmar mi primer "Hello Word!" 
        en la pantalla, Cuando ya me sentí listo, me incribí en el bootcamp de henry el cual pude finalizar despues de miles de horas de 
        practica y muchas otras de estudio, tuve fracasos como tambien satisfacciones, muchas veces quise abandonar ya que sentia que
        era mucho para mi, pese a todo y gracias a personas increibles que tuve la suerte de conocer aqui, nunca bajé los brazos.
        Hoy, sigo queriendo crecer, por eso me encuentro en busqueda de un equipo en el cual poder implementar mis conocimientos y del cual 
        poder seguir aprendiendo.

      </h3>
      <br></br>
      <br></br>

      <h2 className={s.div2}>
         Otras fuentes de contacto:
      </h2>

      <div className={s.container2}>
      <h3 className={s.div3}> Linkedin: www.linkedin.com/in/alen-machado/</h3>
      <h3 className={s.div4}> Github: github.com/alen-machado</h3>
      <h3 className={s.div5}> E-mail: Alen.machado@outlook.com</h3>
      <h3 className={s.div6}> Proximamente podran ver mi portfolio terminado </h3>
      </div>
      
      

    </div>
    </div>
    
  )
}