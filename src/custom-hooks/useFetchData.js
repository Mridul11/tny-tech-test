import React, { useEffect, useState} from "react" ;
import axios from 'axios';

function useFetchData(url) {
    const [articleData, articleDataSet] = useState({});
    useEffect(
        () => axios.get(url)
            .then(response => articleDataSet(response.data))
            .catch(err => articleDataSet({ err }))
            , [])    

        return [articleData];
}
export default useFetchData;