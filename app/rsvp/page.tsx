"use client";

import { Button, Container, Image, Input, Text } from "@nextui-org/react";
import { useState } from "react";

export default function Rsvp() {
  const [continuePressed, setContinuePressed] = useState(false);
  const [rsvpExists, setRsvpExists] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numGuests, setNumGuests] = useState(1);

  const handleContinue = async () => {
    // check if rsvp exists
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

  const createRsvp = async () => {
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        quantity: numGuests,
      }),
    });
    if (res.ok) {
      // show success message
    }
  };

  const updateRsvp = async () => {
    const res = await fetch("/api/rsvp", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        quantity: numGuests,
      }),
    });
    if (res.ok) {
      // show success message
    }
  };

  return (
    <main>
      <Image src="/nikkah.png" alt="Next.js Logo" width={600} height={500} />
      <Container display="flex" alignItems="center" direction="column" xs>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!continuePressed && (
          <Button onPress={() => handleContinue()}>Continue</Button>
        )}
        {continuePressed && !rsvpExists && (
          <>
            <Input
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              label="How many guests (including yourself)?"
              type="number"
              value={numGuests}
              onChange={(e) => setNumGuests(Number(e.target.value))}
            />
            <Button onPress={() => createRsvp()}>Submit</Button>
          </>
        )}
        {continuePressed && rsvpExists && (
          <>
            <Text>
              {firstName} {lastName}
            </Text>
            <Input
              label="How many guests (including yourself)?"
              type="number"
              value={numGuests}
              onChange={(e) => setNumGuests(Number(e.target.value))}
            />
            <Button onPress={() => updateRsvp()}>Update</Button>
          </>
        )}
      </Container>
    </main>
  );
}
