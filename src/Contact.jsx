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
      <div className="contact-card">
        <div className="contact-card-header">
          <span className="section-tag">ENVOYER UN MESSAGE !</span>
          <h2>Me contacter</h2>
          <p className="contact-intro">
            Si vous avez un besoin, prière de nous contacter. Je suis disponible pour discuter de votre projet
            et proposer une solution claire, rapide et professionnelle.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-row">
            <label className="contact-field">
              <span>Nom</span>
              <input
                type="text"
                name="name"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Entrez votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label className="contact-field contact-field--full">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Envoyer</button>
        </form>

        {submitted && (
          <p className="success contact-success">Message envoyé avec succès !</p>
        )}
      </div>
    </section>
  );
}

export default Contact;