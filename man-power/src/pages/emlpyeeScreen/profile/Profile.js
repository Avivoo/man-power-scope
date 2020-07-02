import React from 'react'

function Profile() {
    return (
        <div className="container">
      <h3 className="pb-3 mb-4 font-italic border-bottom">Worker Profile</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250 moshe">
            <div className="card-body d-flex flex-column align-items-start ">
              <strong className="d-inline-block mb-2 ">
                JSX Worker Name
              </strong>
              <h6 className="mb-0">
                <i className="text-dark">
                  <p>
                    <i classNameName="icon-phone"></i> JSX PHONE NUMBER <br />
                    <i classNameName="icon-globe"></i> JSX PREFERRED WORK <br />
                    <i classNameName="icon-gift"></i> JSX AGE
                  </p>
                </i>
              </h6>
              <div className="mb-1 text-muted small">A few words about me</div>
              <p className="card-text mb-auto">
                dischared from combat unit and ready to put my ass to work everyday in those hard jobs
              </p>
            </div>
            <img
              className="card-img-right flex-auto  d-lg-block"
              alt="workers pic"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHMu1vog-qS-A/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=ZxGjjFJc-Q2EPYvZXZnn6E-LO-shCRuucDB-nzdKV9s"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile
