import React from 'react'
const FormValidation = () => {
  return (
    <>
      <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className='login'>
          <h2 className='mb-3'>Login Form</h2>
          <form className='needs-validation'>
            <div className='form-group was-validated mb-2'>
              <label htmlFor="email" className='form-label'>Email Address</label>
              <input type="email" className='form-control'required></input>
              <div className='invalid-feedback'>
                Please Enter you email
              </div>
            </div>
            <div className='form-group was-validated mb-2'>
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password"  className='form-control' required></input>
              <div className='invalid-feedback'>
                Please Enter you password
              </div>
            </div>
            <div className='form-group form-check mb-2'>
              <label htmlFor="checkbox" className=" abs form-check-input">Remember me</label>
              <input type="checkbox"  className="form-check-input" ></input>
            </div>
            <button type='submit' className='  btn btn-success w-100 mt-2'>SIGN IN</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default FormValidation
