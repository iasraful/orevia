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
      <div className="success-note">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>Thank you. You have been added to the private list.</span>
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
