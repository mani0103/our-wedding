import React, { Component } from 'react';
import LocalizedText from '../Translations/LocalizedText';
import { TRANSLATIONS } from '../Translations/Translations'
import fire from "../fire"

const auth = fire.auth();
const db = fire.database();


class Meals extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(db.ref);
    return (
      <div/>
    );
  }
}

export default Meals;
