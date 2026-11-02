
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzwMmOY0YOUGZvUr4mmBkLt4XKARYeTnnEvdTNJ_sHEslipw2n-jp-hsDbaIcBh9161/exec";

const inputClass =
  "w-full rounded-xl border border-[#E7E3DC] bg-white px-4 py-3 text-sm text-[#10264A] outline-none transition placeholder:text-[#9299A3] focus:border-[#038DCA]";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");
    setIsSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();

    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      setStatus(
        "Your inquiry has been sent. Thank you for reaching out!"
      );
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus(
        "We couldn't send your inquiry. Please check your connection and try again."
      );
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#FAF9F6] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#038DCA]">
            Get in Touch
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#10264A] md:text-5xl">
            Let’s build better systems for your business.
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#626B78]">
            Have a project in mind? Let’s talk about how CRM,
            automation, and digital solutions can support your business.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-[#E7E3DC] bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Honeypot field for basic spam protection */}
          <div
            aria-hidden="true"
           className="absolute left-[-9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="website">
              Leave this field empty
            </label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-[#10264A]"
              >
                Full Name *
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                maxLength={150}
                placeholder="Your full name"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#10264A]"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                placeholder="you@example.com"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contactNumber"
                className="mb-2 block text-sm font-medium text-[#10264A]"
              >
                Contact Number
              </label>

              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                placeholder="+63 ..."
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="serviceNeeded"
                className="mb-2 block text-sm font-medium text-[#10264A]"
              >
                Service Needed *
              </label>

              <select
                id="serviceNeeded"
                name="serviceNeeded"
                defaultValue=""
                className={inputClass}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="CRM Setup">CRM Setup</option>
                <option value="Business Automation">
                  Business Automation
                </option>
                <option value="Funnels and Landing Pages">
                  Funnels and Landing Pages
                </option>
                <option value="Website Development">
                  Website Development
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="estimatedBudget"
              className="mb-2 block text-sm font-medium text-[#10264A]"
            >
              Estimated Budget
            </label>

            <select
              id="estimatedBudget"
              name="estimatedBudget"
              defaultValue=""
              className={inputClass}
            >
              <option value="">
                Select a budget (optional)
              </option>
              <option value="Under ₱10,000">
                Under ₱10,000
              </option>
              <option value="₱10,000–₱25,000">
                ₱10,000–₱25,000
              </option>
              <option value="₱25,000–₱50,000">
                ₱25,000–₱50,000
              </option>
              <option value="₱50,000+">₱50,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="projectDetails"
              className="mb-2 block text-sm font-medium text-[#10264A]"
            >
              Tell Us About Your Project *
            </label>

            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={5}
              maxLength={5000}
              placeholder="What would you like help with?"
              className={`${inputClass} resize-y`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#10264A] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#038DCA] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>

          {status && (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl border p-5 ${
                isSuccess
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}
            >
              <p className="font-semibold">
                {isSuccess
                  ? "✓ Thank you for reaching out!"
                  : "Unable to submit your inquiry"}
              </p>

              <p className="mt-1 text-sm leading-6">
                {status}
              </p>
            </div>
          )}

          <p className="text-xs leading-5 text-[#626B78]">
            Your information will be used to respond to your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
