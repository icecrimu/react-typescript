import { ChangeEvent, FC, useState } from "react"

interface IPersonProps {
  email: string
  name: string
  age?: number
}

export const Person: FC<IPersonProps> = ({ email, name, age }) => {
  const [country, setCountry] = useState<string | null>("")

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
    </div>
  )
}
