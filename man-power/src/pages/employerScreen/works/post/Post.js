import React from 'react'

function Post() {
    return (
      <div className="container mt-5">
      <h1>Post JSX post name</h1>
      <div className="row mt-5">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="icon-left">
            <i className="fa fa-gavel fa-2x"></i>
          </div>
          <div className="text">
            <h4> Work Type </h4>
            <p>JSX type of work </p>
          </div>
          <br />
          <div className="icon-left">
            <i className="fa fa-location-arrow fa-2x"></i>
          </div>
          <div className="text">
            <h4> Location </h4>
            <p>JSX Location</p>
          </div>
          <br />
          <div className="icon-left">
            <i className="fa fa-calendar fa-2x"></i>
          </div>
          <div className="text">
            <h4> Date </h4>
            <p>JSX Working Date</p>
          </div>
          <br />
          <div className="icon-left">
            <i className="fa fa-leaf fa-2x"></i>
          </div>
          <div className="text">
            <h4> Requirements</h4>
            <p>Jsx Requirements</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="icon-left">
            <i className="fa fa-clock-o fa-2x"></i>
          </div>
          <div className="text">
            <h4> Working Hours </h4>
            <p>JSX Hours</p>
          </div>
          <br />
          <div className="icon-left">
            <i className="fa fa-info fa-2x"></i>
          </div>
          <div className="text">
            <h4> Description </h4>
            <p>JSX Description</p>
          </div>
          <br />
          <div className="icon-left">
            <i className="fa fa-leaf fa-2x"></i>
          </div>
          <div className="text">
            <h4> Requirements </h4>
            <p>JSX Requirements</p>
          </div>
          <br />
          <div className="icon-left">
            <i className="fa fa-money fa-2x"></i>
          </div>
          <div className="text">
            <h4> Payment </h4>
            <p>JSX Payment</p>
          </div>
        </div>
        <button className="btn btn-danger btn-block">
          <strong>Sign me In</strong>
        </button>
      </div>
    </div>
    )
}

export default Post
