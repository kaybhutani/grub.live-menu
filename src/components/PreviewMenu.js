import React, { useState } from 'react'
import PreviewRestaurantMenu from './PreviewRestaurantMenu'
import {apiBaseUrl} from '../config.json'

import {useParams} from 'react-router-dom'



const PreviewMenu = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null)
  const [dataFetched, setDataFetched] = useState(false)
  let { menuId } = useParams();
  if(!dataFetched) {
    fetch(`${apiBaseUrl}/view?q=${menuId}`)
        .then(response => response.json())
        .then(data => {
          setDataFetched(true)
          console.log(data)
          if(data.success)
            {
              setRestaurantDetails(data.data)
            }
        });
  }
  

  return (
    <div>
      {dataFetched ? (
      <div>
        {restaurantDetails!=null
        ?
          (<div className='preview-menu'>
            <PreviewRestaurantMenu restaurantDetails={restaurantDetails} />
          </div>)
        :
          (<h1 style={{textAlign: "center", marginBottom: '40%'}}>Incorrect QR Code</h1>)}
      </div>
      )
      :
      (<p style={{textAlign: "center", marginBottom: '40%'}}>Loading...</p>)}
    </div>


  )

}


export default PreviewMenu