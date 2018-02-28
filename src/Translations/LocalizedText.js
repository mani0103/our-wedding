import React, { Component } from 'react';
import { TRANSLATIONS } from './Translations'

class LocalizedText extends Component {

  
  render() {
    return(
      <p>{ TRANSLATIONS[this.props.stringUN][this.props.lang] ? TRANSLATIONS[this.props.stringUN][this.props.lang] : this.props.stringUN}</p>
    )
  }
}

export default LocalizedText;