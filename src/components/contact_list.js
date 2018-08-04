import React, { Component } from 'react';
import ContactCard from './contact_card'
import contactData from '../data/contacts';

class ContactList extends Component{
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        }

    }
    render(){
        // console.log('Contents: ', this.state.contacts);
 // Next we will be using map to loop through the this.state.contacts array to build
 // a new array that holds JSX instead of the contact objects
        const list = this.state.contacts.map((item,index) => {
            // console.log('item: ', item);
            return <ContactCard key={index} firstName={item.firstName} lastName={item.lastName}/>
        });
        // return <h1>Contact List</h1>
        return <div>{list}</div>
    }

}

export default ContactList;