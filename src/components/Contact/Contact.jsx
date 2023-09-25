import {useState,useEffect} from 'react'
import './Contact.css';
import List from '../List/List';
import Form from '../Form/Form';

function Contact() {

  const [contacts,setContacts] = useState([]);


  useEffect(()=> {

    console.log(contacts)

  },[contacts])
  return (
    <div id='container'>
        <List contacts = {contacts}/>
        <Form addContacts={setContacts} contacts ={contacts}/>
      
    </div>
  )
}

export default Contact
