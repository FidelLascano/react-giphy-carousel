import React, { useState } from 'react'
import { useGiphyCategory } from '../../hooks/useGiphyCategory';
import { ShowImage } from './ShowImage';


export const ShowCategories = ({categ}) => {
  const [defaultImg, setDefaultImg] = useState({id:"", shortImage:"", largeImage:""});
  const {loaded, gifData} = useGiphyCategory(categ, setDefaultImg);
  return (
      <>
        <h1 className="categ-title">{categ}</h1>
        <div className="coruosel-container">
          <ShowImage img = {defaultImg} type="large" fnSelect={setDefaultImg}/>
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
