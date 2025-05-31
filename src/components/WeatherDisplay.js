import React from 'react'

const WeatherDisplay = ({temp}) => {
  
  return (
    <span  style={temp.temperature>20?{color:"Red"}:{color:"blue"}}   > 
       <p>
        Temperature : {temp.temperature}
       </p>
       <p>
        Conditions : {temp.conditions}
       </p>

    </span>
  )
}

export default WeatherDisplay
