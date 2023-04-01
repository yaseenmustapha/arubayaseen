"use client";

import { useState } from "react";

export default function Rsvp() {
  // const searchParams = useSearchParams();
  // const emailParam = searchParams?.get("email");
  const [continuePressed, setContinuePressed] = useState(false);
  const [rsvpExists, setRsvpExists] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numGuests, setNumGuests] = useState("1");
  const [successMessage, setSuccessMessage] = useState("");

  // useEffect(() => {
  //   if (emailParam) {
  //     setEmail(emailParam);
  //   }
  // }, []);

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
      <div className="max-w-lg mx-auto -mt-36 mb-48 p-6">
        <h1 className="font-gilda text-xl font-bold mb-6">RSVP</h1>
        <form onSubmit={createRsvp}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-gilda block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              readOnly={continuePressed}
              type="email"
              id="email"
              name="email"
              className="font-gilda shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setEmailError(
                  regex.test(e.target.value)
                    ? ""
                    : "Please enter a valid email address."
                );
              }}
              required
            />
            {emailError && (
              <p className="font-gilda text-red-500 text-sm mt-1">
                {emailError}
              </p>
            )}
          </div>
          {!continuePressed && (
            <button
              onClick={(e) => handleContinue(e)}
              className="font-gilda bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          )}
          {continuePressed && !rsvpExists && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="font-gilda block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="font-gilda shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="font-gilda block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="font-gilda shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
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
                  type="submit"
                  className="font-gilda bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </>
          )}
          {continuePressed && rsvpExists && (
            <>
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
            </>
          )}
        </form>
        {successMessage && <p className="font-gilda">{successMessage}</p>}
      </div>
    </main>
  );
}
