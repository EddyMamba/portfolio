import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setsubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_qbmpr6p",
        "template_t3lf15d",
        formData,
        "2Rz32jxATKyEte5D7"
      )
      .then(() => {
        setsubmitted(true); 
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        
        //  faire disparaître le message après 5 secondes
        setTimeout(() => setsubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Détails de l'erreur:", error);
        alert("Erreur lors de l'envoi ❌");
      });
  }

  return (
    <section className="contact" id="contact">
      <h2>Me contacter</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required // 
        />

        <button type="submit">Envoyer</button>
      </form>

      {/* Message de confirmation */}
      {submitted && <p className="success" style={{color: 'green'}}>Message envoyé avec succès !</p>}
    </section>
  );
}

export default Contact;