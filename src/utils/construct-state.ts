import { IStructureObject, genericObject } from "../types/types"

// Check for fieldset type structure elements and generate a state object using that
// <groupingID>--<structureKEY>

const constructState = (structure: {
  [key: string]: IStructureObject
}): genericObject => {
  let state = {}

  Object.keys(structure).forEach((key) => {
    state[key] = structure[key].default
  })

  return state
}

export default constructState
