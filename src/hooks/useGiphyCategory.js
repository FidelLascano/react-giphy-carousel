import { useEffect, useState } from 'react'
import {getGhipyImages} from './../utils/ghipy.util'

export const useGiphyCategory = (category, fnSet) => {
    const [gif, setGif] = useState({loaded: false,  gifData: []});
    useEffect(()=> {
        getGhipyImages(category).then(data_list=>{
            if(data_list && data_list.length>0)fnSet(data_list[0]);
            setGif({loaded:true, gifData:data_list});
        })
    },[category]);
    return gif;
}
