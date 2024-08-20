import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL


export default function ContactPage() {
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [errorMessage, setErrorMessage] = useState('');
      const { name, email, message } = formState;
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };
    
      
    return (
        <section className="features-icons bg-light text-center m-4">
         <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
           
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            
          />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
        </section>
      );

}
