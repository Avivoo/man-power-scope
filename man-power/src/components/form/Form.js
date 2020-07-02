import React from 'react'
import "./Form.css"

function Form() {
    return (
      <div className="container-fluid bg">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form className="form-container" >
            <strong>Form Name</strong>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Input Lable</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
               
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Input Lable</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit button
            </button>
            {/* <div>
              not a member ? <Link to="/RegistrationPage">Sign Up</Link>
            </div> */}
          </form>
        </section>
      </section>
    </div>
    )
}

export default Form
