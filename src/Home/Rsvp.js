import React, { Component } from 'react';
import './Rsvp.css';
import './CustomCheckBox.css'
import fire from '../fire';
import LocalizedText  from '../Translations/LocalizedText';

//const CSSTransitionGroup = React.addons.CSSTransitionGroup;


const db = fire.database();
const dbref = db.ref();

class PeopleList extends Component {
  constructor() {
    super();

    this.state = {
      Guest: "",
      GuestList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onGuestAdd = this.onGuestAdd.bind(this);
    this.removePeople = this.removePeople.bind(this);
    this.checkMealPreferneces = this.checkMealPreferneces.bind(this);
    
  }

  componentDidMount() {
    dbref.child('rsvp').once('value',(data) => {
      this.setState(
        {
          GuestList: 
            data.val()[this.props.user.uid] && data.val()[this.props.user.uid].guests ? 
            data.val()[this.props.user.uid].guests : 
            []
        }
      );
      console.log(data)
    })
  }

  handleChange(e) {
    this.setState({
      Guest: e.target.value
    });
  }

  onGuestAdd(e) {
    e.preventDefault();
    var name = this.state.Guest;
    var newList = [...this.state.GuestList, 
      {
        name: name,
        mealPreferneces: false,
      }
    ];

    var updates = {};
    updates[`/rsvp/${this.props.user.uid}`] = {
      uid: this.props.user.uid,
      userEmail: this.props.user.email,
      guests: newList
    };
    dbref.update(updates);

    this.setState({
      GuestList: newList,
      Guest: ""
    });
  }

  removePeople(index) {
    const { GuestList } = this.state;
    let newList = GuestList.filter(function(_Guest) {
      return GuestList.indexOf(_Guest) != index;
    });

    var updates = {};
    updates[`/rsvp/${this.props.user.uid}`] = {
      uid: this.props.user.uid,
      userEmail: this.props.user.email,
      guests: newList
    };
    dbref.update(updates);

    this.setState({
      GuestList: newList
    });
  }

  checkMealPreferneces(index){
    let newList  = this.state.GuestList;
    newList[index].mealPreferneces = !newList[index].mealPreferneces;
    this.setState({
      GuestList: newList
    });
  }

  render() {
    const { Guest, GuestList, disabled } = this.state;
    return (
      <div className="rsvp-list">
        <h1> <LocalizedText stringUN='rsvpList' {...this.props}/> </h1>
        <h2> <LocalizedText stringUN='addYourNameToTheList' {...this.props}/> </h2>
        <div className="flex-wrapper">
          <form className="form-container">
            <input type="text" onChange={this.handleChange} value={Guest} />
            <button
              type="submit"
              onClick={this.onGuestAdd}
              disabled={Guest.length > 0 ? false : true}
            >
              +
            </button>
          </form>
        </div>
        <div className="display-list">
          
          {GuestList[0] && <h3><LocalizedText stringUN='awesomePeopleAttending' {...this.props}/></h3>}
          <div className="people-list">
            <RenderPeople
              GuestList={GuestList}
              removePeople={this.removePeople}
              checkMealPreferneces={this.checkMealPreferneces}
            />
            <label className="comment-label" htmlFor="comment" >Comments</label>
            <textarea id="comment" rows="10" cols="60" name="comment" form="usrform">Enter text here  ...</textarea>
          </div>
        </div>
      </div>
    );
  }
}

class RenderPeople extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
          this.props.GuestList.map((Guest, index) => {
            //console.log(Guest);
            return (
              <div key={index}>
                <div  className="list-Guest">
                  {Guest.name}
                  <div
                    className="close"
                    onClick={props.removePeople.bind(null, index)}
                  >
                    -
                  </div>
                </div>             
                <input id={`${index}`} type="checkbox" checked={Guest.mealPreferneces} onChange={props.checkMealPreferneces.bind(null, index)}/>
                <label htmlFor={`${index}`}>Meal preference</label>
              </div>
            );
          })
    );
  }
}

export default PeopleList;

