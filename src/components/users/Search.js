import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({setAlert}) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('')

  const onChange = (event) => {
    setText(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <div class="row" style={bannerStyles}>
            <img src="images/github.png" style={{width: "40%"}} />
            <h1>Search any username you'd like to find on Github.</h1>
            <input 
            type="text" 
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
            style={{width:'70%'}}
            />
            <input 
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
            style={{width:'70%'}} />
          </div>
        </form>
        {githubContext.users.length > 0 && (
          <button 
            className="btn btn-light btn-block" 
            onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </div>
    )
  }

  const bannerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

export default Search
