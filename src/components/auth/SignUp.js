import { useState } from 'react'

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const { email, password, firstName, lastName } = state

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('>>>>', state);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" value={firstName} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" value={lastName} onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
