import { Link, useNavigate } from "react-router-dom"
import { data } from "../../../utils/helpers/navBar/menu"
import { navigateToElement } from "../../../utils/helpers/navigateToElement/navigateToElement"

const Links = () => {
  const navigate = useNavigate()
  
  return (
    <div className='flex gap-x-12'>
      {data.map((item) => {
        return <Link to={`/${item.link}`} onClick={() => item.name === "Services" && navigateToElement(navigate, "services")} key={`${item.name}`} className='text-sm font-medium no-underline text-white hover:opacity-25 !important'>{item.name}</Link>
      })}
    </div>
  )
}

export default Links