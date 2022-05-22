import React from 'react'
import "./Home.scss"

export const Home = () => {
  return (<>
    
  <div className='homeContainer'>
    <div className='optionsContainer'>
     
      <div className='information'>
        <h1 className="animate-charcter">Fullstack Developer</h1>
        <div className='infoHome'>
        <h3>My name is Ricardo</h3>
        <p>Welcome to my Portfolio page. If you are around here is because you´re looking for a developer with a huge desire to grow, also be able to find to some more information about me, works I have done and find the opportunity ask me anything.  </p>
        </div>  
      </div>
    </div>
    <div className='otherOptionsContainer'>
 
    <div className='imgHomeContainer'>
      <img src='./assets/RicardoHD.png' alt=''/>
    </div>
    </div>
  </div>
  

    </>
  )
}
