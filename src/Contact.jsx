import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_47on5ct', 'template_1yaea8l', e.target, 'm5V9gGlfHdCjYFa_7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <div className="contact-container">
      <div className="contact__content">
      <h1 className="contact__title"> Contact</h1>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" id="name" placeholder="Your Name"  className="form-control" required />
        <input type="email" name="email" id="email" placeholder="Your Email"  className="form-control" required />
        <input type="text" name="subject" id="subject" placeholder="Subject"  className="form-control" required />
        <textarea name="message" id="message" cols="10" rows="10" className="form-control" placeholder="Enter your message"></textarea>
        <button type="submit" className="btn" value="Submit">Send</button>
      </form>
      </div>
      
    </div>
  )
}

export default Contact