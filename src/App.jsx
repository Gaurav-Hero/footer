// eslint-disable-next-line no-unused-vars
import React from 'react'
import UpperFooter from './components/UpperFooterPart';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Ourteam from './components/ourteam';
import Contact from './components/Contact';
import Books from './components/Books';
import Offer from './components/Offer';
import Makeup from './components/Makeup';
function App() {
  const router = createBrowserRouter([
    {
      path : "/ourteam",
      element : <Ourteam/>
    },
    {
      path : "/contact",
      element : <Contact/>
    },
    {
      path : "/books",
      element : <Books/>
    },
    {
      path : "/",
      element : <UpperFooter/>
    },
    {
      path : "/offer",
      element : <Offer/>
    },
    {
      path : "/makeup",
      element : <Makeup/>
    }
  ])
  return (
    <footer>
        <RouterProvider router={router}/>
    </footer>
  )
}

export default App
