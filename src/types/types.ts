import { ReactElement, ElementType, InputHTMLAttributes } from 'react'

export type genericObject = {
  [key: string]: string
}

type operations = "=="|"<"|">"|"!="|"<="|">="

export type MsgHTML = string | ReactElement | Function

export type WhenArray = [string, operations, any]

export type ValueType = string|number

export interface IStructureObject extends InputHTMLAttributes<HTMLInputElement> {
  component?: ElementType
  name?: string
  default?: ValueType
  when?: WhenArray
  submit?: InputWithValue
}

export interface InputWithValue extends InputHTMLAttributes<HTMLInputElement> {
  value?: ValueType
}

export interface IFormBuilder {
  state: any
  setState: Function
  structure: {
    [key: string]: IStructureObject
  }
  events: {
    submit: Function
    change?: Function
  }
  components?: {
    input?: ReactElement
  },
  errors?: {
    [key: string]: string
  }
}
