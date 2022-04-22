import { ChangeEvent, FC, useState } from "react"

export enum HairColor {
  Blonde = "Your hair is blond, good for you",
  Brown = "Cool hair color",
  Pink = "Wow that is so cool"
}
interface IPersonProps {
  email: string
  name: string
  age?: number
  hairColor: HairColor
}

export const Person: FC<IPersonProps> = ({ email, name, age, hairColor }) => {
  const [country, setCountry] = useState<string | null>("")

  type NameType = "Joe" | "Jane"
  const nameForType: NameType = "Jane"

  console.log(nameForType)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  return (
    <div>
      <h1>{email}</h1>
      <h1>{name}</h1>
      <h1>Age:{age}</h1>

      <input placeholder="Write down your country..." onChange={handleChange} />
      {country}
      {hairColor}
    </div>
  )
}
