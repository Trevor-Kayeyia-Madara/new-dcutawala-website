"use client";

import { useState } from "react";
import { FormField } from "./FormField";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="form-status" role="status">
        Thank you for your message. Our team will receive it and respond as
        soon as possible.
      </p>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <FormField id="contact-name" label="Name" required value={name} onChange={setName} />
      <FormField id="contact-email" label="Email" type="email" required value={email} onChange={setEmail} />
      <FormField id="contact-subject" label="Subject" value={subject} onChange={setSubject} />
      <FormField
        id="contact-message"
        label="Message"
        type="textarea"
        required
        value={message}
        onChange={setMessage}
      />
      <div>
        <button className="btn btn--gold" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}
