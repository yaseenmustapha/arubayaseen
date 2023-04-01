"use client";

import { useState } from "react";

export default function RsvpUpdate({
  rsvp,
}: {
  rsvp: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    quantity: number;
  };
}) {
  const [email, setEmail] = useState(rsvp.email || "");
  const [firstName, setFirstName] = useState(rsvp.firstName || "");
  const [lastName, setLastName] = useState(rsvp.lastName || "");
  const [numGuests, setNumGuests] = useState(rsvp.quantity.toString() || "1");
  const [successMessage, setSuccessMessage] = useState("");

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
      <div className="max-w-lg mx-auto -mt-36 mb-48 p-6">
        <h1 className="font-gilda text-xl font-bold mb-6">RSVP</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-gilda block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <p className="font-gilda">{email}</p>
          </div>
          <div className="mb-4">
            <p className="font-gilda text-xl">
              Modify RSVP for {firstName} {lastName}:
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="font-gilda block text-gray-700 font-bold mb-2"
            >
              How many guests?
            </label>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              id="quantity"
              name="quantity"
              className="font-gilda shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={numGuests}
              onChange={(event) => setNumGuests(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <button
              onClick={(e) => updateRsvp(e)}
              className="font-gilda bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update RSVP
            </button>
          </div>
        </form>
        {successMessage && <p className="font-gilda">{successMessage}</p>}
      </div>
    </main>
  );
}
