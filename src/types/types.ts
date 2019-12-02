import { ReactElement, HTMLAttributes, ElementType } from 'react'

export type genericObject = {
  [key: string]: string
}

type operations = "=="|"<"|">"|"!="|"<="|">="

export type MsgHTML = string | ReactElement | Function

export type WhenArray = [string, operations, any]

export type ValueType = string|number|boolean

export interface IStructureObject extends HTMLAttributes<HTMLInputElement> {
  when?: WhenArray
  component: ElementType
  name: string
  default: ValueType
}

export type InputWithValue = HTMLAttributes<HTMLInputElement> & {
  value?: ValueType
}

export interface IFormBuilder {
  structure: {
    [key: string]: IStructureObject
  }
  events: {
    submit: Function
    change: Function
  }
  components?: {
    input: ReactElement
  },
  errors?: {
    [key: string]: string
  }
}
