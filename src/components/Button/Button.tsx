import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: JSX.Element
}
const Button: FC<ButtonProps> = ({ label, icon, ...rest }) => {
  const classes = `group inline-flex gap-4 items-center justify-center px-6 py-2 border border-transparent text-sm rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`
  return (
    <button {...rest} className={classes}>
      {label}
      <span className="transition-transform duration-[250ms] ease-in-out group-hover:rotate-180">
        {icon}
      </span>
    </button>
  )
}

export default Button
