import React, {useState} from 'react';


export default function SearchBar({onSearch}) {
  // acá va tu código
  
  const handleInputChange = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }
  const [city, setCity] = useState("")// para mantener informacion dentro del componente establezco un Estado
  
  return (
    <form onSubmit={ 
      (e) => {e.preventDefault();
      // cuando hyago el submit ejecuto la funcion onSearch con city que es lo que escribio el usuario
      onSearch(city);
      }
    }
    >
      <input 
      type="text" 
      placeholder='Ingrese una ciudad...'
      onChange={ (e)=> handleInputChange(e)}
      value= {city}
      />
      <input type='submit' value='Agregar'/>
    </form>
  )
};