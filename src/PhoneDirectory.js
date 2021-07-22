import React, {Component} from 'react';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component{

    constructor()
    {
        super();
        this.state = {
            subscriberList: [
                {
                    id:1, 
                    name: 'prateek',
                    phone: '777777777'
                },
                {
                    id: 2,
                    name: 'Ansh',
                    phone: '999999999'
                }
                
            ]
        }
    }

    deleteSubscriberHandler = (subscriberID) => {
     

        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;

        subscriberList.forEach((subscriber, index) => {
            if(subscriber.id === subscriberID)
            {
                subscriberIndex = index;
            }

        }, this);

        
        let newSubscriberList = subscriberList;
        newSubscriberList.splice(subscriberIndex, 1);
        this.setState({subscriberList: newSubscriberList})
    }   

    addSubscriberHandler = (newSubscriber) => {
        let newSubList = this.state.subscriberList;
        if (newSubList.length > 0)
        {
            newSubscriber.id = newSubList[newSubList.length - 1].id + 1;
        }
        else
        {
            newSubscriber.id = 1;
        }

        newSubList.push(newSubscriber);
        this.setState({subscriberList: newSubList})
    }

    render()
    {
        return (
            // <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
            // <ShowSubscribers  showSubscriberList = {this.state.subscriberList}/>
            <div className = 'main-container'>
                <Router>
                    <Route 
                    exact path = '/' 
                    render = {(props) => <ShowSubscribers {...props} subscriberList = {this.state.subscriberList}  deleteSubscriberHandler = {this.deleteSubscriberHandler}/>}
                    />

                    <Route 
                    exact path = '/add' 
                    render = {( {history}, props) => <AddSubscriber history = {history} {...props} addSubscriberHandler = {this.addSubscriberHandler}/>}
                    />


                </Router>
            </div>
        )
    }
}

export default PhoneDirectory;