import { ContainerInput } from './style'
import { InputHTMLAttributes } from 'react'
import 'react-icons'

interface type_input_props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: type_input_props) {
  return (
    <ContainerInput>
      <input {...rest} />
    </ContainerInput>
  )
}
