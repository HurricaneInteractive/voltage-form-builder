import Message from "../components/message"
import { HTMLAttributes } from "react"
import { MsgHTML } from "../types/types"

const msg = (html: MsgHTML, props: HTMLAttributes<HTMLDivElement> = {}) => {
  return {
    typeof: 'msg',
    component: Message,
    html,
    ...props
  }
}

export default msg
