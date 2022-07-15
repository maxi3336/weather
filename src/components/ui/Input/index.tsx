import { FC, InputHTMLAttributes } from 'react'

const defaultClassName =
  'border rounded-md px-4 py-2 outline-none focus:border-sky-400'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => <input className={`${className} ${defaultClassName}`} {...props} />
