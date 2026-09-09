"use client";

import { useState } from "react";
import { FormField } from "./FormField";

export function PrayerRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="form-status" role="status">
        Thank you for sharing your prayer request. Our team will receive it and
        pray with you.
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
      <FormField id="prayer-name" label="Name" required value={name} onChange={setName} />
      <FormField id="prayer-email" label="Email" type="email" required value={email} onChange={setEmail} />
      <FormField id="prayer-phone" label="Phone" type="tel" value={phone} onChange={setPhone} />
      <FormField
        id="prayer-request"
        label="Prayer Request"
        type="textarea"
        required
        value={request}
        onChange={setRequest}
      />
      <label className="field-checkbox" htmlFor="prayer-anonymous">
        <input
          id="prayer-anonymous"
          type="checkbox"
          checked={anonymous}
          onChange={(event) => setAnonymous(event.target.checked)}
        />
        Keep my request anonymous
      </label>
      <div>
        <button className="btn btn--gold" type="submit">
          Submit Prayer Request
        </button>
      </div>
    </form>
  );
}
