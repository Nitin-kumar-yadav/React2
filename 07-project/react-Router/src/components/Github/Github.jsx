import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Nitinyadav14920')
        .then(response => response.json())
        .then(data=> {
            setData(data);
        })
    }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers : {data.followers}
         <img src={data.avatar_url} alt="Git Picture" width={300} />   
         </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Nitinyadav14920')
    return response.json()
}