import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='pt-6 pb-15 flex items-center gap-10 h-[90vh] px-18'>
        <LeftContent />
        <RightContent user={props.user} />
      
    </div>
  )
}

export default Page1content
