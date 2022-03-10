import React, { useState } from 'react'
import { SearchForm } from './SearchForm/SearchForm'

export const App = () => {
  const [searchText, setSearchText] = useState("Fidel");
  const [findCateg,setFindCateg] = useState(false);
  return (
    <>
      <h1>{searchText}</h1>
      <SearchForm  text = {searchText} changeText = {setSearchText} fFindCateg = {setFindCateg}/>
      findCateg & <ShowCategories categ={searchText}/>
    </>
  )
}
