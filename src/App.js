import './App.css';
import { useEffect, useState } from 'react';
import GithubProfile from './Components/GithubProfile';
import GitHubInfo from './Components/GitHubInfo';
import RepoInfo from './Components/RepoInfo';
import Footer from './Components/Footer';

function App() {

  const [username, setUsername] = useState("Shubhamjain287");
  const [user , setUser] = useState("");  

  const fetchDetail = async (userSearch) => {
      try{
        const res = await fetch(`https://api.github.com/users/${userSearch}`);
        const data = await res.json();
        if(res.status===404){
          window.alert(`User Not Found`);
        }
        else{
          setUser(data);
        }
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
      fetchDetail(username);
    }, []);
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDetail(username);
  }

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand mx-2"> GitHub User Search </a>
    <span className="navbar-text mx-1">
       By Shubham Jain
    </span>
</nav>

<div className="col-12 container SJ">
        <div className="card">
          <h2 className="card-header Heading">Github User Details </h2>
          <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)} className='form'>
                  <input type="text" placeholder='Enter User Name' value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <button type='submit'> Search </button>
            </form>
          </div>
        </div>
      </div>
      {
         user ? 
         <div className='container'> 
            <div className="row compo">
            <GithubProfile img={user.avatar_url} name={user.name} profileurl={user.html_url} />
            <GitHubInfo userData={user} />
            </div>
            <div className="row">
              <RepoInfo userData={user}/>
            </div>
        </div> : null
      }
      <Footer/>
    </>
  );
}

export default App;
