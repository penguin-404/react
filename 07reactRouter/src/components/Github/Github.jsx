import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData]  = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/penguin-404')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-400 p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github Profile" />
    </div>
  )
}

export default Github

export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/penguin-404')

    return response.json();
}