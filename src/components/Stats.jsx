import React from 'react'

const Stats = ({numItems, numPackedItems,packPercentage}) => {
  return (
    <footer style={{position: "relative",bottom:"0px", width: "100vw"}} className='stats'>
       
          {packPercentage === 100 ? <em>You are all set to go!✈️</em> : <em>You have {numItems} items on your list, and you already packed {numPackedItems} ({packPercentage}%) items</em> }
        
       
    </footer>
  )
}

export default Stats