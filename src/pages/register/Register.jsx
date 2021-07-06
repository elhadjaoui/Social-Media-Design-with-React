import './register.css'

const Register = () => {
    return (
        <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <h3 className="registerLogo">Lamasocial</h3>
            <span className="registerDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <div className="registerRight">
            <div className="registerBox">
              <input  type="email" placeholder="Email" className="registerInput" />
              <input  type="password" placeholder="Password" className="registerInput" />
              <input  type="password" placeholder="Confirm Password" className="registerInput" />
              <button className="registerButton">Register</button>
              <button className="loginButton">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register
