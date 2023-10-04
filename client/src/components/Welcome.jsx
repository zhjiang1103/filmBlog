import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {
    const { id } = useParams()
    
    return (
        <>
            <div>Welcome to Janet's Film App!</div>
            <h1>Film {id}</h1>
        </>
    )
}

export default Welcome