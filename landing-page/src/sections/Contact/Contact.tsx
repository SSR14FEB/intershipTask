import { useState } from "react";
import { contactHeading, contactSubheading, contactMethods } from "./contactData";
import { isValidEmail } from "../../utils/helper";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 md:w-[85%] md:py-10 lg:w-[70%]">
      <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-gray-100 md:flex-row">
        {/* Info */}
        <div className="flex w-full flex-col justify-center gap-6 p-6 sm:p-8 md:w-2/5 md:p-10">
          <h2 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl">
            {contactHeading}
          </h2>
          <p className="text-[15px] leading-7 font-normal text-gray-600 sm:text-base">
            {contactSubheading}
          </p>
          <div className="flex flex-col gap-2">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="text-sm font-medium text-gray-800 hover:text-amber-700"
              >
                {method.label}: {method.value}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="w-full p-6 sm:p-8 md:w-3/5 md:p-10">
          {submitted ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
              <p className="text-lg font-semibold text-gray-900">Thanks, {name}!</p>
              <p className="text-sm text-gray-600">
                Your message has been received. An engineer will reply ASAP.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-amber-700"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-amber-700"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="resize-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-amber-700"
                  placeholder="Tell us about your build..."
                />
              </div>

              {error && <p className="text-xs font-medium text-red-600">{error}</p>}

              <button
                type="submit"
                className="mt-2 w-fit rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;