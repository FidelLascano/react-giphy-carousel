import { useEffect, useState } from 'react'
import {getGhipyImages} from './../utils/ghipy.util'

export const useGiphyCategory = (category) => {
    const [gif, setGif] = useState({loaded: false,  gifData: []});
    useEffect(()=> {
        getGhipyImages(category).then(data_list=>{
            setGif({loaded:true, gifData:data_list});
        })
    },[category]);
    return gif;
}
