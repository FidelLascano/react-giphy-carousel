import React, { useState } from 'react'
import { SearchForm } from './SearchForm/SearchForm'
import { ShowCategories } from './ShowCategs/ShowCategories';
import loader_img from './../assets/images/svg-loaders/puff.svg';

export const App = () => {
  const [searchText, setSearchText] = useState("");
  const [findCateg, setFindCateg] = useState(false);
  const [loader, setLoader] = useState('no-loader');
  return (
    <>
      <div className = {loader} > <img src={loader_img} alt='loader'/> </div>
      <SearchForm  text = {searchText} changeText = {setSearchText} fFindCateg = {setFindCateg} fSetLoader = {setLoader}/>
      {findCateg && <ShowCategories categ = {searchText} fSetLoader = {setLoader}/>}
    </>
  )
}
