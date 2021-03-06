import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup" className="">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="">Login</NavLink>
      </li> 
    </ul>
  )
}

export default SignedOutLinks;