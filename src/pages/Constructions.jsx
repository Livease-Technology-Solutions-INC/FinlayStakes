import React from 'react'
import constructionicon from '../assets/constructionimg.svg'

function Constructions() {
    return (
        <div className='main-div'>
            <div className='second-div'>
                <h1 className='text-big'>Oops!</h1>
                <p>Under construction</p>
            </div>
            <div>
                <img className='image' src={constructionicon} alt="Image" />
            </div>
        </div>
    )
}

export default Constructions