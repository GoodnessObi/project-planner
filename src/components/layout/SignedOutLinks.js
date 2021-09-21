import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/" className="">Login</NavLink>
      </li> 
    </ul>
  )
}

export default SignedOutLinks;