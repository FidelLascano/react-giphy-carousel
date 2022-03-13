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
            <input className='form-item itext' type={"text"} value={text}  onChange={fnKeyPressHandler} placeholder="Write an anime name"/>
            <button className='form-item btn btn-primary'>Buscar</button>
        </form>
    </div>
  )
}
