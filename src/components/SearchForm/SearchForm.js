import React from 'react'

export const SearchForm = ({text, changeText, fFindCateg}) => {
    const fnSubmitSendHandler = (e) =>
    {
      e.preventDefault();
      if(text && text.length > 0) fFindCateg(true);
    };

    const fnKeyPressHandler = (e) => 
    {
       let targetValue = e.target.value;
       changeText(targetValue);
       fFindCateg(false);
    }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={fnSubmitSendHandler}>
            <input type={"text"} value={text}  onChange={fnKeyPressHandler}/>
            <button className='btn btn-primary'>Buscar</button>
        </form>
    </div>
  )
}
