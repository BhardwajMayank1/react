import React from 'react'

const RightCardContent = (props) => {
    console.log(props.color)
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 font-semibold flex justify-center items-center text-2xl '>{props.id+1}</h2>
        <div>
            <p className='text-l leading-normal text-white mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatem debitis? Alias voluptas nam quis</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default RightCardContent
