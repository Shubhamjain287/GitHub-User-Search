import React from "react";

const GitHubInfo = ({userData}) => {
  return (
    <>
      <div className="col-md-8 GitHubInfo">
        <div className="card">
          <div className="card-header profile-info">
          <button type="button" className="btn btn-danger btn-sm">
  Followers <span className="badge badge-light">{userData.followers}</span>
</button>
<button type="button" className="btn btn-primary btn-sm">
  Following <span className="badge badge-light">{userData.following}</span>
</button>
<button type="button" className="btn btn-dark btn-sm">
Repository <span className="badge badge-light">{userData.public_repos}</span>
</button>
<button type="button" className="btn btn-success
 btn-sm">
Gists <span className="badge badge-light">{userData.public_gists}</span>
</button>
          </div>
          <div className="card-body SJain">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name - {userData.name} </li>
              <li className="list-group-item"> User Name - {userData.login} </li>
              <li className="list-group-item"> Email -  {userData.email}</li>
              <li className="list-group-item"> Blog - <a href={userData.blog} target="_Shubham">{userData.blog}</a></li>
              <li className="list-group-item"> Member Since - {userData.created_at}</li>
              <li className="list-group-item"> Profile URL - <a href={userData.html_url} target="_Shubham">{userData.html_url}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GitHubInfo;
