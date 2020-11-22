import React, { useEffect, useState } from 'react'

const PreviewRestaurantMenu = (props) => {

  const [restaurantDetails, setRestaruarntDetails] = useState(props.restaurantDetails)
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(()=> {

    if(searchQuery==="") 
      setRestaruarntDetails(props.restaurantDetails)
    else {
      // changing state obj to json
      const tempRestaurantDetails = JSON.parse(JSON.stringify(props.restaurantDetails))
      
      const categories = []

      tempRestaurantDetails.menu.categories.forEach(category => {

        if(category.title.toLowerCase().includes(searchQuery.toLowerCase().trim())) {
          categories.push(category)
        }
        else {
          const tempItems = []
          for(let i =0; i<category.items.length; i++) {
            if(category.items[i].itemName.toLowerCase().includes(searchQuery.toLowerCase().trim()))
              tempItems.push(category.items[i])
          }
          category.items = tempItems
          if(tempItems.length>0)
          {
            categories.push(category)
          }
        }
      });
      tempRestaurantDetails.menu.categories = categories
      setRestaruarntDetails(tempRestaurantDetails)
    }
  }, [props.restaurantDetails, searchQuery])

  // const searchDish = (e) => {
    
  // }

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
    
    <div style={{textAlign: "center"}}>
      <input type='text' name='search-restaurant' className='form-input' placeholder='Search Menu' onKeyUp={e => setSearchQuery(e.target.value)} ></input>
    </div>

    <br></br>
    <div>
      {restaurantDetails.menu.categories.map((element, key) => {
            return element.title!== "" ?  (
            
            <div key={key}>
            <h2>{element.title}</h2>
            

            {
              element.items.length >0 ?
               (<div>
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
               </div>): 
                (
                  <div>
                    
                  </div>
                  ) 
            }
            
          
          </div>):<div key={key}></div>
          
        })}  
    </div>
    </div>
  )

}

export default PreviewRestaurantMenu