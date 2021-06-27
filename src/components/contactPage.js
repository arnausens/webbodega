import React from 'react';
import emailjs from "emailjs-com";
import swal from 'sweetalert';

const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_8wagj3g', e.target, 'user_60i0AO67uCfS1a0m4qv2p')
          .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(),
        swal({
            title: "Mensaje Enviado!",
            icon: "success",
        });
    }

    return (
        <div className='contact-page__container'>
            <div className="contact-page__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.6824980533725!2d2.1345729509830833!3d41.48948259752079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4961aee2683a5%3A0x41d2755e2d0bd5d1!2sESPAI%20VI%20CERDANYOLA!5e0!3m2!1ses!2ses!4v1623744439814!5m2!1ses!2ses" width="500" height="400" style={{border:"1px solid #cea123"}} importance="high"></iframe>
            </div>
            <div className="contact-page__data">
                <div className="contact-page__info">
                    <h4>Carrer de les Belles Arts 2</h4>
                    <h4>Cerdanyola del Vallès 08290</h4>
                    <h4>espaivi@gmail.com</h4>
                </div>
                <div className="contact-page__form">
                    <form onSubmit={sendEmail}>
                        <label>Nombre</label>
                        <input type="text" name="subject" />
                        <label>Email</label>
                        <input type="email" name="email"/>
                        <label>Mensaje</label>
                        <textarea name="message" style={{height:"110px", marginBottom:"10px"}}/>
                        <input className="contact-page__button" type="submit" value="Enviar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;