import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import logoSrc from '../../assets/alogo-1.svg'
import { AiOutlinePlus } from 'react-icons/ai'

const Header = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between px-4 shadow">
      <img src={logoSrc} alt="logo" className="h-16" />
      <span className="font-medium ">Social App</span>
      <Link to={'/create'}>
        <Button label="Add Post" icon={<AiOutlinePlus />} />
      </Link>
    </nav>
  )
}

export default Header
