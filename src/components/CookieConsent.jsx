import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CookieConsent = () => {
  const [isConsentRead, setIsConsentRead] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('session')) {
      setIsConsentRead(sessionStorage.getItem('session'));
    }
  }, []);

  function close() {
    console.log('close');
    sessionStorage.setItem('session', true);
    console.log(sessionStorage.getItem('session'));

    setIsConsentRead(sessionStorage.getItem('session'));
  }

  return (
    <>
      {!isConsentRead ? (
        <motion.div
          initial={{ y: '100%' }}
          animate={{
            y: '0%',
          }}
          transition={{ duration: 0.5, delay: 8, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 z-[9997] flex w-full items-center justify-between gap-2 bg-gray-100 px-8 py-2 font-DotGothic  md:px-16"
        >
          <p className="text-sm text-gray-700">
            We use cookies to ensure you get the best experience on our website.
          </p>
          <button
            onClick={close}
            className="rounded bg-themePink-500 px-4 py-2 font-bold text-white "
          >
            Accept
          </button>
        </motion.div>
      ) : (
        ''
      )}
    </>
  );
};

export default CookieConsent;
