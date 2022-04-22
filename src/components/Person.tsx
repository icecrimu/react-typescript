import { FC } from "react"

interface IPersonProps {
  email: string
  name: string
  age?: number
}

export const Person: FC<IPersonProps> = ({ email, name, age }) => {
  return (
    <div>
      <h1>{email}</h1>
      <h1>{name}</h1>
      <h1>Age:{age}</h1>
    </div>
  )
}
