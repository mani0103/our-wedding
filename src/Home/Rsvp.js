import React, { Component } from 'react';
import './Rsvp.css';
import fire from '../fire';
import LocalizedText  from '../Translations/LocalizedText';
import { Checkbox } from 'react-bootstrap';
//const CSSTransitionGroup = React.addons.CSSTransitionGroup;


const db = fire.database();
const dbref = db.ref();

class PeopleList extends Component {
  constructor() {
    super();

    this.state = {
      item: "",
      itemList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.removePeople = this.removePeople.bind(this);
  }

  componentDidMount() {
    dbref.child('rsvp').once('value',(data) => {
      this.setState(
        {
          itemList: 
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
      item: e.target.value
    });
  }

  onSubmitForm(e) {
    e.preventDefault();
    var text = this.state.item;
    var newList = this.state.itemList.concat(text);

    var updates = {};
    updates[`/rsvp/${this.props.user.uid}`] = {
      uid: this.props.user.uid,
      userEmail: this.props.user.email,
      guests: newList
    };
    dbref.update(updates);

    this.setState({
      itemList: newList,
      item: ""
    });
  }

  removePeople(index) {
    const { itemList } = this.state;
    let newList = itemList.filter(function(_item) {
      return itemList.indexOf(_item) != index;
    });

    var updates = {};
    updates[`/rsvp/${this.props.user.uid}`] = {
      uid: this.props.user.uid,
      userEmail: this.props.user.email,
      guests: newList
    };
    dbref.update(updates);

    this.setState({
      itemList: newList
    });
  }

  render() {
    const { item, itemList, disabled } = this.state;
    return (
      <div className="rsvp-list">
        <h1> <LocalizedText stringUN='rsvpList' {...this.props}/> </h1>
        <h2> <LocalizedText stringUN='addYourNameToTheList' {...this.props}/> </h2>
        <div className="flex-wrapper">
          <form className="form-container">
            <input type="text" onChange={this.handleChange} value={item} />
            <button
              type="submit"
              onClick={this.onSubmitForm}
              disabled={item.length > 0 ? false : true}
            >
              +
            </button>
          </form>
        </div>
        <div className="display-list">
          
          <h3><LocalizedText stringUN='awesomePeopleAttending' {...this.props}/></h3>
          <div className="people-list">
            <RenderPeople
              itemList={itemList}
              removePeople={this.removePeople}
            />
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
      <div>
        {/*<CSSTransitionGroup
          transitionName="list-anim"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >*/}
          {this.props.itemList.map(function(item, index) {
            return ([
              <li key={index} className="list-item">
                {item}
                <div
                  className="close"
                  onClick={props.removePeople.bind(null, index)}
                >
                  -
                </div>
              </li>,
               <div class="exp" key={item}>
                <div class="checkbox">
                  <form>
                    <div>
                      <input type="checkbox" id="check" name="check" value="" />
                      <label for="check">
                        <span></span>
                        Checkbox
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            ]);
          })}
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        {/* </CSSTransitionGroup> */}
      </div>
    );
  }
}

export default PeopleList;

