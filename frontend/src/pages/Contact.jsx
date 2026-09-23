import { useState } from "react";
import { HashLoader } from "react-spinners";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading ,setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL || "https://portfolio-shgm.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // if (message.length > 250) {
    //   setErrorMessage("Your message characters should not be more than 250 ");
    //   return;
    // }

   
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project, message }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit your message");
      }

      setName("");
      setEmail("");
      setProject("");
      setMessage("");
      setMessageSent(true);
      setSuccessMessage(
        "I have successfully received your message, I will get back to you in a jiffy",
      );


      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
      setLoading(false);
    } catch (error) {
      console.log("Failed to submit", error);
      setErrorMessage(error.message || "Failed to submit your message");
      setLoading(false);
    }
  };

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl rounded-[2.25rem] border border-[#e7dccf] bg-[#f9f4ef] p-8 md:p-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            Let&apos;s talk about your next product, idea, or website.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[1.5rem] border border-[#eadcc8] bg-white/80 p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Email
              </p>
              <a
                href="mailto:raymondafrani00@gmail.com"
                className="mt-3 block text-xl font-medium text-slate-900 hover:text-[#7b4d2a]"
              >
                raymondafrani00@gmail.com
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadcc8] bg-white/80 p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Location
              </p>
              <p className="mt-3 text-xl font-medium text-slate-900">Ghana</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadcc8] bg-white/80 p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Available
              </p>
              <p className="mt-3 text-xl font-medium text-slate-900">
                Open for freelance and product work
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-[#eadcc8] bg-white/80 p-5 md:p-6"
          >
            {/* Success Message */}

            {messageSent && (
              <div className="bg-green-50 border border-green-300 w-full p-4 text-center rounded-xl mb-8 text-green-500 text-sm md:text-md">
                <p>{successMessage}</p>
              </div>
            )}

            {errorMessage && (
              <div className="mb-8 w-full rounded-xl border border-red-300 bg-red-50 p-4 text-center text-sm text-red-600">
                <p>{errorMessage}</p>
              </div>
            )}



            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#e1d4c7] bg-[#f9f6f2] px-4 py-3 text-slate-800 outline-none transition focus:border-[#c98d64]"
                />
              </label>

              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#e1d4c7] bg-[#f9f6f2] px-4 py-3 text-slate-800 outline-none transition focus:border-[#c98d64]"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-slate-700">
              <span className="mb-2 block font-medium">Project type</span>
              <input
                value={project}
                onChange={(e) => setProject(e.target.value)}
                required
                type="text"
                placeholder="Website, app, redesign, etc."
                className="w-full rounded-xl border border-[#e1d4c7] bg-[#f9f6f2] px-4 py-3 text-slate-800 outline-none transition focus:border-[#c98d64]"
              />
            </label>

            <label className="mt-5 block text-sm text-slate-700">
              <span className="mb-2 block font-medium">Message</span>
              <textarea
                value={message}
                maxLength={250}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-[#e1d4c7] bg-[#f9f6f2] px-4 py-3 text-slate-800 outline-none transition focus:border-[#c98d64]"
              />

              <p className="text-sm">{message.length} / 250</p>
            </label>

            <div className="mt-6 flex justify-end ">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
             {loading ? 
              <HashLoader color="white" size={18}/> : ("Send message"
             )}

              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
