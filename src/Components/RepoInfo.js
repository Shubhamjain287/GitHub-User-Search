import React, { useEffect, useState } from "react";
const RepoInfo = ({userData}) => {

  const url = userData.repos_url;
  const [Repo, setRepo] = useState([]);

  useEffect(() => {
    const fetchRepo = async () => {
      try{
        const res = await fetch(url) ;
        const data = await res.json();
        setRepo(data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchRepo();
  }, [url]);

  return (
    <>
      <div className="col-12 RepoInfo">
        <div className="card">
          <h2 className="card-header Heading">GitHub Repository</h2>
          <div className="card-body">
            <ul className="list-group list-group-flush">
                {
                  Repo.map((ele) => {
                    return (
                     <div className="Repos">
                      <li className="list-group-item ">Repository - {ele.name} 
                      <button type="button" className="btn btn-primary btn-sm button"><a href={ele.html_url} className="badge badge-primary" target="_Shubham">Visit</a></button>
                      <button type="button" className="btn btn-dark btn-sm"> Watches <span className="badge badge-light">{ele.watchers_count} </span></button>
                      </li>
                      </div>
                    )
                  })
                }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoInfo;
