import React, { FC } from "react"
import "./App.css"
import { Person, HairColor } from "./components/Person"

const App: FC = () => {
  return (
    <div className="App">
      <Person
        email="sample@gmail.com"
        name="Charles"
        hairColor={HairColor.Pink}
      />
    </div>
  )
}

export default App
