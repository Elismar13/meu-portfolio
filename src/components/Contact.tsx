import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedButton from './AnimatedButton';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { color } = React.useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();

  return (
    <section id="contact" className="text-white p-8 flex justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          {t('contact.talk')}
          <span style={{ color }}>{t('contact.talk2')}</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-center lg:w-1/3 w-full mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">{t('contact.title')} <span style={{ color }}>{t('contact.title2')}</span></h2>
            <p className="mb-4">
              {t('contact.description')}
            </p>
            <div className="flex items-center mb-2">
              <FaWhatsapp size={28} color={color} />
              <div className="ml-3">
                <span>{t('contact.whatsapp')}</span>
                <br />
                <span>{t('contact.phone')}</span>
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
                    placeholder={t('contact.name')}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('contact.email')}
                    required
                  />
                </div>
                <div className="mb-4 col-span-2">
                  <textarea
                    className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                    id="subject"
                    name="subject"
                    rows={1}
                    placeholder={t('contact.subject')}
                    required
                  ></textarea>
                </div>
                <div className="mb-4 col-span-2">
                  <textarea
                    className="w-full p-3 bg-gray-300 border rounded-2xl border-transparent placeholder-gray-600 text-black"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t('contact.message')}
                    required
                  ></textarea>
                </div>
              </div>
              <AnimatedButton />
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
