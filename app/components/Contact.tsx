import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-gray-800 text-white p-8 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-center lg:w-1/3 w-full mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <h3 className="text-2xl font-bold mb-4">Don't be Shy</h3>
          <p className="mb-4">
            If you liked my work, please fill out the form on the side and send me an email. If you prefer, you can also contact me via WhatsApp below:
          </p>
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l6.29 6.29a1 1 0 001.42 0L21 6" />
            </svg>
            <div>
              <span>WhatsApp</span>
              <br />
              <span>(83) 98748-8476</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full lg:ml-8">
          <form className="rounded-2xl bg-gray-800">
            <div className="mb-4">
              <input
                className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
