"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RsvpTest() {
  const searchParams = useSearchParams();
  const emailParam = searchParams?.get("email");
  const [continuePressed, setContinuePressed] = useState(false);
  const [rsvpExists, setRsvpExists] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numGuests, setNumGuests] = useState("1");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleContinue = async (e: any) => {
    e.preventDefault();
    // check if rsvp exists
    if (!email || emailError) return;
    const encodedEmail = encodeURIComponent(email);
    const res = await fetch(`/api/rsvp?email=${encodedEmail}`, {
      method: "GET",
    });
    const rsvp = await res.json();

    if (rsvp) {
      setEmail(rsvp.email);
      setFirstName(rsvp.firstName);
      setLastName(rsvp.lastName);
      setNumGuests(rsvp.quantity.toString());
      setRsvpExists(true);
    } else {
      setRsvpExists(false);
    }

    setContinuePressed(true);
  };

  const createRsvp = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        quantity: Number(numGuests),
      }),
    });
    if (res.ok) {
      // show success message
      setSuccessMessage(
        "Your RSVP has been recorded. A confirmation email has been sent. Thank you!"
      );
    }
  };

  const updateRsvp = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/rsvp", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        quantity: Number(numGuests),
      }),
    });
    if (res.ok) {
      // show success message
      setSuccessMessage(
        "Your RSVP has been updated. A confirmation email has been sent. Thank you!"
      );
    }
  };

  return (
    <main>
      <div className="max-w-2xl mx-auto -mt-36">
        <p className="font-gilda text-center">Test</p>
      </div>
    </main>
  );
}
