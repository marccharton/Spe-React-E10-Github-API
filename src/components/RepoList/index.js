// == Import npm
import React from 'react';

// == Import
//import './styles.scss';

// == Composants
import Repo from 'src/components/Repo';

const RepoList = ({repoList}) => {
  return (
    <div className="repoList">
      {
        repoList.map((repo) => {
          return <Repo key={repo.name} {...repo} />
        })
      }
    </div>
  );
};

export default RepoList;
