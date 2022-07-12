import { useState } from 'react'
import emailjs from 'emailjs-com'

import './Form.css'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
      if (name && email && message) {
          const serviceId = 'service_id';
          const templateId = 'template_gucow1p';
          const userId = 'U7lHo-gAWqjA0H40Q';
          const templateParams = {
              name,
              email,
              message
          };

          emailjs.send(serviceId, templateId, templateParams, userId)
              .then(response => console.log(response))
              .then(error => console.log(error));

          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
      } else {
          alert('Please fill in all fields.');
      }
  }

  return (
      <div className="form" id="contact-form">
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <button class onClick={submit}>Send</button>

          <span className={emailSent ? "visible" : null}>Message sent, we will be in touch!</span>
      </div>
      
  )
}

export default Form