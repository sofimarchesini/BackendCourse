import React from 'react';
import './form.css';
import emailjs from 'emailjs-com';
import { useState } from "react";
import { useRef } from 'react';

const Formulario = () => {
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const sendEmail = (e) =>  {
        e.preventDefault();
        emailjs.sendForm('service_ghn0632','template_q1rwjuj',e.target,"user_tvLkLtnmjdGb13uGZSZw9").then(res=>console.log(res)).catch(err=>console.log(err));
    }

      return (
        <form id="contact" action="" method="post" onSubmit={sendEmail}>
            <fieldset>
                 <input name="name" placeholder="Your name" type="text" tabindex="1" required autofocus onChange={(e) => setName(e.target.value)}/>
            </fieldset>
            <fieldset>
                <input name="email"  placeholder="Your Email Address" type="email" tabindex="2" required onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
            </fieldset>
            <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
        </form>
          
      );
    }
  
  
export default Formulario;      
  