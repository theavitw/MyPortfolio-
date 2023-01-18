import React from 'react'
import Footer from '../footer'
import Avbar from '../navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus()
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <><Avbar />

     <div className="d-flex justify-content-center">
      <h3 className="position-absolute">Contact Me</h3>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mt-5">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div><Footer/></>
   
  )
}
export default ContactForm
