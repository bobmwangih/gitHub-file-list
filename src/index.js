import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";
import Time from './time'
const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.object.isRequired
};

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    
    {getFileName(file)}
    < CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at}/>
    </td>
  </tr>
);
FileListItem.propTypes={
  file:PropTypes.object.isRequired
}

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
  {commit.message}
  </td>
  );
  CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
  };

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
  icon = 'fa-folder';
  }
  return (
  <td className="file-icon">
  <i className={`fa ${icon}`}/>
  </td>
  );
  }
  FileIcon.propTypes = {
  file: PropTypes.object.isRequired
  };

  function getFileName(file) {
    return [
    <FileIcon file={file} key={0}/>,
    <td className="file-name" key={1}>{file.name}</td>
    ];
    }
const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme"
    }
  }
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
