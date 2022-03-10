import React from 'react'

export const SearchForm = ({text, changeText}) => {
   
    const fnKeyPressHandler = (e) => {
       let targetValue = e.target.value;
       console.log(targetValue);
       changeText(targetValue);
       console.log(targetValue)
    }
  return (
    <>
        <form>
            <input type={"text"} value={text}  onChange={fnKeyPressHandler}/>
            <button className='btn btn-primary'>Buscar</button>
        </form>
        <br/>
    </>
  )
}
