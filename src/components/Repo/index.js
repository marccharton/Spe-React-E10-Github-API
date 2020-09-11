// == Import npm
import React from "react";

import './styles.scss';

function Repo({ owner, owner_url, name, description, created_at, url, owner_avatar_url }) {
  return (
    <div className="repo">
      <img className="repo__img" src={owner_avatar_url} width="100px" />
      
      <div className="repo_informations">

         <div className="repo__name"> <a href={url}> {name} </a> </div>
        <div className="repo__owner"> <a href={owner_url}> {owner} </a> </div>
        <div className="repo__description"> {description} </div>
        <div className="repo__created_at"> {created_at} </div>
      
      </div>
    </div>
  );
}

export default Repo;
