import React, { Component } from 'react';
import { TRANSLATIONS } from './Translations'

class LocalizedText extends Component {

  
  render() {
    return(
      <span>
        { 
          TRANSLATIONS[this.props.stringUN] && TRANSLATIONS[this.props.stringUN][this.props.lang] ? 
          TRANSLATIONS[this.props.stringUN][this.props.lang] : 
          this.props.stringUN
        }
      </span>
    )
  }
}

export default LocalizedText;