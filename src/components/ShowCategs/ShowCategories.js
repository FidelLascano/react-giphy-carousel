import React from 'react'
import { useGiphyCategory } from '../../hooks/useGiphyCategory';
import { ShowImage } from './ShowImage';


export const ShowCategories = ({categ}) => {
  const {loaded, gifData} = useGiphyCategory(categ);
 
  return (
      <>
        <h1 className="categ-title">{categ}</h1>
        <div className="coruosel-container">
          {
            loaded && gifData.map(({id, shortImage, largeImage})=>(<>
            <ShowImage key={id} id={id} url={largeImage} type="LARGE"/>
            </>))
          }
        </div>
      </>
  )
}
