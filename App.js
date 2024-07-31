import React from 'react'

export const App = () => {

const arr = [
  {
    name:"john",
    age:"24",
    email:"john@gmail.com"
  },
  {
    name:"jack",
    age:"28",
    email:"jack@gmail.com"
  },
  {
    name:"kavin",
    age:"15",
    email:"kavin@gmail.com"
  },

]

  return (
    <div className='container'>
      {
        arr.map((data,index)=>{
          return(
            <div key={index}>
              <div>
                <span>{data.name}</span>
                <span>{data.email}</span>
                </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
