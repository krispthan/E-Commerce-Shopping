import React from 'react'
import './sign-in.style.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render () {
    return (
      <div className='sign-in'>
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            label='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            label='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}
export default SignIn
