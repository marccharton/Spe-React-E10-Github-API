// == Import npm
import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from "moment";

// == Import
import './styles.scss';
import github_logo from 'src/assets/img/logo-github.png';

// Components
import SearchBar from 'src/components/SearchBar';
import RepoList from 'src/components/RepoList';
import MessageBox from 'src/components/MessageBox';

function GithubFinder() {
  
  let [search, setSearch] = useState("gringe");
  let [repoList, setRepoList] = useState([]);
  let [message, setMessage] = useState({});
  let [count, setCount] = useState(0);

  const searchBarMethods = {
    launchSearch: () => {
      axios({
        url: "https://api.github.com/search/repositories?q=" + search,
        method: "GET"
      })
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setCount(data.total_count);
          return data.items;
        })
        .then((items) => {
          console.log(items);
          return items.map((item) => ({
            owner : item.owner.login,
            owner_url: item.owner.html_url,
            owner_avatar_url: item.owner.avatar_url,
            name: item.name,
            description: item.description,
            created_at: moment(item.created_at).format("MMM Do YY"),
            url: item.clone_url,
          }));
        })
        .then((repoList) => {
          setRepoList(repoList);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    setSearch: setSearch
  }
  
  useEffect(() => {
      setMessage({
        content : "wesh wesh les amis",
        type: "pouet"
      });
  }, []);

  return (
    <div className="githubFinder">
      <img src={github_logo} alt="github_logo"/>
      <SearchBar search={search} {...searchBarMethods} />
      <MessageBox {...message} count={count} />
      <RepoList repoList={repoList} />
    </div>
  );
};

export default GithubFinder;
