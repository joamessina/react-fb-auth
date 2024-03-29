import {useState} from 'react'
import {useAuth} from '../context/authContext'
import {useNavigate} from 'react-router-dom'

export function Register() {

  const [user, setuser] = useState({
    email: '',
    password: '',
  })

  const {signup} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target : {name, value }}) => {
    setuser({...user ,[name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      
      await signup(user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="youremail@mail.com"
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" 
          onChange={handleChange}
        />
        
        <button>Register</button>
      </form>
    </div>
  )
}
