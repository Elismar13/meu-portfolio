import React from 'react';
import { Project } from '../interface/projects';
import { FaMinus, FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  // Animação para o modal
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          className="relative bg-white dark:bg-gray-800 p-6 text-left rounded-xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden"
        >
          {/* Botões de controle */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none transition-colors duration-200"
              aria-label={t('projectModal.minimize')}
              title={t('projectModal.minimize')}
            >
              <FaMinus className="text-white text-xs" />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 focus:outline-none transition-colors duration-200"
              aria-label={t('projectModal.close')}
              title={t('projectModal.close')}
            >
              <FaTimes className="text-white text-xs" />
            </button>
          </div>

          {/* Conteúdo do modal */}
          <div className="mt-2">
            <h2 className="text-3xl text-center font-bold mb-6 text-gray-800 dark:text-white">
              {project.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Imagem do projeto */}
              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Detalhes do projeto */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {t('projectModal.description')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'pt' ? project.description : project.description_en}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {t('projectModal.languages')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FaGithub className="mr-2" />
                    {t('projectModal.viewOnGithub')}
                  </a>
                  
                  {project.deploy && (
                    <a 
                      href={project.deploy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      {t('projectModal.liveDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;