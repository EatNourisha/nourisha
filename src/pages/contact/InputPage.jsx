import './input-page.css'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import { useEffect } from 'react';

const InputPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastNmae, setLastNmae] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFirst = (e) => {
        setFirstName(e.target.value)
    }
    const handleLast = (e) => {
        setLastNmae(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const [mail, setMail] = useState('');
    const Mails = () =>{
        setMail(!mail)
    }
useEffect(() =>{
    if (mail){
    alert('Mail Sent')
    }
}, [mail])
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
    setFirstName('')
    setLastNmae('')
    setEmail('')
    setMessage('')
  emailjs.sendForm('service_so5927y', 'template_os3mkot', form.current, 'vbQ7WkJoa8ukcL-Dh')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div className="input-pages">
    <div className="container container-input-pages">
    <div className="input-page">
        <div className="words">
            <h1>We would love to hear from you.</h1>
            <h3>Email</h3>
            <h6>info@nourisha.com</h6>
            <h3>Telephone</h3>
            <h6>020 3443 3303</h6>
        </div>
        <div className="input">
            <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name*</label>
            <div className="top">
                <input type="text" name='first-name' 
                value={firstName} onChange={handleFirst}
                placeholder='First name' required/>
                <input type="text" name='last-name' 
                value={lastNmae} onChange={handleLast}
                placeholder='Last name' required/>
            </div>
            <label htmlFor="email">Email*</label>
            <input type="email" name='email' 
            value={email} onChange={handleEmail}
            required/>
            <label htmlFor="message">Message*</label>
            <textarea name="message" 
            value={message} onChange={handleMessage}
            required rows="7"></textarea>
            <button type='submit' onClick={Mails}>Send</button>
            </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default InputPage