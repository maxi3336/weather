import { ButtonHTMLAttributes, FC } from 'react'

const defaultClassName =
  'border rounded-md bg-sky-200 text-gray-600 py-1 px-4 hover:bg-sky-300 transition-colors'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button className={`${className} ${defaultClassName}`} {...props}>
    {children}
  </button>
)
