import Login from "./components/auth/Login.jsx"
import Signup from "./components/auth/Signup.jsx"
import Home from "./components/Home/Home.jsx"
import Jobs from "./components/Jobs/Jobs.jsx"
import Browse from "./components/Browse/Browse.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Profile from "./components/Profile/Profile.jsx"
import JobsDescription from "./components/JobsDescription/JobsDescription.jsx"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path: '/login',
    element : <Login/>
  },
  {
    path: '/signup',
    element : <Signup/>
  },
  {
    path: '/jobs',
    element : <Jobs/>
  },
  {
    path: '/description/:id',
    element : <JobsDescription/>
  },
  {
    path: '/browse',
    element : <Browse/>
  },
  {
    path : '/profile',
    element: <Profile/>
  }

])

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
