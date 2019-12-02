import React, { HTMLAttributes, ReactElement } from 'react';

const Input = (props: HTMLAttributes<HTMLInputElement>): ReactElement => {
  return (
    <input {...props} />
  )
}

export default Input
