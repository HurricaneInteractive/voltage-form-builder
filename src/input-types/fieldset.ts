import { IStructureObject } from "../types/types"
import { HTMLAttributes } from "react"

export type Fieldset = {
  structure: IStructureObject
  props: HTMLAttributes<HTMLFieldSetElement>
}

const fieldset = ({ structure, props = {} }: Fieldset) => ({
  typeof: "fieldset",
  props,
  structure,
})

export default fieldset
