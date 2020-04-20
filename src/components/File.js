import React from 'react';

import { ReactComponent as PdfIcon } from '../media/pdf.svg';
import { ReactComponent as DocxIcon } from '../media/word.svg';

import '../style/master.css'
import '../style/Folder.css'

class Folder extends React.Component {

  constructor() {
    super();
    this.icons = {
      'pdf': <PdfIcon />,
      'docx': <DocxIcon />,
    }
  }
  

  render() {
    return (
      <div className="column folder-box">
        <div className="row folder" onClick={this.props.handleClick}>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">{ this.icons[this.props.icon] }</a>
        </div>
        <div className="row">
          <span className="caption">{this.props.caption}</span>
        </div>
      </div>
    )
  }
}

export default Folder;