import React, {  useContext } from 'react';
import AnimatedButton from './AnimatedButton';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };

  return (
    <section id="contact" className="w-full text-white p-8 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-center lg:w-1/3 w-full mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <h3 className="text-2xl font-bold mb-4">Don't be Shy</h3>
          <p className="mb-4">
            If you liked my work, please fill out the form on the side and send me an email. If you prefer, you can also contact me via WhatsApp below:
          </p>
          <div className="flex items-center mb-2">
            <FaWhatsapp size={28} color={color} />
            <div className="ml-3">
              <span>WhatsApp</span>
              <br />
              <span>(83) 98748-8476</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full lg:ml-8">
          <form className="rounded-2xl">
            <div className="grid grid-cols-2 gap-x-5" >
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
              <div className="mb-4 col-span-2">
                <textarea
                  className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                  id="subject"
                  name="subject"
                  rows={1}
                  placeholder="Subject"
                  required
                ></textarea>
              </div>
              <div className="mb-4 col-span-2">
                <textarea
                  className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <AnimatedButton />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
