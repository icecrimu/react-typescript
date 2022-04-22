import React, { FC, createContext } from "react"
import "./App.css"
import { Person, HairColor } from "./components/Person"

interface AppContextInterface {
  name: string
  age: number
  country: string
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Charles",
    age: 22,
    country: "Philippines"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          email="sample@gmail.com"
          name="Charles"
          hairColor={HairColor.Pink}
        />
      </div>
    </AppContext.Provider>
  )
}

export default App
