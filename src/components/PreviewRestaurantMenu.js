import React from 'react'

const PreviewRestaurantMenu = (props) => {

  const restaurantDetails = props.restaurantDetails

  return (
    <div className='shadow-box'>

      <div  style={{textAlign: "center"}}>
          <h1>
            {restaurantDetails.logo?
            (<img src={restaurantDetails.logo} alt='' className='restaurant-logo'></img>)
            :
            (<i className='eos-icons' style={{color: 'red', fontSize: '1em', margin: '8px'}}>local_dining</i>)}   
            {restaurantDetails.restaurantName}</h1>
        </div> 
    <br></br>
    <div>
      {restaurantDetails.menu.categories.map((element, key) => {
            return (
            
            <div key={key}>
            <h2>{element.title}</h2>
            

            {
              restaurantDetails.menu.categories[key].items.map((item, itemKey) => {
                return (<div key={itemKey}>
                  <p style={{display: "inline-block", margin: 0}}>{item.itemName}</p>
                  <p style={{float: "right", margin: 0}}>{item.itemPrice}</p>
                  <br></br>
                  <br></br>  
                </div>
                
                )
              })
            }
            
          
          </div>)
          
        })}  
    </div>
    </div>
  )

}

export default PreviewRestaurantMenu