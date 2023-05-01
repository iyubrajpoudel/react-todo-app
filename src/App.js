import React from 'react'
import Home from './pages/home/Home'
import { TasksDataProvider } from './contexts/TasksContext'

const App = () => {
  return (
    <>
      <TasksDataProvider>
        <Home />
      </TasksDataProvider>
    </>
  )
}

export default App