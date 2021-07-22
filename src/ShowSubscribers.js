import React, {Component} from 'react';
import './ShowSubscribers.css';
import Header from './Header.js';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {


  // constructor()
  // {
  //   super();

  //   this.state = {
  //     subscriberListToShow: []
  //   }
  // }

  // componentDidMount()
  // {
  //   let newSubscriber = {
  //     id: 1,
  //     name: 'Prateek gupta',
  //     phone: '6736432799'
  //   }

  //   let subscriberList = this.state.subscriberListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscriberListToShow: subscriberList});
  // }

  onDeleteHandler = (subscriberID) => {
    this.props.deleteSubscriberHandler(subscriberID);
  }

  render() {


    return (
       <div className = 'component-container'>
          <Header heading = "Phone Directory"/>
          <div className = 'component-body-container'>
            <Link to = "/add"><button className = "custom-btn add-btn">ADD</button></Link>

          <div className='grid-container heading-container'>
            <span className = 'grid-item name-heading'>Name</span>
            <span className = 'grid-item phone-heading'>Phone</span>
          </div>

        {
          this.props.subscriberList.map(sub => {
            return <div key= {sub.id} className='grid-container'>
            <span className = 'grid-item grid-name'>{sub.name}</span>
            <span className = 'grid-item grid-phone'>{sub.phone}</span>
            <button className = "custom-btn delete-btn" onClick = {this.onDeleteHandler.bind(this, sub.id)}>DELETE</button>

            </div>
            
          })
        }
          
          
      </div>
      </div>
    );
  }
}

export default ShowSubscribers;


