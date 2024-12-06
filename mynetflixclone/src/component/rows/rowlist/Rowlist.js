import React from 'react'
import Row  from '../row/Row'
import requests  from '../../../utils/request'
const Rowlist = () => {
  return (
    <div>
    
        
         <Row  url={requests.fetchTrending} title="trending" islarge={true} />
         <Row url={requests.fetchHorror} title="horror" islarge={false} />
         <Row url={requests.fetchRomance} title="romance" islarge= {false} />

         <Row url={requests.fetchComedy} title="comedy"islarge={false}  />

         <Row url={requests.fetchanimation} title="animation"islarge={true}  />
         <Row url={requests.fetchsmystery} title="mystery"islarge={false}  />

         

         
        
    

      
    </div>
  )
}

export default Rowlist
