// == Import npm
import React from "react";

function Repo({ owner, owner_url, name, description, created_at, url, owner_avatar_url }) {
  return (
    <div className="repo">
      <a className="repo" href={url}> {name} </a>(<a className="repo__owner" href={owner_url}> {owner} </a>)
      <div className="repo__description"> description : {description} </div>
      <div className="repo__created_at"> created_at : {created_at} </div>
      <img src={owner_avatar_url} width="100px" />
    </div>
  );
}

export default Repo;
