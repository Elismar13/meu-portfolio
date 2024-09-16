import React from 'react';

const Divider: React.FC = () => {
  return (
    <>
      <hr className="w-1/3 max-w-sm mx-auto border-t border-gray-400" />
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="block justify-center py-8">
      <Divider />
      <div className="pt-8 text-center">
        <p>
          Feito com amor por Elismar Silva <span role="img" aria-label="heart">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
