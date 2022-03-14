import React, { useState } from 'react'
import { useGiphyCategory } from '../../hooks/useGiphyCategory';
import { ShowImage } from './ShowImage';


export const ShowCategories = ({categ, fSetLoader}) => {
  const [defaultImg, setDefaultImg] = useState({id:"", shortImage:"", largeImage:""});
  const {loaded, gifData} = useGiphyCategory(categ, setDefaultImg, fSetLoader);
  return (
      <>
        <h1 className="categ-title">{categ}</h1>
        <div className="caruosel-container">
          <div className='large-img-conatine card'>
            <ShowImage img = {defaultImg} type="large" fnSelect={setDefaultImg}/>
            <p className='card-id'>{defaultImg.id}</p>
          </div>
          <div className='short-images-container'>
          {
            loaded && gifData.map((img)=>(
                  <ShowImage key = {img.id}   img = {img} type="short" fnSelect={setDefaultImg}/>
                  ))
                }
          </div>
        </div>
      </>
  )
}
