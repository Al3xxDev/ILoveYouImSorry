import { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import SpecialMemories from './components/SpecialMemories';
import LoveLetter from './components/LoveLetter';
import Surprise from './components/Surprise';
import ImpossibleButton from './components/ImpossibleButton';
import { Heart } from 'lucide-react';

function App() {
  const [isSurpriseUnlocked, setIsSurpriseUnlocked] = useState(false);

  return (
    <div className="app-container">
      <Hero />
      <Gallery />
      <SpecialMemories />
      <LoveLetter />

      {/* Game Section - Always visible until won? Or disappears? 
          User said: "appare funny.jpg ... e la sezione delle sorprese"
          So the game component handles its own success state view (funny img), 
          and THEN we show the Surprise section below it. 
      */}
      <ImpossibleButton onSuccess={() => setIsSurpriseUnlocked(true)} />

      {isSurpriseUnlocked && <Surprise />}

      <footer>
        <p className="footer-content">
          Fatto con tanto amore per la mia Kekkina <Heart size={16} fill="currentColor" />
        </p>
      </footer>
    </div>
  );
}

export default App;
