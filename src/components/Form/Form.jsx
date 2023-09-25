import {useState} from 'react'
import './Form.css';

const initialFormValues ={fullName:"",phoneNumber:""};
function Form({addContacts,contacts}) {
  const [form,setForm] = useState(initialFormValues);

  const onChangeInput = (e)=> {

      setForm({...form,[e.target.name]:e.target.value})
  }
  const onSubmit =(e)=> {
    e.preventDefault()

    // fullname veya phonenumber boş ise formu göndermez
    if(form.fullName==='' || form.phoneNumber==='') {
      return false;
    }
   addContacts([...contacts,form])
   setForm(initialFormValues)
  }
  return (
    <form onSubmit={onSubmit}>

        <div className='input-container'>
        <input 
        name='fullName'
         placeholder='full name' 
         onChange={onChangeInput}
         value={form.fullName}/>
      
        <input
         name='phoneNumber'
          placeholder='phone number'
           onChange={onChangeInput}
           value={form.phoneNumber}/>
        </div>
        <div>
          <button>Add</button>
        </div>
       
       
      
    </form>
  )
}

export default Form
