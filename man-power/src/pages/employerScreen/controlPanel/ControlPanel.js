import React from "react";
import "./ControlPanel.css";
import { Link } from "react-router-dom";
function ControlPanel() {
  return (
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6 mt-5">
          <div class="panel panel-primary mt-5">
            <div class="panel-heading">
              <h3 class="panel-title">
                <span class="glyphicon glyphicon-bookmark"></span> Employer
                Control Panel
              </h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xs-6 col-md-6">
                  <Link
                    to="CreateNewPost"
                    class="btn btn-danger btn-lg mr-2"
                    role="button"
                  >
                    <span class="glyphicon glyphicon-list-alt"></span> <br />
                    Add New Post
                  </Link>
                  <Link
                    to="OpenPosts"
                    class="btn btn-warning btn-lg"
                    role="button"
                  >
                    <span class="glyphicon glyphicon-bookmark"></span> <br />
                    Open Posts
                  </Link>
                </div>
                <div class="col-xs-6 col-md-6">
                  <Link
                    to="PostsHistory"
                    class="btn btn-success btn-lg mr-2"
                    role="button"
                  >
                    <span class="glyphicon glyphicon-user"></span> <br />
                    Posts History
                  </Link>
                  <Link to="workFeed" class="btn btn-info btn-lg" role="button">
                    <span class="glyphicon glyphicon-file"></span> <br />
                    Work Feed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
