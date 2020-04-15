import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as FolderIcon } from '../media/folder.svg';

import '../style/master.css'
import '../style/Folder.css'

class Folder extends React.Component {

  render() {
    return (
      <div className="column folder-box">
        <div className="row folder" onClick={this.props.handleClick}>
          <Link to={this.props.link}><FolderIcon /></Link>
        </div>
        <div className="row">
          <span className="caption">{this.props.caption}</span>
        </div>
      </div>
    )
  }
}

export default Folder;