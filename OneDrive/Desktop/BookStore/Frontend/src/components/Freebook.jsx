import React from 'react'
import List from "../../public/List.json"
function Freebook() {
    const fillterData=List.filter((data)=>data.category==="Free");
    console.log(fillterData);
  return ( <>
  <div>
    <h1>
        Free Offered Couses 
    </h1>
  </div>
  </>
  )
}

export default Freebook
