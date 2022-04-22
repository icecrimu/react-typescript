import React, { FC } from "react"
import "./App.css"
import { Person } from "./components/Person"

const App: FC = () => {
  return (
    <div className="App">
      <Person email="sample@gmail.com" name="Charles" />
    </div>
  )
}

export default App
