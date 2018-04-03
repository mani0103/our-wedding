import React, { Component } from 'react';
import './Rsvp.css';
import './CustomCheckBox.css'
import fire from '../fire';
import LocalizedText  from '../Translations/LocalizedText';
import {Button} from 'react-bootstrap';

//const CSSTransitionGroup = React.addons.CSSTransitionGroup;


const db = fire.database();
const dbref = db.ref();

class PeopleList extends Component {
  constructor() {
    super();

    this.state = {
      Guest: "",
      GuestList: [],
      comment: "",
      comments: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onGuestAdd = this.onGuestAdd.bind(this);
    this.removePeople = this.removePeople.bind(this);
    this.checkMealPreferneces = this.checkMealPreferneces.bind(this);
    this.sendComment = this.sendComment.bind(this);
    
    
  }

  componentDidMount() {
    dbref.child('rsvp').once('value',(data) => {
      this.setState(
        {
          GuestList: 
            data.val()[this.props.user.uid] && data.val()[this.props.user.uid].guests ? 
            data.val()[this.props.user.uid].guests : 
            [],
          comments: 
            data.val()[this.props.user.uid] && data.val()[this.props.user.uid].comments ? 
            data.val()[this.props.user.uid].comments : 
            []
        }
      );
      //console.log(data)
    })
  }

  handleChange(propertyName, value) {
    this.setState({
        [propertyName]: value,
    })
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

  sendComment(e) {
    let newComments = [...this.state.comments, this.state.comment];

    var updates = {};
    updates[`/rsvp/${this.props.user.uid}/comments`] = newComments;
    dbref.update(updates);

    this.setState({
      comments: newComments,
      comment: ''
    })
  }

  render() {
    const { Guest, GuestList, disabled } = this.state;
    return (
      <div className="rsvp-list">
        <h1> <LocalizedText stringUN='rsvpList' {...this.props}/> </h1>
        <h2> <LocalizedText stringUN='addYourNameToTheList' {...this.props}/> </h2>
        <div className="flex-wrapper">
          <form className="form-container">
            <input type="text" onChange={(e) => this.handleChange('Guest', e.target.value)} value={Guest} />
            <button
              className="add-guest"
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
            <div className="comment-section">
              
              <label className="comment-label" htmlFor="comment" >Comments</label>
              {this.state.comments.map((comment) => <div key={comment.key}>{comment}</div>)}    
              <textarea 
                id="comment" 
                rows="5" 
                cols="60" 
                name="comment" 
                form="usrform" 
                onChange={(e) => this.handleChange('comment', e.target.value)}
                value={this.state.comment}
                placeholder="Enter your comments here..."
              />
              <Button className='' onClick={this.sendComment}>Send</Button>
            </div>
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
                <label htmlFor={`${index}`}>Vegetarian/Food Allergy</label>
              </div>
            );
          })
    );
  }
}

export default PeopleList;

