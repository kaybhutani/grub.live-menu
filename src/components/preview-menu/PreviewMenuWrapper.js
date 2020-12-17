// import all components here

import React from 'react'
import MenuWrapper from './MenuWrapper'
const PreviewMenuWrapper = (props) =>  {

  const restaurantDetails = props.restaurantDetails
  const customizedMenu = props.customizedMenu

  return (

    <div>
      <MenuWrapper restaurantDetails={restaurantDetails} customizedMenu = {customizedMenu}/>
    </div>
  )

}

export default PreviewMenuWrapper