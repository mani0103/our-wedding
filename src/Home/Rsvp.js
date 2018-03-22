import React, { Component } from 'react';

//const CSSTransitionGroup = React.addons.CSSTransitionGroup;

class PeopleList extends Component {
  constructor() {
    super();

    this.state = {
      item: "",
      itemList: ["Sasha Tran", "Jenn", "Stephanie"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.removePeople = this.removePeople.bind(this);
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

    this.setState({
      itemList: newList
    });
  }

  render() {
    const { item, itemList, disabled } = this.state;
    return (
      <div className="container">
        <h2> RSVP List </h2>
        <h5> Add your name to the list </h5>
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
          <h2> Attendee List </h2>
          <h5>{itemList.length} awesome people attending</h5>
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

          {this.props.itemList.map(function(item, index) {
            return (
              <li key={index} className="list-item">
                {item}
                <div
                  className="close"
                  onClick={props.removePeople.bind(null, index)}
                >
                  -
                </div>
              </li>
            );
          })}
      </div>
    );
  }
}

export default PeopleList;

