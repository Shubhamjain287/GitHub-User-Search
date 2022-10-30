import React from "react";

const GithubProfile = (props) => {
  return (
    <>
      <div className="col-md-3 GitHubProfile">
        <div className="card .p-card">
          <img className="card-img-top" src={props.img} alt="Profile" />
          <div className="card-body">
            <h5 className="card-title"> {props.name} </h5>
            <a
              href={props.profileurl}
              target="_Shubham"
              className="btn btn-primary"
              
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GithubProfile;
