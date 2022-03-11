import React from 'react'

export const ShowImage = ({url, id, type}) => {
  return (
    <div className = {`img-container ${type}`}>
        <img src={url} alt={id}/>
    </div>
  )
}
