
import SearchBar from './SearchBar'
import nav from './navBar.module.css'
import { Link } from 'react-router-dom'



// acá voy a estar creando el componente navBar
export default function Nav({onSearch}) {
    
    return (
        <div className={nav.barra}>
           <Link to='/'> 
           <img className={nav.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThofjuxoC2plOOd5ZNR-qSkyowj0lB1--UnjpXEzdg5wj5IRazeYHhE8g-tGqgog5VBWE&usqp=CAU' alt='Icono de Henry'></img>   
            <h3 className={nav.title}>Henry Weather App...</h3>
            </Link>
            <Link className={nav.about} to="/about"> ABOUT </Link>

            <div className={nav.derecha}>
            <SearchBar 
              onSearch={onSearch}
              />
            </div>
        </div>
    )

}