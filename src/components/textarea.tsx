import React, { HTMLAttributes } from 'react';

const Textarea = (props: HTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea {...props}></textarea>
  )
}

export default Textarea
