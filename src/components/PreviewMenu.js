import React from 'react'
import PreviewRestaurantMenu from './PreviewRestaurantMenu'

import {useParams} from 'react-router-dom'

const {menuId} = useParams()


const PreviewMenu = (props) => {
  const restaurantDetails = {"logo":"http://res.cloudinary.com/kartikay/image/upload/v1603827958/soxg20lswyvcegxhwqkd.jpg","menu":{"categories":[{"items":[{"itemName":"Chowmein","itemPrice":"Half: $2.99, Full: 3.99"},{"itemName":"Momos","itemPrice":"Rs. 70"},{"itemName":"Sushi","itemPrice":"$ 4.99"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Dal makhani","itemPrice":"Rs. 199"},{"itemName":"Shahi paneer","itemPrice":"Rs. 399"}],"title":"North Indian","type":"text"}]},"restaurantName":"Poor Richard's Club"}
  return (
    <div className='preview-menu'>
      <PreviewRestaurantMenu restaurantDetails={restaurantDetails} />
    </div>
  )

}


export default PreviewMenu