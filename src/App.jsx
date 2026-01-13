import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const user=[
    {
     img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'blue',
     tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661284860596-cfec12a54758?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'green',
     tag:'underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'yellow',
     tag:'underBanked'
  }]
  return (
    <div>
    <Section1  user={user}/>
    <Section2 />
    </div>
  )
}

export default App
