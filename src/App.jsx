import { ModelScroll } from './components/ModelScroll';
import HeroImage from './components/HeroImage';
import { SectionScrollAnimation } from './components/SectionScrollAnimation';
import { SectionContent } from './components/SectionContent';
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import CookieConsent from './components/CookieConsent';
function App() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <CookieConsent />
      <LoadingScreen started={started} setStarted={setStarted} />
      <div className="absolute top-0 -z-10 h-[400vh] w-screen bg-themePink-500"></div>
      <HeroImage />
      <ModelScroll />
      <SectionScrollAnimation />
      <SectionContent />
    </>
  );
}

export default App;
