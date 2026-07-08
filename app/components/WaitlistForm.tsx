"use client";

import { useState, FormEvent } from "react";

interface WaitlistFormProps {
  compact?: boolean;
  id?: string;
}

export default function WaitlistForm({ compact = false, id = "waitlist-email" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`waitlist-form ${compact ? "compact" : ""} waitlist-success`}>
        <p>Thank you. You&rsquo;re on the list.</p>
      </div>
    );
  }

  return (
    <form className={`waitlist-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit}>
      <label htmlFor={id}>Email address</label>
      <div className="waitlist-row">
        <input
          id={id}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Join
        </button>
      </div>
    </form>
  );
}
