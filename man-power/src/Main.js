import React from "react";
import  { Route,Switch } from "react-router-dom";
import Login from "../src/Auth/login/Login";
import Profile from "../src/pages/emlpyeeScreen/profile/Profile";
import WorkFeed from "../src/pages/emlpyeeScreen/workFeed/workFeed";
import CreateNewPost from "../src/pages/employerScreen/works/createNewPost/CreateNewPost";
import Post from "../src/pages/employerScreen/works/post/Post";
import PostsHistory from "../src/pages/employerScreen/works/postsHistory/PostsHistory";
import ApprovedWorkers from "../src/pages/employerScreen/works/approvedWorkers/ApprovedWorkers";
import ControlPanel from "../src/pages/employerScreen/controlPanel/ControlPanel";

function Main() {
  return (
    <Switch>
      <Route path="/Login" component={Login} />
      <Route path="/Profile" component={Profile} />
      <Route path="/WorkFeed" component={WorkFeed} />
      <Route path="/CreateNewPost" component={CreateNewPost} />
      <Route path="/Post" component={Post} />
      <Route path="/PostsHistory" component={PostsHistory} />
      <Route path="/ApprovedWorkers" component={ApprovedWorkers} />
      <Route path="/ControlPanel" component={ControlPanel} />
    </Switch>
  );
}

export default Main;
