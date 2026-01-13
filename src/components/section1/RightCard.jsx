import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color)
  return (
    <div className='h-full overflow-hidden shrink-0 relative w-60 bg-red-500 rounded-4xl  ' >
     <img className='h-full w-full object-cover' src={props.img} alt="" srcSet="" />
     < RightCardContent id={props.id} tag={props.tag} color={props.color}/> 
    </div>
  )
}

export default RightCard
