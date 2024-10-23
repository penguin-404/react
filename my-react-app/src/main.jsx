import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    
    <h1>Hello Duniya</h1>
    
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com/',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <h1>Hello there</h1>
)

const username = "kaushal";

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com/',target:'_blank'},'Click me to visit google',username
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement

)
