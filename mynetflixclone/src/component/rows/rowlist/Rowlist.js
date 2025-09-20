import React from 'react'
import Row  from '../row/Row'
import requests  from '../../../utils/request'
const Rowlist = ({ refs }) => {
  return (
    <div>
    
        
         <Row  url={requests.fetchTrending} title="trending" islarge={true} ref={refs.trending} />
         <Row url={requests.fetchHorror} title="horror" islarge={false} ref={refs.horror} />
         <Row url={requests.fetchRomance} title="romance" islarge= {false} ref={refs.romance} />

         <Row url={requests.fetchComedy} title="comedy"islarge={false} ref={refs.comedy}  />

         <Row url={requests.fetchanimation} title="animation"islarge={true} ref={refs.animation}  />
         <Row url={requests.fetchsmystery} title="mystery"islarge={false} ref={refs.mystery}  />

         

         
        
    

      
    </div>
  )
}

export default Rowlist