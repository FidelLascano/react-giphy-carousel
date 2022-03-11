import React, { useState } from 'react'
import { SearchForm } from './SearchForm/SearchForm'
import { ShowCategories } from './ShowCategs/ShowCategories';

export const App = () => {
  const [searchText, setSearchText] = useState("");
  const [findCateg, setFindCateg] = useState(false);
  return (
    <>
      <SearchForm  text = {searchText} changeText = {setSearchText} fFindCateg = {setFindCateg}/>
      {findCateg && <ShowCategories categ = {searchText}/>}
    </>
  )
}
