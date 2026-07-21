// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   Newspaper, Megaphone, Calendar, ChevronRight, Sparkles, Trophy, 
//   Building2, Film, ArrowUpRight, Search, X
// } from 'lucide-react';
// import { ASSETS } from '../data';
// import NEWSImg1 from "../assets/news-images/news-img-1.png"
// export default function NewsEvents() {
//   const [activeTab, setActiveTab] = useState('all');
//   const [selectedClipping, setSelectedClipping] = useState(null);
//   const [hoveredCardId, setHoveredCardId] = useState(null);

//   // Tabs matching the screenshot exactly
//   const tabs = [
//     { id: 'all', name: 'ALL NEWS', icon: Newspaper },
//     { id: 'updates', name: 'COMPANY UPDATES', icon: Building2 },
//     { id: 'awards', name: 'AWARDS & RECOGNITIONS', icon: Trophy },
//     { id: 'events', name: 'EVENTS', icon: Sparkles },
//     { id: 'media', name: 'MEDIA COVERAGE', icon: Megaphone },
//   ];

//   // 12 Newspaper Clipping items from the screenshot
//   const newsItems = [
//     {
//       id: 'news-1',
//       paperName: 'ವಿಜಯ ಕರ್ನಾಟಕ',
//       paperSub: 'VIJAY KARNATAKA',
//       headline: 'ಎಂಆರ್‌ಸಿಎಲ್ ಸಿಲ್ವನ್ ವುಡ್ಸ್ ಬಡಾವಣೆ ಉದ್ಘಾಟನೆ',
//       date: 'December 13, 2024',
//       image: NEWSImg1 || ASSETS.lobbyInterior,
//       category: 'media',
//       color: '#e11d48', // Red
//       columnText: 'ಕೆಂಗೇರಿ (ಬೆಂಗಳೂರು): ಸ್ಮಾರ್ಟ್ ಸಿಟಿ, ಕೆ. ಸ್ಟೈರ್ ಸಹಯೋಗದಲ್ಲಿ ಬೆಂಗಳೂರು ಹೊರವಲಯದ ರಾಮೋಹಳ್ಳಿಯಲ್ಲಿ ನಿರ್ಮಿಸಿರುವ ಎಂ.ಆರ್.ಸಿ.ಎಲ್ ಸಿಲ್ವನ್ ವುಡ್ಸ್ ಬಡಾವಣೆಯನ್ನು ಹನುಮ ಜಯಂತಿ ದಿನವಾದ ಶುಕ್ರವಾರ ಉದ್ಘಾಟಿಸಲಾಯಿತು. ಕೆ ಸ್ಟೈರ್ ಸಂಸ್ಥಾಪಕ ಎಚ್. ಕೃಷ್ಣಮೂರ್ತಿ ಮಾತನಾಡಿ, "ಸಿಲ್ವನ್ ವುಡ್ಸ್ ಬಡಾವಣೆಯು ಬಿಡಿಎ ರಚಿಸಿರುವ ಕೆಂಪೇಗೌಡ ಬಡಾವಣೆಗೆ ಸಮೀಪದಲ್ಲಿದೆ. ಬೆಂಗಳೂರು - ಮೈಸೂರು ಹೆದ್ದಾರಿ, ನೈಸ್ ರಸ್ತೆ, ಚಲ್ಲಘಟ್ಟ ಮೆಟ್ರೊ ನಿಲ್ದಾಣ, ರಾಜರಾಜೇಶ್ವರಿ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಕಾಲೇಜು ಹಾಗೂ ಪ್ರತಿಷ್ಠಿತ ತಾಂತ್ರಿಕ ಕಾಲೇಜುಗಳು ಈ ಬಡಾವಣೆಯ ಹತ್ತಿರದಲ್ಲೇ ಇವೆ," ಎಂದರು. 7 ಎಕರೆಗೂ ಹೆಚ್ಚು ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಎ ಖಾತಾದ 117 ನಿವೇಶನಗಳನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ. ಅಗತ್ಯ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸಲಾಗಿದೆ ಎಂದು ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ಸಂಸ್ಥಾಪಕ ಸಿ.ಎಸ್.ಸುನಿಲ್ ತಿಳಿಸಿದರು. ಬಡಾವಣೆ ನಿರ್ಮಿಸುವ ಎಂ.ಆರ್.ಸಿ.ಎಲ್ ಸಂಸ್ಥೆ ಮಾಲೀಕರಾದ ಮೋಹನ್ ಕುಮಾರ್ ಮಾತನಾಡಿ, "ಅಕ್ಕಪಕ್ಕದ ಬಡಾವಣೆಗಳಿಗೆ ಹೋಲಿಸಿದರೆ ನಮ್ಮ ಬಡಾವಣೆ ನಿವೇಶನಗಳಿಗೆ ಕಡಿಮೆ ದರ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ. ಮೂಲ ಸೌಕರ್ಯಗಳ ಜೊತೆಗೆ, ಉದ್ಯಾನ, ಮೈದಾನ, ಜಿಮ್, ಈಜುಕೊಳ, ಕ್ರಿಕೆಟ್ ನೆಟ್ ಪ್ರಾಕ್ಟೀಸ್, ವಿಹಾರಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕ ಸ್ಥಳಾವಕಾಶ ಕಲ್ಪಿಸಲಾಗಿದೆ," ಎಂದು ತಿಳಿಸಿದರು. ಕೆ. ಸ್ಟೈರ್ ಸಂಸ್ಥಾಪಕ ಎನ್. ಸುಬ್ರಮಣಿ, ಕೆ ಸ್ಟೈರ್ ನಿರ್ದೇಶಕ ಎಸ್. ಕಿರಣ್ ಕುಮಾರ್ ಮತ್ತು ಎಸ್.ಸತೀಶ್ ಕುಮಾರ್, ಕೆ.ಆರ್.ಐ.ಡಿ.ಎಲ್ ಮಾಜಿ ಅಧ್ಯಕ್ಷ ಎಂ.ರುದ್ರೇಶ್ ಉಪಸ್ಥಿತರಿದ್ದರು.',
//     },
//     // {
//     //   id: 'news-2',
//     //   paperName: 'ಪ್ರಜಾವಾಣಿ',
//     //   paperSub: 'PRAJAVANI',
//     //   headline: 'ಗ್ರಾಹಕರಿಗೆ ಉನ್ನತ ಗುಣಮಟ್ಟದ ಮತ್ತು ಸುಸಜ್ಜಿತ ಗೇಟೆಡ್ ವಿಲ್ಲಾಗಳ ಕೊಡುಗೆ',
//     //   date: 'April 28, 2024',
//     //   image: ASSETS.sugarlandVillaFront || ASSETS.prestigeVilla,
//     //   category: 'updates',
//     //   color: '#1e293b', // Deep Slate
//     //   columnText: 'ಬೆಂಗಳೂರು: ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ವತಿಯಿಂದ ಬನ್ನೇರುಘಟ್ಟ ರಸ್ತೆಯಲ್ಲಿ ಅತ್ಯಾಧುನಿಕ ಗೇಟೆಡ್ ಕಮ್ಯುನಿಟಿ ವಿಲ್ಲಾ ಯೋಜನೆಗಳಿಗೆ ಚಾಲನೆ ನೀಡಲಾಗಿದೆ. ಪ್ರತಿಯೊಂದು ವಿಲ್ಲಾ ಕೂಡ ಸ್ವತಂತ್ರವಾಗಿದ್ದು, ಪರಿಸರ ಸ್ನೇಹಿ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ವಸತಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ಹೊಸ ಕ್ರಾಂತಿ ಸೃಷ್ಟಿಸುತ್ತಿರುವ ಈ ಯೋಜನೆಗಳಿಗೆ ಈಗಾಗಲೇ ವ್ಯಾಪಕ ಸ್ಪಂದನೆ ದೊರೆತಿದ್ದು, ಮನೆ ಖರೀದಿದಾರರ ಮೊದಲ ಆಯ್ಕೆಯಾಗಿದೆ ಎಂದು ಪ್ರಜಾವಾಣಿ ವರದಿ ಮಾಡಿದೆ.',
//     // },
//     // {
//     //   id: 'news-3',
//     //   paperName: 'ಉದಯವಾಣಿ',
//     //   paperSub: 'UDAYAVANI',
//     //   headline: 'ನವೀನ ವಾಸ್ತುಶಿಲ್ಪ ತಂತ್ರಜ್ಞಾನ ಬಳಸಿ ಸುಸ್ಥಿರ ನಗರಾಭಿವೃದ್ಧಿಗೆ ಆದ್ಯತೆ',
//     //   date: 'April 21, 2024',
//     //   image: ASSETS.sylvanEventEntrance || ASSETS.lobbyInterior,
//     //   category: 'events',
//     //   color: '#ea580c', // Orange
//     //   columnText: 'ಶಿವಮೊಗ್ಗ: ಸುಸ್ಥಿರ ಮತ್ತು ಆಧುನಿಕ ಮಾದರಿಯ ಲೇಔಟ್ ಮತ್ತು ವಿಲ್ಲಾಗಳ ನಿರ್ಮಾಣದಲ್ಲಿ ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಮತ್ತೊಂದು ಮೈಲಿಗಲ್ಲು ಸ್ಥಾಪಿಸಿದೆ. ಗುಣಮಟ್ಟದ ಜಲ ಮರುಪೂರಣ ವ್ಯವಸ್ಥೆ, ವೈಜ್ಞಾನಿಕ ಒಳಚರಂಡಿ ಸೌಲಭ್ಯ ಹಾಗೂ ಸುಂದರ ಉದ್ಯಾನವನಗಳನ್ನು ಒಳಗೊಂಡ ಈ ಯೋಜನೆಗಳು ಪ್ರಕೃತಿಯ ಮಡಿಲಿನಲ್ಲಿ ಹೊಸ ಮಾದರಿಯ ಜೀವನಶೈಲಿಯನ್ನು ಒದಗಿಸಲಿವೆ ಎಂದು ಸಂಸ್ಥೆಯ ನಿರ್ದೇಶಕರು ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ತಿಳಿಸಿದರು.',
//     // },
//     // {
//     //   id: 'news-4',
//     //   paperName: 'ಈ ದಿನ',
//     //   paperSub: 'EE DINA',
//     //   headline: 'ಮರಕಲ್ ಇನ್ಫ್ರಾ ನೂತನ ಗೇಟೆಡ್ ಸಮುದಾಯ ಯೋಜನೆಗಳಿಗೆ ಚಾಲನೆ',
//     //   date: 'April 15, 2024',
//     //   image: ASSETS.sylvanPlotLayout || ASSETS.ayanurLayoutAerial,
//     //   category: 'updates',
//     //   color: '#2563eb', // Blue
//     //   columnText: 'ಬೆಂಗಳೂರು: ಬೆಂಗಳೂರು ದಕ್ಷಿಣದ ಪ್ರಮುಖ ವಲಯದಲ್ಲಿ ಮರಕಲ್‌ನ ನೂತನ ಬೃಹತ್ ವಸತಿ ವಿಲ್ಲಾ ಲೇಔಟ್ ಲೋಕಾರ್ಪಣೆಗೊಂಡಿದೆ. ಸುಸಜ್ಜಿತ ರಸ್ತೆಗಳು, ಭೂಗತ ಕೇಬಲ್ ವ್ಯವಸ್ಥೆ ಹಾಗೂ 24 ಗಂಟೆ ಸುರಕ್ಷತಾ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ನಿರ್ಮಾಣವಾಗಿರುವ ಈ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮಧ್ಯಮ ಮತ್ತು ಪ್ರೀಮಿಯಂ ವರ್ಗದ ಜನರನ್ನು ಆಕರ್ಷಿಸುತ್ತಿವೆ. ಉದ್ಯೋಗ ಕೇಂದ್ರಗಳಿಗೆ ಹತ್ತಿರವಿರುವ ಕಾರಣ ಈ ಪ್ರದೇಶದಲ್ಲಿ ಬೇಡಿಕೆ ಹೆಚ್ಚಾಗಿದೆ.',
//     // },
//     // {
//     //   id: 'news-5',
//     //   paperName: 'ಕನ್ನಡಪ್ರಭ',
//     //   paperSub: 'KANNADA PRABHA',
//     //   headline: 'ರಿಯಲ್ ಎಸ್ಟೇಟ್ ರಂಗದಲ್ಲಿ ನಂಬಿಕೆಯ ಮತ್ತೊಂದು ಹೆಸರೇ ಮರಕಲ್ ಇನ್ಫ್ರಾ',
//     //   date: 'April 10, 2024',
//     //   image: ASSETS.timesAward2025 || ASSETS.grandeurVilla,
//     //   category: 'media',
//     //   color: '#dc2626', // Red
//     //   columnText: 'ಮೈಸೂರು: ಗುಣಮಟ್ಟ ಮತ್ತು ಕಾಲಮಿತಿಯಲ್ಲಿ ಯೋಜನೆ ಪೂರ್ಣಗೊಳಿಸುವುದರಲ್ಲಿ ಮರಕಲ್ ಸಂಸ್ಥೆಯು ದೇಶದಲ್ಲೇ ಮುಂಚೂಣಿಯಲ್ಲಿದೆ. ಇತ್ತೀಚೆಗೆ ನಡೆದ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಗ್ರಾಹಕರ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಬ್ರ್ಯಾಂಡ್ ಎಂದು ಮರಕಲ್ ಇನ್ಫ್ರಾ ಆಯ್ಕೆಯಾಗಿದೆ. ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟದ ಕಚ್ಚಾ ವಸ್ತುಗಳ ಬಳಕೆ ಮತ್ತು ಪಾರದರ್ಶಕ ವ್ಯವಹಾರವೇ ಈ ಅಭೂತಪೂರ್ವ ಯಶಸ್ಸಿಗೆ ಮುಖ್ಯ ಕಾರಣವಾಗಿದೆ.',
//     // },
//     // {
//     //   id: 'news-6',
//     //   paperName: 'ಹೊಸ ದಿಗಂತ',
//     //   paperSub: 'HOSA DIGANTHA',
//     //   headline: 'ಸಂಪೂರ್ಣ ಸುಸಜ್ಜಿತ ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ಮಾದರಿಯ ಲೇಔಟ್ ಪ್ರಕಟಿಸಿದ ಎಂಆರ್‌ಸಿಎಲ್',
//     //   date: 'April 05, 2024',
//     //   image: ASSETS.sugarlandAerial || ASSETS.dharithriStreet,
//     //   category: 'updates',
//     //   color: '#16a34a', // Green
//     //   columnText: 'ಶಿವಮೊಗ್ಗ: ಶಿವಮೊಗ್ಗದ ಹೆಬ್ಬಾಗಿಲಿನಲ್ಲಿ ಮರಕಲ್ ಸಂಸ್ಥೆಯ ಅತ್ಯಾಧುನಿಕ ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ಮಾದರಿಯ ಬೃಹತ್ ಲೇಔಟ್ ಲೋಕಾರ್ಪಣೆಯಾಗಿದೆ. ಕ್ರೀಡಾಂಗಣಗಳು, ಎಲ್ಇಡಿ ಬೀದಿ ದೀಪಗಳು, ಈಜುಕೊಳ ಸೇರಿದಂತೆ ವಿಶ್ವದರ್ಜೆಯ ಕ್ಲಬ್ ಹೌಸ್ ಸೌಲಭ್ಯಗಳನ್ನು ಈ ಲೇಔಟ್ ಒಳಗೊಂಡಿದೆ. ಪರಿಸರ ಸಮತೋಲನ ಕಾಪಾಡಲು ಸಾವಿರಕ್ಕೂ ಅಧಿಕ ಸಸಿಗಳನ್ನು ನೆಟ್ಟು ಹಸಿರು ವಲಯವನ್ನು ಸೃಷ್ಟಿಸಲಾಗಿದೆ.',
//     // },
//     // {
//     //   id: 'news-7',
//     //   paperName: 'ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ',
//     //   paperSub: 'SAMYUKTA KARNATAKA',
//     //   headline: 'ಭವ್ಯ ಭಾರತದ ಸುಂದರ ಕನಸಿನ ಮನೆಗಳಿಗೆ ಹೊಸ ಆಯಾಮ ನೀಡಿದ ಸಂಸ್ಥೆ',
//     //   date: 'March 30, 2024',
//     //   image: ASSETS.ayanurStreet || ASSETS.lobbyInterior,
//     //   category: 'events',
//     //   color: '#0284c7', // Sky Blue
//     //   columnText: 'ಬೆಂಗಳೂರು: ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ತನ್ನ 15ನೇ ವಾರ್ಷಿಕೋತ್ಸವ ಸಂಭ್ರಮದಲ್ಲಿದ್ದು, ಹೊಸ ಕೊಡುಗೆಗಳನ್ನು ಗ್ರಾಹಕರಿಗೆ ಪ್ರಕಟಿಸಿದೆ. ಸೀಮಿತ ಅವಧಿಗೆ ಆಯ್ದ ವಿಲ್ಲಾ ಬುಕಿಂಗ್ ಮೇಲೆ ವಿಶೇಷ ರಿಯಾಯಿತಿ ಮತ್ತು ಉಚಿತ ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳನ್ನು ನೀಡುವುದಾಗಿ ಘೋಷಿಸಿದೆ. ಈ ಮೌಲ್ಯಯುತ ಕೊಡುಗೆಗಳ ಲಾಭ ಪಡೆಯಲು ಗ್ರಾಹಕರು ಭಾರಿ ಆಸಕ್ತಿ ತೋರುತ್ತಿದ್ದಾರೆ ಎಂದು ಸಂಸ್ಥೆಯ ಪ್ರಕಟಣೆ ತಿಳಿಸಿದೆ.',
//     // },
//     // {
//     //   id: 'news-8',
//     //   paperName: 'ದಿನಮಣಿ',
//     //   paperSub: 'DINAMANI',
//     //   headline: 'ಅತ್ಯಾಧುನಿಕ ವಾಸ್ತುಶಿಲ್ಪ ಶೈಲಿಯ ಗ್ರೀನ್ ವಿಲ್ಲಾಗಳಿಗೆ ಭಾರಿ ಬೇಡಿಕೆ',
//     //   date: 'March 25, 2024',
//     //   image: ASSETS.prestigeVilla || ASSETS.eliteVilla,
//     //   category: 'media',
//     //   color: '#4f46e5', // Indigo
//     //   columnText: 'ಬೆಂಗಳೂರು: ಪರಿಸರ ಸ್ನೇಹಿ ಮತ್ತು ಕಡಿಮೆ ಇಂಧನ ಬಳಸುವ ‘ಗ್ರೀನ್ ಬಿಲ್ಡಿಂಗ್’ ತಂತ್ರಜ್ಞಾನ ಆಧರಿಸಿ ಮರಕಲ್ ನಿರ್ಮಿಸುತ್ತಿರುವ ವಿಲ್ಲಾಗಳು ಹೊಸ ಮೈಲಿಗಲ್ಲು ಸ್ಥಾಪಿಸಿವೆ. ಸೋಲಾರ್ ಪವರ್ ಗ್ರಿಡ್, ಪ್ರಕೃತಿ ದತ್ತ ಬೆಳಕು ಮತ್ತು ಶುದ್ಧ ಗಾಳಿ ಸದಾ ಸಂಚರಿಸುವಂತೆ ರೂಪಿಸಲಾಗಿರುವ ಇವು ಪರಿಸರ ಪ್ರೇಮಿಗಳ ಪ್ರಶಂಸೆಗೆ ಕಾರಣವಾಗಿವೆ. ಇದು ಭವಿಷ್ಯದ ವಸತಿ ವ್ಯವಸ್ಥೆಗೆ ಅತ್ಯುತ್ತಮ ದಾರಿದೀಪವಾಗಿದೆ.',
//     // },
//     // {
//     //   id: 'news-9',
//     //   paperName: 'ವಿಶ್ವವಾಣಿ',
//     //   paperSub: 'VISHWAVANI',
//     //   headline: 'ಜನಸಾಮಾನ್ಯರ ಬಜೆಟ್‌ನಲ್ಲಿ ಐಷಾರಾಮಿ ಜೀವನ ಶೈಲಿಯ ವಿಲ್ಲಾಗಳು ಸಿದ್ಧ',
//     //   date: 'March 18, 2024',
//     //   image: ASSETS.timesAward2025 || ASSETS.sugarlandStreet,
//     //   category: 'awards',
//     //   color: '#0891b2', // Cyan
//     //   columnText: 'ಶಿವಮೊಗ್ಗ: ರಿಯಲ್ ಎಸ್ಟೇಟ್ ವಲಯದಲ್ಲಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಪ್ರೀಮಿಯಂ ವಿಲ್ಲಾಗಳನ್ನು ಖರೀದಿಸಲು ಮರಕಲ್ ಸುವರ್ಣಾವಕಾಶ ಕಲ್ಪಿಸಿದೆ. ಸುಸಜ್ಜಿತ ರಸ್ತೆ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿನ ಪೈಪ್ ಲೈನ್ ಸೇರಿದಂತೆ ಯಾವುದೇ ತೊಂದರೆಯಿಲ್ಲದ ಕಾನೂನು ಬದ್ಧ ಮಾಲೀಕತ್ವದ ಜಮೀನುಗಳನ್ನು ಗ್ರಾಹಕರಿಗೆ ಒದಗಿಸುತ್ತಿದೆ. ಇದರಿಂದಾಗಿ ಶಿವಮೊಗ್ಗದ ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಪ್ರದೇಶಗಳಿಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದಲ್ಲಿ ಈ ಯೋಜನೆಗಳು ಇವೆ.',
//     // },
//     // {
//     //   id: 'news-10',
//     //   paperName: 'ಜನಮಿತ್ರ',
//     //   paperSub: 'JANAMITRA',
//     //   headline: 'ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಪರಿಸರ ಸ್ನೇಹಿ ಲೇಔಟ್ ಪ್ರಕಟಣೆ',
//     //   date: 'March 12, 2024',
//     //   image: ASSETS.sylvanEventEntrance || ASSETS.sylvanPlotLayout,
//     //   category: 'events',
//     //   color: '#059669', // Emerald
//     //   columnText: 'ಶಿವಮೊಗ್ಗ: ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ ಹೊಂದಿರುವ ಶಿವಮೊಗ್ಗ ಪರಿಸರದಲ್ಲಿ ನೂತನ ಪ್ರೀಮಿಯಂ ಲೇಔಟ್ ಒಂದನ್ನು ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಅನಾವರಣಗೊಳಿಸಿದೆ. ಈ ಲೇಔಟ್‌ನಲ್ಲಿ ಪರಿಸರ ಸಂರಕ್ಷಣೆಗೆ ವಿಶೇಷ ಆದ್ಯತೆ ನೀಡಲಾಗಿದ್ದು, ಹಸಿರು ವಲಯಗಳನ್ನು ಹಾಗೇ ಉಳಿಸಿಕೊಳ್ಳಲಾಗಿದೆ. ಗ್ರಾಹಕರಿಗೆ ಆಧುನಿಕ ಜೀವನಶೈಲಿ ಹಾಗೂ ಸ್ವಚ್ಛ ಪರಿಸರ ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನೀಡಲು ಶ್ರಮಿಸಲಾಗಿದೆ.',
//     // },
//     // {
//     //   id: 'news-11',
//     //   paperName: 'ನಮ್ಮ ಕರ್ನಾಟಕ',
//     //   paperSub: 'NAMMA KARNATAKA',
//     //   headline: 'ವಿಶೇಷ ಆಫರ್: ಈ ಯುಗಾದಿಗೆ ಹೊಸ ಮನೆ ಖರೀದಿಸುವವರಿಗೆ ಭರ್ಜರಿ ಕೊಡುಗೆ',
//     //   date: 'March 05, 2024',
//     //   image: ASSETS.timesAward2025 || ASSETS.ayanurStreet,
//     //   category: 'updates',
//     //   color: '#0284c7', // Sky Blue
//     //   columnText: 'ಬೆಂಗಳೂರು: ಮರಕಲ್ ಕಂಪನಿಯು ಮುಂಬರುವ ಯುಗಾದಿ ಹಬ್ಬದ ಅಂಗವಾಗಿ ಹೊಸ ವಿಲ್ಲಾ ಹಾಗೂ ಪ್ಲಾಟ್‌ಗಳ ಬುಕಿಂಗ್ ಮೇಲೆ ಬಂಗಾರದ ನಾಣ್ಯ ಮತ್ತು ನಗದು ಕಡಿತದ ಕೊಡುಗೆಯನ್ನು ಘೋಷಿಸಿದೆ. ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಹೂಡಿಕೆಯಾಗಿರುವ ಮರಕಲ್ ಲೇಔಟ್‌ಗಳಲ್ಲಿ ಜಾಗ ಪಡೆದುಕೊಳ್ಳಲು ಸೂಕ್ತ ಸಮಯ ಇದಾಗಿದೆ. ಗ್ರಾಹಕರು ಈ ವಿಶೇಷ ರಿಯಾಯಿತಿಯನ್ನು ಸದುಪಯೋಗ ಪಡಿಸಿಕೊಳ್ಳಲು ಕೋರಲಾಗಿದೆ.',
//     // },
//     // {
//     //   id: 'news-12',
//     //   paperName: 'ತಾರಕ ಕನ್ನಡ',
//     //   paperSub: 'TARAKA KANNADA',
//     //   headline: 'ಗೃಹ ಖರೀದಿದಾರರ ಅತ್ಯಂತ ಪ್ರಥಮ ವಿಶ್ವಾಸಾರ್ಹ ಬ್ರ್ಯಾಂಡ್ ಪಟ್ಟ ಪಡೆದ ಮರಕಲ್',
//     //   date: 'February 28, 2024',
//     //   image: ASSETS.timesAward2025 || ASSETS.lobbyInterior,
//     //   category: 'media',
//     //   color: '#be123c', // Rose
//     //   columnText: 'ಬೆಂಗಳೂರು: ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಮಾಲೀಕತ್ವ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯಲ್ಲಿ ಮರಕಲ್ ಸಂಸ್ಥೆ ಮತ್ತೊಮ್ಮೆ ಅಗ್ರಸ್ಥಾನದಲ್ಲಿದೆ. ಕಾನೂನು ಬದ್ಧ ಅನುಮೋದನೆ ಪಡೆದ ಭೂಮಿ, ಯಾವುದೇ ವಿವಾದಗಳಿಲ್ಲದ ಸ್ಪಷ್ಟ ದಾಖಲೆ ಪತ್ರಗಳೊಂದಿಗೆ ನುರಿತ ಸಿಬ್ಬಂದಿ ವರ್ಗವು ಪ್ರತಿ ಗ್ರಾಹಕರಿಗೂ ಗೃಹ ಸಾಲದ ಸೌಲಭ್ಯವನ್ನು ಸುಲಭವಾಗಿ ಒದಗಿಸುತ್ತಿದೆ. ಇದರಿಂದಾಗಿ ಮನೆ ಖರೀದಿದಾರರ ಕನಸು ಯಾವುದೇ ಅಡೆತಡೆಯಿಲ್ಲದೆ ನನಸಾಗುತ್ತಿದೆ.',
//     // }
//   ];

//   // Filters news list based on active tab
//   const filteredNews = activeTab === 'all' 
//     ? newsItems 
//     : newsItems.filter(item => item.category === activeTab);

//   return (
//     <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
//       {/* ================= 1. NEWS & EVENTS CORPORATE HERO BANNER ================= */}
//       <section className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b-2 border-[#c5a85c]">
        
//         {/* Ornate world network map graphic in background */}
//         <div className="absolute inset-0 bg-cover bg-center opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

//         {/* Dynamic Glowing Accents */}
//         <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#8a1a24] opacity-[0.15] blur-[80px]" />
//         <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c5a85c] opacity-[0.12] blur-[85px]" />

//         {/* Golden decorative corner dots */}
//         <div className="absolute right-4 top-8 sm:right-10 sm:top-12 opacity-50 flex gap-1 items-center justify-center pointer-events-none">
//           <div className="grid grid-cols-5 gap-1.5">
//             {[...Array(15)].map((_, i) => (
//               <div key={i} className="w-1 h-1 rounded-full bg-[#c5a85c]" />
//             ))}
//           </div>
//         </div>

//         {/* Ornate custom left golden curves */}
//         <div className="absolute left-0 top-0 w-[24%] h-full opacity-20 pointer-events-none scale-x-[-1] z-10">
//           <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
//             <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="2.5" />
//             <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
//           </svg>
//         </div>
        
//         {/* Right curves */}
//         <div className="absolute right-0 top-0 w-[24%] h-full opacity-20 pointer-events-none z-10">
//           <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
//             <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="2.5" />
//             <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
//             <defs>
//               <linearGradient id="heroNewsGoldGrad" x1="1" y1="1" x2="0" y2="0">
//                 <stop offset="0%" stopColor="#c5a85c" />
//                 <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* TWO PREMIUM ACTIVE GOLD BADGE STAMPS (NEWSPAPER & MEGAPHONE) */}
//         <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5 z-10 pointer-events-none">
//           {/* Newspaper stamp badge */}
//           <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c5a85c] via-[#a3802b] to-[#735111] p-[1px] flex items-center justify-center shadow-lg transform rotate-12">
//             <div className="w-full h-full bg-gradient-to-br from-[#240103] to-[#120002] rounded-full flex items-center justify-center text-[#c5a85c]">
//               <Newspaper className="w-7 h-7" />
//             </div>
//             {/* Stamp outline dash ring */}
//             <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a85c]/30" />
//           </div>

//           {/* Megaphone stamp badge */}
//           <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c5a85c] via-[#a3802b] to-[#735111] p-[1px] flex items-center justify-center shadow-lg transform -rotate-12 translate-x-2">
//             <div className="w-full h-full bg-gradient-to-br from-[#240103] to-[#120002] rounded-full flex items-center justify-center text-[#c5a85c]">
//               <Megaphone className="w-7 h-7" />
//             </div>
//             {/* Stamp outline dash ring */}
//             <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a85c]/30" />
//           </div>
//         </div>

//         {/* Center Text Header block */}
//         <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
//           {/* MRCL Brand Logo Badge on Top Left Area of the Header */}
//           <div className="flex flex-col items-center gap-0.5 mb-6 scale-95 sm:scale-100">
//             <svg className="w-11 h-11 text-[#c5a85c] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
//               <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.18)" />
//               <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
//               <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
//             </svg>
//             <span className="font-serif text-white text-xs font-black tracking-[0.28em] leading-none uppercase mt-1">MRCL</span>
//             <span className="font-sans text-[6.5px] tracking-[0.32em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
//           </div>

//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#e2c58a] to-[#b5802f] tracking-[0.1em] uppercase leading-tight filter drop-shadow">
//             NEWS & EVENTS
//           </h1>

//           {/* Ornate Gold Dividers */}
//           <div className="w-48 sm:w-60 h-6 text-[#c5a85c]/85 flex items-center justify-center my-2.5">
//             <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
//               <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
//               <circle cx="100" cy="12" r="3" fill="currentColor" />
//               <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
//             </svg>
//           </div>

//           <p className="font-serif text-stone-300 text-xs sm:text-sm tracking-[0.16em] uppercase font-light italic mt-1 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
//             STAY INFORMED. STAY AHEAD.
//           </p>
//         </div>
//       </section>

//       {/* Main Container - Curving inside with elegant shadow */}
//       <section className="relative z-30 -mt-8 sm:-mt-10 bg-[#FAF6F0] rounded-t-[32px] border-t border-[#c5a85c]/30 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
//         {/* ================= 2. HORIZONTAL TAB FILTERS NAVIGATION BAR ================= */}
//         <div className="flex justify-center w-full">
//           <div className="inline-flex flex-wrap items-center justify-center bg-[#FFFdfa] border border-[#c5a85c]/40 rounded-full px-2 py-1.5 shadow-md gap-0.5 sm:gap-1 max-w-full">
//             {tabs.map((tab, idx) => {
//               const IconComp = tab.icon;
//               const isActive = activeTab === tab.id;
//               return (
//                 <React.Fragment key={tab.id}>
//                   {idx > 0 && (
//                     <span className="hidden md:inline text-[#c5a85c]/30 font-light text-sm select-none mx-0.5">|</span>
//                   )}
//                   <button
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`cursor-pointer px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2 focus:outline-none ${
//                       isActive
//                         ? 'bg-[#4a0105] text-white border border-[#c5a85c] shadow-lg scale-103 font-black'
//                         : 'bg-transparent text-[#9a7635] hover:text-[#4a0105] hover:bg-[#c5a85c]/10'
//                     }`}
//                   >
//                     <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#c5a85c]'}`} />
//                     <span>{tab.name}</span>
//                   </button>
//                 </React.Fragment>
//               );
//             })}
//           </div>
//         </div>

//         {/* ================= 3. LATEST NEWS & UPDATES INTRO TEXT ================= */}
//         <div className="text-center max-w-2xl mx-auto space-y-2">
//           <div className="flex items-center justify-center gap-3">
//             {/* Left flourish scroll */}
//             <svg className="w-12 h-3 text-[#c5a85c]" viewBox="0 0 100 12" fill="none" stroke="currentColor">
//               <path d="M 100,6 L 10,6 C 25,12 25,0 40,6" strokeWidth="1" />
//               <polygon points="100,6 94,3 94,9" fill="currentColor" stroke="none" />
//             </svg>
//             <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#4a0105] tracking-widest uppercase">
//               LATEST NEWS & UPDATES
//             </h2>
//             {/* Right flourish scroll */}
//             <svg className="w-12 h-3 text-[#c5a85c] scale-x-[-1]" viewBox="0 0 100 12" fill="none" stroke="currentColor">
//               <path d="M 100,6 L 10,6 C 25,12 25,0 40,6" strokeWidth="1" />
//               <polygon points="100,6 94,3 94,9" fill="currentColor" stroke="none" />
//             </svg>
//           </div>
//           <p className="text-stone-600 font-sans text-xs tracking-wider uppercase font-medium">
//             Read exclusive columns covering our architectural masterpieces, national recognitions, and corporate announcements
//           </p>
//         </div>

//         {/* ================= 4. NEWS CLIPPINGS GRID ================= */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 sm:gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredNews.map((news) => {
//               const isHovered = hoveredCardId === news.id;
//               const isFirst = news.id === 'news-1';
//               // First card gets its signature color border by default. Others get elegant gray, and transform on hover.
//               const borderStyleColor = isHovered ? news.color : (isFirst ? news.color : '#e2e2e2');

//               return (
//                 <motion.div
//                   layout
//                   key={news.id}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.4 }}
//                   onClick={() => setSelectedClipping(news)}
//                   onMouseEnter={() => setHoveredCardId(news.id)}
//                   onMouseLeave={() => setHoveredCardId(null)}
//                   style={{ borderColor: borderStyleColor }}
//                   className="group relative flex flex-col bg-[#fffdf9] rounded-xl overflow-hidden border-2 cursor-pointer shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//                 >
//                   {/* News Card Header Body */}
//                   <div className="p-4 flex-grow flex flex-col justify-start space-y-3">
                    
//                     {/* Newspaper branding row */}
//                     <div className="text-center border-b border-stone-100 pb-2">
//                       <h3 
//                         className="font-serif text-base sm:text-lg font-black tracking-wide leading-none" 
//                         style={{ color: news.color }}
//                       >
//                         {news.paperName}
//                       </h3>
//                       <span className="text-[7.5px] font-sans font-extrabold text-stone-400 tracking-[0.25em] leading-none uppercase mt-1 block">
//                         {news.paperSub}
//                       </span>
//                     </div>

//                     {/* Newspaper headline in Kannada script */}
//                     <div className="min-h-[32px] flex items-center">
//                       <p className="font-serif text-[11px] sm:text-xs font-bold text-[#1a0002] leading-snug tracking-wide text-left line-clamp-2 group-hover:text-[#8c1c24] transition-colors">
//                         {news.headline}
//                       </p>
//                     </div>

//                     {/* Newspaper Clipping Body simulation (image on left, news text on right) */}
//                     <div className="flex gap-2 pt-1.5 border-t border-stone-100 items-start">
//                       {/* Aspect Image representing achievements */}
//                       <div className="w-[42%] flex-shrink-0 relative aspect-[3/4.2] rounded overflow-hidden bg-stone-900 border border-stone-200/60">
//                         <img 
//                           src={news.image} 
//                           alt={news.paperName} 
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
//                           referrerPolicy="no-referrer"
//                         />
//                         <div className="absolute inset-0 bg-black/10" />
//                       </div>
                      
//                       {/* Newspaper dummy justified multi lines (WITHOUT flex so line-clamp works!) */}
//                       <div className="flex-grow text-justify font-sans text-[7.5px] leading-relaxed text-stone-500 overflow-hidden line-clamp-[6]">
//                         {news.columnText}
//                       </div>
//                     </div>

//                   </div>

//                   {/* Maroon Footer with Calendar Date */}
//                   <div className="bg-[#4d0206] text-[#FAF6F0] py-2 px-3 flex items-center justify-center gap-1.5 text-[9px] font-mono tracking-wider font-bold border-t border-[#c5a85c]/20 uppercase mt-auto">
//                     <Calendar className="w-3.5 h-3.5 text-[#c5a85c] flex-shrink-0" />
//                     <span>{news.date}</span>
//                   </div>

//                   {/* Hover glass magnify button overlay */}
//                   <div className="absolute inset-0 bg-[#4d0206]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
//                     <div className="bg-[#4d0206] border border-[#c5a85c] text-white px-3 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1 transform scale-90 group-hover:scale-100 transition-transform duration-300">
//                       <ArrowUpRight className="w-3 h-3 text-[#c5a85c]" />
//                       <span>READ ARTICLE</span>
//                     </div>
//                   </div>

//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </motion.div>

//         {/* Separator Line */}
//         <div className="w-full flex justify-center py-4">
//           <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent relative">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAF6F0] border border-[#c5a85c] rotate-45" />
//           </div>
//         </div>

//         {/* ================= 5. CENTRAL VIEW MORE NEWS BUTTON ================= */}
//         {/* <div className="flex justify-center w-full">
//           <button
//             onClick={() => {
//               // Simulated loading of older news articles by popping a subtle notification
//               alert("You are viewing our latest 2024 publications. For complete legacy print archives, contact MRCL PR department.");
//             }}
//             className="cursor-pointer bg-[#4d0206] hover:bg-[#c5a85c] text-[#e5c78a] hover:text-[#4d0206] border border-[#c5a85c] rounded-xl px-10 py-4 font-bold tracking-[0.2em] text-xs uppercase shadow-md transition-all duration-300 hover:scale-103 group focus:outline-none flex items-center gap-2"
//           >
//             <span>VIEW MORE NEWS</span>
//             <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div> */}

//       </section>

//       {/* ================= 6. LIGHTBOX NEWS DETAILS READING MODAL ================= */}
//       <AnimatePresence>
//         {selectedClipping && (
//           <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000]/95 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-10">
            
//             {/* Close modal on backdrop click */}
//             <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedClipping(null)} />

//             {/* Modal Stage Container */}
//             <div className="relative max-w-2xl w-full my-auto z-10 flex flex-col space-y-4 px-2 sm:px-4">

//               {/* Elegant Header Bar */}
//               <div className="flex items-center justify-between w-full pb-2 border-b border-white/10">
//                 <div className="flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//                   <span className="font-serif text-[10px] sm:text-xs font-bold text-[#c5a85c] tracking-[0.2em] uppercase">
//                     News Article
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => setSelectedClipping(null)}
//                   className="cursor-pointer group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8c1c24] border border-white/20 text-stone-200 hover:text-white transition-all duration-200"
//                   aria-label="Close modal"
//                 >
//                   <span className="text-[9px] font-sans font-bold tracking-wider uppercase">Close</span>
//                   <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
//                 </button>
//               </div>

//               {/* Modal Box */}
//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.95, opacity: 0 }}
//                 className="relative w-full bg-[#faf7f2] border-3 border-[#c5a85c] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
//               >

//                 {/* Newspaper header brand block */}
//                 <div className="bg-[#240103] p-8 text-center border-b-2 border-[#c5a85c]">
                  
//                   {/* Stamp graphic inside modal header */}
//                   <div className="inline-block bg-gradient-to-br from-[#c5a85c] to-[#a3802b] text-white p-2 rounded-full mb-3 shadow-md">
//                     <Newspaper className="w-6 h-6 stroke-[1.5]" />
//                   </div>

//                   <h2 
//                     className="font-serif text-3xl sm:text-4xl font-black tracking-wide leading-none"
//                     style={{ color: selectedClipping.color }}
//                   >
//                     {selectedClipping.paperName}
//                   </h2>
//                   <p className="text-[#c5a85c] font-sans text-xs tracking-[0.25em] font-extrabold uppercase mt-2.5">
//                     {selectedClipping.paperSub} • BENGALURU & SHIMOGA EDITION
//                   </p>
//                   <div className="w-20 h-[1px] bg-[#c5a85c]/40 mx-auto mt-4" />
//                   <span className="text-stone-300 font-mono text-xs tracking-wider uppercase block mt-3">
//                     PUBLISHED DATE: {selectedClipping.date}
//                   </span>
//                 </div>

//                 {/* Newspaper article content body layout */}
//                 <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
                  
//                   {/* Newspaper main headline */}
//                   <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug tracking-wide border-b border-stone-200 pb-4">
//                     {selectedClipping.headline}
//                   </h3>

//                   {/* Main image with gold border */}
//                   <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-[#c5a85c]/60 shadow-md bg-stone-950">
//                     <img 
//                       src={selectedClipping.image} 
//                       alt="Article moment photo" 
//                       className="w-full h-full object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                   </div>

//                   {/* Subtitle / intro */}
//                   <div className="bg-stone-100 border-l-4 border-[#8c1c24] p-4 rounded-r-xl">
//                     <p className="text-stone-700 font-sans text-xs sm:text-sm font-semibold tracking-wide leading-relaxed">
//                       ಎಂಆರ್‌ಸಿಎಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಸಂಸ್ಥೆಯು ತನ್ನ ಗುಣಮಟ್ಟ ಮತ್ತು ಕಾಲಮಿತಿಯ ಭರವಸೆಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸುವ ಮೂಲಕ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ನಂಬಿಕಸ್ಥ ಬ್ರಾಂಡ್ ಎಂಬ ಹೆಗ್ಗಳಿಕೆಗೆ ಪಾತ್ರವಾಗಿದೆ.
//                     </p>
//                   </div>

//                   {/* Fully justified multi-paragraph newspaper text content */}
//                   <div className="space-y-4 text-stone-800 font-sans text-sm leading-relaxed text-justify tracking-wide">
//                     <p>
//                       {selectedClipping.columnText}
//                     </p>
//                     <p>
//                       ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಉದ್ಯಮದಲ್ಲಿ ಗ್ರಾಹಕರಿಗೆ ಮೋಸವಾಗದಂತೆ, ಶೇಕಡಾ ನೂರರಷ್ಟು ನೈಜ ದೃಢೀಕರಣ ಮತ್ತು ಕಾನೂನು ಅನುಮೋದನೆ ಪಡೆದ ಜಾಗಗಳನ್ನು ಒದಗಿಸುವುದು ಇಂದಿನ ದಿನಗಳಲ್ಲಿ ಸವಾಲಿನ ಕೆಲಸವಾಗಿದೆ. ಆದರೆ ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ತಂಡವು ಪ್ರಾರಂಭದಿಂದಲೂ ಪಾರದರ್ಶಕತೆಗೆ ಮೊದಲ ಆದ್ಯತೆ ನೀಡಿದೆ. ಬೆಂಗಳೂರಿನಲ್ಲಿ ವೇಗವಾಗಿ ಅಭಿವೃದ್ಧಿ ಹೊಂದುತ್ತಿರುವ ಬನ್ನೇರುಘಟ್ಟ ಹಾಗೂ ಕೊಪ್ಪ ಗೇಟ್ ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿ ನಿರ್ಮಿಸುತ್ತಿರುವ ವಿಶಾಲವಾದ ರಸ್ತೆಗಳು, ಸುಸಜ್ಜಿತ ಒಳಚರಂಡಿ ಸೌಲಭ್ಯ, ಸುಂದರ ಕ್ಲಬ್ ಹೌಸ್ ಸೌಲಭ್ಯಗಳು ಭವಿಷ್ಯದ ಜೀವನಶೈಲಿಗೆ ಪೂರಕವಾಗಿವೆ.
//                     </p>
//                     <p>
//                       ಮತ್ತೊಂದೆಡೆ, ಮಲೆನಾಡಿನ ಹೆಬ್ಬಾಗಿಲಾದ ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಪರಿಸರ ಸ್ನೇಹಿ ಗ್ರೀನ್ ಲೇಔಟ್‌ಗಳನ್ನು ಕಲ್ಪಿಸಿರುವ ಸಂಸ್ಥೆಯು ಮರಗಳನ್ನು ಕತ್ತರಿಸದೆಯೇ ಪ್ರಕೃತಿ ಸ್ನೇಹಿ ವಸತಿ ಸಂಕೀರ್ಣಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿದೆ. ಮುಂದಿನ ಐದು ವರ್ಷಗಳಲ್ಲಿ ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ನಗರಗಳಲ್ಲೂ ಸಂಸ್ಥೆ ತನ್ನ ನೂತನ ವಸತಿ ಯೋಜನೆಗಳನ್ನು ವಿಸ್ತರಿಸಲು ಬೃಹತ್ ಕಾರ್ಯಯೋಜನೆ ರೂಪಿಸುತ್ತಿದೆ. ವಿವರವಾದ ಮಾಹಿತಿ ಮತ್ತು ಸ್ಥಳ ಪರಿಶೀಲನೆಗೆ ಬುಕಿಂಗ್ ಲಭ್ಯವಿದೆ.
//                     </p>
//                   </div>

//                 </div>

//                 {/* Modal footer action */}
//                 <div className="bg-stone-100 p-4 border-t border-stone-200 flex items-center justify-between">
//                   <span className="text-[10px] font-black text-stone-500 tracking-wider uppercase font-sans">
//                     MRCL PRESS INFORMATION AGENCY
//                   </span>
//                   <button
//                     onClick={() => setSelectedClipping(null)}
//                     className="cursor-pointer bg-[#4d0206] hover:bg-[#8c1c24] text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase shadow transition-all duration-300"
//                   >
//                     CLOSE ARTICLE
//                   </button>
//                 </div>

//               </motion.div>

//             </div>

//           </div>
//         )}
//       </AnimatePresence>

//       {/* ================= 7. FOOTER SLOGAN STRIP ================= */}
//       <section className="bg-[#250205] py-14 text-[#FAF6F0] border-t-2 border-[#c5a85c] relative text-center">
        
//         {/* Subtle lobby pattern overlay inside banner */}
//         <div 
//           className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none" 
//           style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} 
//         />
        
//         <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          
//           {/* Ornate gold scrollwork header */}
//           <div className="w-32 h-5 text-[#c5a85c]/85 flex items-center justify-center my-1 mx-auto">
//             <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
//               <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
//               <circle cx="100" cy="12" r="3" fill="currentColor" />
//               <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
//             </svg>
//           </div>

//           <h3 className="font-serif text-base sm:text-lg font-bold text-[#c5a85c] tracking-[0.25em] uppercase leading-relaxed">
//             BUILDING TODAY FOR A BETTER TOMORROW
//           </h3>
          
//           {/* Micro gold scroll */}
//           <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c]/50 to-transparent mx-auto relative mt-2.5">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5a85c] rotate-45" />
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Newspaper, Megaphone, Calendar, ChevronRight, Sparkles, Trophy, 
  Building2, Film, ArrowUpRight, Search, X
} from 'lucide-react';
import { ASSETS } from '../data';
import NEWSImg1 from "../assets/news-images/news-img-1.png"

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedClipping, setSelectedClipping] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Tabs matching the screenshot exactly
  const tabs = [
    { id: 'all', name: 'ALL NEWS', icon: Newspaper },
    { id: 'updates', name: 'COMPANY UPDATES', icon: Building2 },
    { id: 'awards', name: 'AWARDS & RECOGNITIONS', icon: Trophy },
    { id: 'events', name: 'EVENTS', icon: Sparkles },
    { id: 'media', name: 'MEDIA COVERAGE', icon: Megaphone },
  ];

  // 12 Newspaper Clipping items from the screenshot
  const newsItems = [
    {
      id: 'news-1',
      paperName: 'ವಿಜಯ ಕರ್ನಾಟಕ',
      paperSub: 'VIJAY KARNATAKA',
      headline: 'ಎಂಆರ್‌ಸಿಎಲ್ ಸಿಲ್ವನ್ ವುಡ್ಸ್ ಬಡಾವಣೆ ಉದ್ಘಾಟನೆ',
      date: 'December 13, 2024',
      image: NEWSImg1 || ASSETS.lobbyInterior,
      category: 'media',
      color: '#e11d48', // Red
      columnText: 'ಕೆಂಗೇರಿ (ಬೆಂಗಳೂರು): ಸ್ಮಾರ್ಟ್ ಸಿಟಿ, ಕೆ. ಸ್ಟೈರ್ ಸಹಯೋಗದಲ್ಲಿ ಬೆಂಗಳೂರು ಹೊರವಲಯದ ರಾಮೋಹಳ್ಳಿಯಲ್ಲಿ ನಿರ್ಮಿಸಿರುವ ಎಂ.ಆರ್.ಸಿ.ಎಲ್ ಸಿಲ್ವನ್ ವುಡ್ಸ್ ಬಡಾವಣೆಯನ್ನು ಹನುಮ ಜಯಂತಿ ದಿನವಾದ ಶುಕ್ರವಾರ ಉದ್ಘಾಟಿಸಲಾಯಿತು. ಕೆ ಸ್ಟೈರ್ ಸಂಸ್ಥಾಪಕ ಎಚ್. ಕೃಷ್ಣಮೂರ್ತಿ ಮಾತನಾಡಿ, "ಸಿಲ್ವನ್ ವುಡ್ಸ್ ಬಡಾವಣೆಯು ಬಿಡಿಎ ರಚಿಸಿರುವ ಕೆಂಪೇಗೌಡ ಬಡಾವಣೆಗೆ ಸಮೀಪದಲ್ಲಿದೆ. ಬೆಂಗಳೂರು - ಮೈಸೂರು ಹೆದ್ದಾರಿ, ನೈಸ್ ರಸ್ತೆ, ಚಲ್ಲಘಟ್ಟ ಮೆಟ್ರೊ ನಿಲ್ದಾಣ, ರಾಜರಾಜೇಶ್ವರಿ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಕಾಲೇಜು ಹಾಗೂ ಪ್ರತಿಷ್ಠಿತ ತಾಂತ್ರಿಕ ಕಾಲೇಜುಗಳು ಈ ಬಡಾವಣೆಯ ಹತ್ತಿರದಲ್ಲೇ ಇವೆ," ಎಂದರು. 7 ಎಕರೆಗೂ ಹೆಚ್ಚು ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಎ ಖಾತಾದ 117 ನಿವೇಶನಗಳನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ. ಅಗತ್ಯ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸಲಾಗಿದೆ ಎಂದು ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ಸಂಸ್ಥಾಪಕ ಸಿ.ಎಸ್.ಸುನಿಲ್ ತಿಳಿಸಿದರು. ಬಡಾವಣೆ ನಿರ್ಮಿಸುವ ಎಂ.ಆರ್.ಸಿ.ಎಲ್ ಸಂಸ್ಥೆ ಮಾಲೀಕರಾದ ಮೋಹನ್ ಕುಮಾರ್ ಮಾತನಾಡಿ, "ಅಕ್ಕಪಕ್ಕದ ಬಡಾವಣೆಗಳಿಗೆ ಹೋಲಿಸಿದರೆ ನಮ್ಮ ಬಡಾವಣೆ ನಿವೇಶನಗಳಿಗೆ ಕಡಿಮೆ ದರ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ. ಮೂಲ ಸೌಕರ್ಯಗಳ ಜೊತೆಗೆ, ಉದ್ಯಾನ, ಮೈದಾನ, ಜಿಮ್, ಈಜುಕೊಳ, ಕ್ರಿಕೆಟ್ ನೆಟ್ ಪ್ರಾಕ್ಟೀಸ್, ವಿಹಾರಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕ ಸ್ಥಳಾವಕಾಶ ಕಲ್ಪಿಸಲಾಗಿದೆ," ಎಂದು ತಿಳಿಸಿದರು. ಕೆ. ಸ್ಟೈರ್ ಸಂಸ್ಥಾಪಕ ಎನ್. ಸುಬ್ರಮಣಿ, ಕೆ ಸ್ಟೈರ್ ನಿರ್ದೇಶಕ ಎಸ್. ಕಿರಣ್ ಕುಮಾರ್ ಮತ್ತು ಎಸ್.ಸತೀಶ್ ಕುಮಾರ್, ಕೆ.ಆರ್.ಐ.ಡಿ.ಎಲ್ ಮಾಜಿ ಅಧ್ಯಕ್ಷ ಎಂ.ರುದ್ರೇಶ್ ಉಪಸ್ಥಿತರಿದ್ದರು.',
    },
    // Uncomment these for more news items
    // {
    //   id: 'news-2',
    //   paperName: 'ಪ್ರಜಾವಾಣಿ',
    //   paperSub: 'PRAJAVANI',
    //   headline: 'ಗ್ರಾಹಕರಿಗೆ ಉನ್ನತ ಗುಣಮಟ್ಟದ ಮತ್ತು ಸುಸಜ್ಜಿತ ಗೇಟೆಡ್ ವಿಲ್ಲಾಗಳ ಕೊಡುಗೆ',
    //   date: 'April 28, 2024',
    //   image: ASSETS.sugarlandVillaFront || ASSETS.prestigeVilla,
    //   category: 'updates',
    //   color: '#1e293b', // Deep Slate
    //   columnText: 'ಬೆಂಗಳೂರು: ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ವತಿಯಿಂದ ಬನ್ನೇರುಘಟ್ಟ ರಸ್ತೆಯಲ್ಲಿ ಅತ್ಯಾಧುನಿಕ ಗೇಟೆಡ್ ಕಮ್ಯುನಿಟಿ ವಿಲ್ಲಾ ಯೋಜನೆಗಳಿಗೆ ಚಾಲನೆ ನೀಡಲಾಗಿದೆ. ಪ್ರತಿಯೊಂದು ವಿಲ್ಲಾ ಕೂಡ ಸ್ವತಂತ್ರವಾಗಿದ್ದು, ಪರಿಸರ ಸ್ನೇಹಿ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ವಸತಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ಹೊಸ ಕ್ರಾಂತಿ ಸೃಷ್ಟಿಸುತ್ತಿರುವ ಈ ಯೋಜನೆಗಳಿಗೆ ಈಗಾಗಲೇ ವ್ಯಾಪಕ ಸ್ಪಂದನೆ ದೊರೆತಿದ್ದು, ಮನೆ ಖರೀದಿದಾರರ ಮೊದಲ ಆಯ್ಕೆಯಾಗಿದೆ ಎಂದು ಪ್ರಜಾವಾಣಿ ವರದಿ ಮಾಡಿದೆ.',
    // },
    // {
    //   id: 'news-3',
    //   paperName: 'ಉದಯವಾಣಿ',
    //   paperSub: 'UDAYAVANI',
    //   headline: 'ನವೀನ ವಾಸ್ತುಶಿಲ್ಪ ತಂತ್ರಜ್ಞಾನ ಬಳಸಿ ಸುಸ್ಥಿರ ನಗರಾಭಿವೃದ್ಧಿಗೆ ಆದ್ಯತೆ',
    //   date: 'April 21, 2024',
    //   image: ASSETS.sylvanEventEntrance || ASSETS.lobbyInterior,
    //   category: 'events',
    //   color: '#ea580c', // Orange
    //   columnText: 'ಶಿವಮೊಗ್ಗ: ಸುಸ್ಥಿರ ಮತ್ತು ಆಧುನಿಕ ಮಾದರಿಯ ಲೇಔಟ್ ಮತ್ತು ವಿಲ್ಲಾಗಳ ನಿರ್ಮಾಣದಲ್ಲಿ ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಮತ್ತೊಂದು ಮೈಲಿಗಲ್ಲು ಸ್ಥಾಪಿಸಿದೆ. ಗುಣಮಟ್ಟದ ಜಲ ಮರುಪೂರಣ ವ್ಯವಸ್ಥೆ, ವೈಜ್ಞಾನಿಕ ಒಳಚರಂಡಿ ಸೌಲಭ್ಯ ಹಾಗೂ ಸುಂದರ ಉದ್ಯಾನವನಗಳನ್ನು ಒಳಗೊಂಡ ಈ ಯೋಜನೆಗಳು ಪ್ರಕೃತಿಯ ಮಡಿಲಿನಲ್ಲಿ ಹೊಸ ಮಾದರಿಯ ಜೀವನಶೈಲಿಯನ್ನು ಒದಗಿಸಲಿವೆ ಎಂದು ಸಂಸ್ಥೆಯ ನಿರ್ದೇಶಕರು ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ತಿಳಿಸಿದರು.',
    // },
    // {
    //   id: 'news-4',
    //   paperName: 'ಈ ದಿನ',
    //   paperSub: 'EE DINA',
    //   headline: 'ಮರಕಲ್ ಇನ್ಫ್ರಾ ನೂತನ ಗೇಟೆಡ್ ಸಮುದಾಯ ಯೋಜನೆಗಳಿಗೆ ಚಾಲನೆ',
    //   date: 'April 15, 2024',
    //   image: ASSETS.sylvanPlotLayout || ASSETS.ayanurLayoutAerial,
    //   category: 'updates',
    //   color: '#2563eb', // Blue
    //   columnText: 'ಬೆಂಗಳೂರು: ಬೆಂಗಳೂರು ದಕ್ಷಿಣದ ಪ್ರಮುಖ ವಲಯದಲ್ಲಿ ಮರಕಲ್‌ನ ನೂತನ ಬೃಹತ್ ವಸತಿ ವಿಲ್ಲಾ ಲೇಔಟ್ ಲೋಕಾರ್ಪಣೆಗೊಂಡಿದೆ. ಸುಸಜ್ಜಿತ ರಸ್ತೆಗಳು, ಭೂಗತ ಕೇಬಲ್ ವ್ಯವಸ್ಥೆ ಹಾಗೂ 24 ಗಂಟೆ ಸುರಕ್ಷತಾ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ನಿರ್ಮಾಣವಾಗಿರುವ ಈ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮಧ್ಯಮ ಮತ್ತು ಪ್ರೀಮಿಯಂ ವರ್ಗದ ಜನರನ್ನು ಆಕರ್ಷಿಸುತ್ತಿವೆ. ಉದ್ಯೋಗ ಕೇಂದ್ರಗಳಿಗೆ ಹತ್ತಿರವಿರುವ ಕಾರಣ ಈ ಪ್ರದೇಶದಲ್ಲಿ ಬೇಡಿಕೆ ಹೆಚ್ಚಾಗಿದೆ.',
    // },
    // {
    //   id: 'news-5',
    //   paperName: 'ಕನ್ನಡಪ್ರಭ',
    //   paperSub: 'KANNADA PRABHA',
    //   headline: 'ರಿಯಲ್ ಎಸ್ಟೇಟ್ ರಂಗದಲ್ಲಿ ನಂಬಿಕೆಯ ಮತ್ತೊಂದು ಹೆಸರೇ ಮರಕಲ್ ಇನ್ಫ್ರಾ',
    //   date: 'April 10, 2024',
    //   image: ASSETS.timesAward2025 || ASSETS.grandeurVilla,
    //   category: 'media',
    //   color: '#dc2626', // Red
    //   columnText: 'ಮೈಸೂರು: ಗುಣಮಟ್ಟ ಮತ್ತು ಕಾಲಮಿತಿಯಲ್ಲಿ ಯೋಜನೆ ಪೂರ್ಣಗೊಳಿಸುವುದರಲ್ಲಿ ಮರಕಲ್ ಸಂಸ್ಥೆಯು ದೇಶದಲ್ಲೇ ಮುಂಚೂಣಿಯಲ್ಲಿದೆ. ಇತ್ತೀಚೆಗೆ ನಡೆದ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಗ್ರಾಹಕರ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಬ್ರ್ಯಾಂಡ್ ಎಂದು ಮರಕಲ್ ಇನ್ಫ್ರಾ ಆಯ್ಕೆಯಾಗಿದೆ. ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟದ ಕಚ್ಚಾ ವಸ್ತುಗಳ ಬಳಕೆ ಮತ್ತು ಪಾರದರ್ಶಕ ವ್ಯವಹಾರವೇ ಈ ಅಭೂತಪೂರ್ವ ಯಶಸ್ಸಿಗೆ ಮುಖ್ಯ ಕಾರಣವಾಗಿದೆ.',
    // },
    // {
    //   id: 'news-6',
    //   paperName: 'ಹೊಸ ದಿಗಂತ',
    //   paperSub: 'HOSA DIGANTHA',
    //   headline: 'ಸಂಪೂರ್ಣ ಸುಸಜ್ಜಿತ ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ಮಾದರಿಯ ಲೇಔಟ್ ಪ್ರಕಟಿಸಿದ ಎಂಆರ್‌ಸಿಎಲ್',
    //   date: 'April 05, 2024',
    //   image: ASSETS.sugarlandAerial || ASSETS.dharithriStreet,
    //   category: 'updates',
    //   color: '#16a34a', // Green
    //   columnText: 'ಶಿವಮೊಗ್ಗ: ಶಿವಮೊಗ್ಗದ ಹೆಬ್ಬಾಗಿಲಿನಲ್ಲಿ ಮರಕಲ್ ಸಂಸ್ಥೆಯ ಅತ್ಯಾಧುನಿಕ ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ಮಾದರಿಯ ಬೃಹತ್ ಲೇಔಟ್ ಲೋಕಾರ್ಪಣೆಯಾಗಿದೆ. ಕ್ರೀಡಾಂಗಣಗಳು, ಎಲ್ಇಡಿ ಬೀದಿ ದೀಪಗಳು, ಈಜುಕೊಳ ಸೇರಿದಂತೆ ವಿಶ್ವದರ್ಜೆಯ ಕ್ಲಬ್ ಹೌಸ್ ಸೌಲಭ್ಯಗಳನ್ನು ಈ ಲೇಔಟ್ ಒಳಗೊಂಡಿದೆ. ಪರಿಸರ ಸಮತೋಲನ ಕಾಪಾಡಲು ಸಾವಿರಕ್ಕೂ ಅಧಿಕ ಸಸಿಗಳನ್ನು ನೆಟ್ಟು ಹಸಿರು ವಲಯವನ್ನು ಸೃಷ್ಟಿಸಲಾಗಿದೆ.',
    // },
    // {
    //   id: 'news-7',
    //   paperName: 'ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ',
    //   paperSub: 'SAMYUKTA KARNATAKA',
    //   headline: 'ಭವ್ಯ ಭಾರತದ ಸುಂದರ ಕನಸಿನ ಮನೆಗಳಿಗೆ ಹೊಸ ಆಯಾಮ ನೀಡಿದ ಸಂಸ್ಥೆ',
    //   date: 'March 30, 2024',
    //   image: ASSETS.ayanurStreet || ASSETS.lobbyInterior,
    //   category: 'events',
    //   color: '#0284c7', // Sky Blue
    //   columnText: 'ಬೆಂಗಳೂರು: ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ತನ್ನ 15ನೇ ವಾರ್ಷಿಕೋತ್ಸವ ಸಂಭ್ರಮದಲ್ಲಿದ್ದು, ಹೊಸ ಕೊಡುಗೆಗಳನ್ನು ಗ್ರಾಹಕರಿಗೆ ಪ್ರಕಟಿಸಿದೆ. ಸೀಮಿತ ಅವಧಿಗೆ ಆಯ್ದ ವಿಲ್ಲಾ ಬುಕಿಂಗ್ ಮೇಲೆ ವಿಶೇಷ ರಿಯಾಯಿತಿ ಮತ್ತು ಉಚಿತ ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳನ್ನು ನೀಡುವುದಾಗಿ ಘೋಷಿಸಿದೆ. ಈ ಮೌಲ್ಯಯುತ ಕೊಡುಗೆಗಳ ಲಾಭ ಪಡೆಯಲು ಗ್ರಾಹಕರು ಭಾರಿ ಆಸಕ್ತಿ ತೋರುತ್ತಿದ್ದಾರೆ ಎಂದು ಸಂಸ್ಥೆಯ ಪ್ರಕಟಣೆ ತಿಳಿಸಿದೆ.',
    // },
    // {
    //   id: 'news-8',
    //   paperName: 'ದಿನಮಣಿ',
    //   paperSub: 'DINAMANI',
    //   headline: 'ಅತ್ಯಾಧುನಿಕ ವಾಸ್ತುಶಿಲ್ಪ ಶೈಲಿಯ ಗ್ರೀನ್ ವಿಲ್ಲಾಗಳಿಗೆ ಭಾರಿ ಬೇಡಿಕೆ',
    //   date: 'March 25, 2024',
    //   image: ASSETS.prestigeVilla || ASSETS.eliteVilla,
    //   category: 'media',
    //   color: '#4f46e5', // Indigo
    //   columnText: 'ಬೆಂಗಳೂರು: ಪರಿಸರ ಸ್ನೇಹಿ ಮತ್ತು ಕಡಿಮೆ ಇಂಧನ ಬಳಸುವ ‘ಗ್ರೀನ್ ಬಿಲ್ಡಿಂಗ್’ ತಂತ್ರಜ್ಞಾನ ಆಧರಿಸಿ ಮರಕಲ್ ನಿರ್ಮಿಸುತ್ತಿರುವ ವಿಲ್ಲಾಗಳು ಹೊಸ ಮೈಲಿಗಲ್ಲು ಸ್ಥಾಪಿಸಿವೆ. ಸೋಲಾರ್ ಪವರ್ ಗ್ರಿಡ್, ಪ್ರಕೃತಿ ದತ್ತ ಬೆಳಕು ಮತ್ತು ಶುದ್ಧ ಗಾಳಿ ಸದಾ ಸಂಚರಿಸುವಂತೆ ರೂಪಿಸಲಾಗಿರುವ ಇವು ಪರಿಸರ ಪ್ರೇಮಿಗಳ ಪ್ರಶಂಸೆಗೆ ಕಾರಣವಾಗಿವೆ. ಇದು ಭವಿಷ್ಯದ ವಸತಿ ವ್ಯವಸ್ಥೆಗೆ ಅತ್ಯುತ್ತಮ ದಾರಿದೀಪವಾಗಿದೆ.',
    // },
    // {
    //   id: 'news-9',
    //   paperName: 'ವಿಶ್ವವಾಣಿ',
    //   paperSub: 'VISHWAVANI',
    //   headline: 'ಜನಸಾಮಾನ್ಯರ ಬಜೆಟ್‌ನಲ್ಲಿ ಐಷಾರಾಮಿ ಜೀವನ ಶೈಲಿಯ ವಿಲ್ಲಾಗಳು ಸಿದ್ಧ',
    //   date: 'March 18, 2024',
    //   image: ASSETS.timesAward2025 || ASSETS.sugarlandStreet,
    //   category: 'awards',
    //   color: '#0891b2', // Cyan
    //   columnText: 'ಶಿವಮೊಗ್ಗ: ರಿಯಲ್ ಎಸ್ಟೇಟ್ ವಲಯದಲ್ಲಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಪ್ರೀಮಿಯಂ ವಿಲ್ಲಾಗಳನ್ನು ಖರೀದಿಸಲು ಮರಕಲ್ ಸುವರ್ಣಾವಕಾಶ ಕಲ್ಪಿಸಿದೆ. ಸುಸಜ್ಜಿತ ರಸ್ತೆ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿನ ಪೈಪ್ ಲೈನ್ ಸೇರಿದಂತೆ ಯಾವುದೇ ತೊಂದರೆಯಿಲ್ಲದ ಕಾನೂನು ಬದ್ಧ ಮಾಲೀಕತ್ವದ ಜಮೀನುಗಳನ್ನು ಗ್ರಾಹಕರಿಗೆ ಒದಗಿಸುತ್ತಿದೆ. ಇದರಿಂದಾಗಿ ಶಿವಮೊಗ್ಗದ ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಪ್ರದೇಶಗಳಿಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದಲ್ಲಿ ಈ ಯೋಜನೆಗಳು ಇವೆ.',
    // },
    // {
    //   id: 'news-10',
    //   paperName: 'ಜನಮಿತ್ರ',
    //   paperSub: 'JANAMITRA',
    //   headline: 'ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಪರಿಸರ ಸ್ನೇಹಿ ಲೇಔಟ್ ಪ್ರಕಟಣೆ',
    //   date: 'March 12, 2024',
    //   image: ASSETS.sylvanEventEntrance || ASSETS.sylvanPlotLayout,
    //   category: 'events',
    //   color: '#059669', // Emerald
    //   columnText: 'ಶಿವಮೊಗ್ಗ: ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ ಹೊಂದಿರುವ ಶಿವಮೊಗ್ಗ ಪರಿಸರದಲ್ಲಿ ನೂತನ ಪ್ರೀಮಿಯಂ ಲೇಔಟ್ ಒಂದನ್ನು ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಅನಾವರಣಗೊಳಿಸಿದೆ. ಈ ಲೇಔಟ್‌ನಲ್ಲಿ ಪರಿಸರ ಸಂರಕ್ಷಣೆಗೆ ವಿಶೇಷ ಆದ್ಯತೆ ನೀಡಲಾಗಿದ್ದು, ಹಸಿರು ವಲಯಗಳನ್ನು ಹಾಗೇ ಉಳಿಸಿಕೊಳ್ಳಲಾಗಿದೆ. ಗ್ರಾಹಕರಿಗೆ ಆಧುನಿಕ ಜೀವನಶೈಲಿ ಹಾಗೂ ಸ್ವಚ್ಛ ಪರಿಸರ ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನೀಡಲು ಶ್ರಮಿಸಲಾಗಿದೆ.',
    // },
    // {
    //   id: 'news-11',
    //   paperName: 'ನಮ್ಮ ಕರ್ನಾಟಕ',
    //   paperSub: 'NAMMA KARNATAKA',
    //   headline: 'ವಿಶೇಷ ಆಫರ್: ಈ ಯುಗಾದಿಗೆ ಹೊಸ ಮನೆ ಖರೀದಿಸುವವರಿಗೆ ಭರ್ಜರಿ ಕೊಡುಗೆ',
    //   date: 'March 05, 2024',
    //   image: ASSETS.timesAward2025 || ASSETS.ayanurStreet,
    //   category: 'updates',
    //   color: '#0284c7', // Sky Blue
    //   columnText: 'ಬೆಂಗಳೂರು: ಮರಕಲ್ ಕಂಪನಿಯು ಮುಂಬರುವ ಯುಗಾದಿ ಹಬ್ಬದ ಅಂಗವಾಗಿ ಹೊಸ ವಿಲ್ಲಾ ಹಾಗೂ ಪ್ಲಾಟ್‌ಗಳ ಬುಕಿಂಗ್ ಮೇಲೆ ಬಂಗಾರದ ನಾಣ್ಯ ಮತ್ತು ನಗದು ಕಡಿತದ ಕೊಡುಗೆಯನ್ನು ಘೋಷಿಸಿದೆ. ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಹೂಡಿಕೆಯಾಗಿರುವ ಮರಕಲ್ ಲೇಔಟ್‌ಗಳಲ್ಲಿ ಜಾಗ ಪಡೆದುಕೊಳ್ಳಲು ಸೂಕ್ತ ಸಮಯ ಇದಾಗಿದೆ. ಗ್ರಾಹಕರು ಈ ವಿಶೇಷ ರಿಯಾಯಿತಿಯನ್ನು ಸದುಪಯೋಗ ಪಡಿಸಿಕೊಳ್ಳಲು ಕೋರಲಾಗಿದೆ.',
    // },
    // {
    //   id: 'news-12',
    //   paperName: 'ತಾರಕ ಕನ್ನಡ',
    //   paperSub: 'TARAKA KANNADA',
    //   headline: 'ಗೃಹ ಖರೀದಿದಾರರ ಅತ್ಯಂತ ಪ್ರಥಮ ವಿಶ್ವಾಸಾರ್ಹ ಬ್ರ್ಯಾಂಡ್ ಪಟ್ಟ ಪಡೆದ ಮರಕಲ್',
    //   date: 'February 28, 2024',
    //   image: ASSETS.timesAward2025 || ASSETS.lobbyInterior,
    //   category: 'media',
    //   color: '#be123c', // Rose
    //   columnText: 'ಬೆಂಗಳೂರು: ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಮಾಲೀಕತ್ವ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯಲ್ಲಿ ಮರಕಲ್ ಸಂಸ್ಥೆ ಮತ್ತೊಮ್ಮೆ ಅಗ್ರಸ್ಥಾನದಲ್ಲಿದೆ. ಕಾನೂನು ಬದ್ಧ ಅನುಮೋದನೆ ಪಡೆದ ಭೂಮಿ, ಯಾವುದೇ ವಿವಾದಗಳಿಲ್ಲದ ಸ್ಪಷ್ಟ ದಾಖಲೆ ಪತ್ರಗಳೊಂದಿಗೆ ನುರಿತ ಸಿಬ್ಬಂದಿ ವರ್ಗವು ಪ್ರತಿ ಗ್ರಾಹಕರಿಗೂ ಗೃಹ ಸಾಲದ ಸೌಲಭ್ಯವನ್ನು ಸುಲಭವಾಗಿ ಒದಗಿಸುತ್ತಿದೆ. ಇದರಿಂದಾಗಿ ಮನೆ ಖರೀದಿದಾರರ ಕನಸು ಯಾವುದೇ ಅಡೆತಡೆಯಿಲ್ಲದೆ ನನಸಾಗುತ್ತಿದೆ.',
    // }
  ];

  // Filters news list based on active tab
  const filteredNews = activeTab === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
      {/* ================= 1. NEWS & EVENTS CORPORATE HERO BANNER ================= */}
      <section className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b-2 border-[#c5a85c]">
        
        {/* Ornate world network map graphic in background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

        {/* Dynamic Glowing Accents */}
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#8a1a24] opacity-[0.15] blur-[80px]" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c5a85c] opacity-[0.12] blur-[85px]" />

        {/* Golden decorative corner dots */}
        <div className="absolute right-4 top-8 sm:right-10 sm:top-12 opacity-50 flex gap-1 items-center justify-center pointer-events-none">
          <div className="grid grid-cols-5 gap-1.5">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#c5a85c]" />
            ))}
          </div>
        </div>

        {/* Ornate custom left golden curves */}
        <div className="absolute left-0 top-0 w-[24%] h-full opacity-20 pointer-events-none scale-x-[-1] z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        </div>
        
        {/* Right curves */}
        <div className="absolute right-0 top-0 w-[24%] h-full opacity-20 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroNewsGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="heroNewsGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* TWO PREMIUM ACTIVE GOLD BADGE STAMPS (NEWSPAPER & MEGAPHONE) */}
        <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5 z-10 pointer-events-none">
          {/* Newspaper stamp badge */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c5a85c] via-[#a3802b] to-[#735111] p-[1px] flex items-center justify-center shadow-lg transform rotate-12">
            <div className="w-full h-full bg-gradient-to-br from-[#240103] to-[#120002] rounded-full flex items-center justify-center text-[#c5a85c]">
              <Newspaper className="w-7 h-7" />
            </div>
            {/* Stamp outline dash ring */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a85c]/30" />
          </div>

          {/* Megaphone stamp badge */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c5a85c] via-[#a3802b] to-[#735111] p-[1px] flex items-center justify-center shadow-lg transform -rotate-12 translate-x-2">
            <div className="w-full h-full bg-gradient-to-br from-[#240103] to-[#120002] rounded-full flex items-center justify-center text-[#c5a85c]">
              <Megaphone className="w-7 h-7" />
            </div>
            {/* Stamp outline dash ring */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a85c]/30" />
          </div>
        </div>

        {/* Center Text Header block */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* MRCL Brand Logo Badge on Top Left Area of the Header */}
          <div className="flex flex-col items-center gap-0.5 mb-6 scale-95 sm:scale-100">
            <svg className="w-11 h-11 text-[#c5a85c] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.18)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-xs font-black tracking-[0.28em] leading-none uppercase mt-1">MRCL</span>
            <span className="font-sans text-[6.5px] tracking-[0.32em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#e2c58a] to-[#b5802f] tracking-[0.1em] uppercase leading-tight filter drop-shadow">
            NEWS & EVENTS
          </h1>

          {/* Ornate Gold Dividers */}
          <div className="w-48 sm:w-60 h-6 text-[#c5a85c]/85 flex items-center justify-center my-2.5">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="3" fill="currentColor" />
              <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <p className="font-serif text-stone-300 text-xs sm:text-sm tracking-[0.16em] uppercase font-light italic mt-1 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            STAY INFORMED. STAY AHEAD.
          </p>
        </div>
      </section>

      {/* Main Container - Curving inside with elegant shadow */}
      <section className="relative z-30 -mt-8 sm:-mt-10 bg-[#FAF6F0] rounded-t-[32px] border-t border-[#c5a85c]/30 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* ================= 2. HORIZONTAL TAB FILTERS NAVIGATION BAR ================= */}
        <div className="flex justify-center w-full">
          <div className="inline-flex flex-wrap items-center justify-center bg-[#FFFdfa] border border-[#c5a85c]/40 rounded-full px-2 py-1.5 shadow-md gap-0.5 sm:gap-1 max-w-full">
            {tabs.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  {idx > 0 && (
                    <span className="hidden md:inline text-[#c5a85c]/30 font-light text-sm select-none mx-0.5">|</span>
                  )}
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`cursor-pointer px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                      isActive
                        ? 'bg-[#4a0105] text-white border border-[#c5a85c] shadow-lg scale-103 font-black'
                        : 'bg-transparent text-[#9a7635] hover:text-[#4a0105] hover:bg-[#c5a85c]/10'
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#c5a85c]'}`} />
                    <span>{tab.name}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ================= 3. LATEST NEWS & UPDATES INTRO TEXT ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-3">
            {/* Left flourish scroll */}
            <svg className="w-12 h-3 text-[#c5a85c]" viewBox="0 0 100 12" fill="none" stroke="currentColor">
              <path d="M 100,6 L 10,6 C 25,12 25,0 40,6" strokeWidth="1" />
              <polygon points="100,6 94,3 94,9" fill="currentColor" stroke="none" />
            </svg>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#4a0105] tracking-widest uppercase">
              LATEST NEWS & UPDATES
            </h2>
            {/* Right flourish scroll */}
            <svg className="w-12 h-3 text-[#c5a85c] scale-x-[-1]" viewBox="0 0 100 12" fill="none" stroke="currentColor">
              <path d="M 100,6 L 10,6 C 25,12 25,0 40,6" strokeWidth="1" />
              <polygon points="100,6 94,3 94,9" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <p className="text-stone-600 font-sans text-xs tracking-wider uppercase font-medium">
            Read exclusive columns covering our architectural masterpieces, national recognitions, and corporate announcements
          </p>
        </div>

        {/* ================= 4. NEWS CLIPPINGS GRID - CENTERED ================= */}
        <div className="flex justify-center w-full px-4">
          <motion.div 
            layout
            className="flex flex-wrap justify-center gap-5 sm:gap-6 w-full"
            style={{ 
              maxWidth: '1280px'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news) => {
                const isHovered = hoveredCardId === news.id;
                const isFirst = news.id === 'news-1';
                const borderStyleColor = isHovered ? news.color : (isFirst ? news.color : '#e2e2e2');

                return (
                  <motion.div
                    layout
                    key={news.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedClipping(news)}
                    onMouseEnter={() => setHoveredCardId(news.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    style={{ borderColor: borderStyleColor, width: '100%', maxWidth: '340px' }}
                    className="group relative flex flex-col bg-[#fffdf9] rounded-xl overflow-hidden border-2 cursor-pointer shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* News Card Header Body */}
                    <div className="p-4 flex-grow flex flex-col justify-start space-y-3">
                      
                      {/* Newspaper branding row */}
                      <div className="text-center border-b border-stone-100 pb-2">
                        <h3 
                          className="font-serif text-base sm:text-lg font-black tracking-wide leading-none" 
                          style={{ color: news.color }}
                        >
                          {news.paperName}
                        </h3>
                        <span className="text-[7.5px] font-sans font-extrabold text-stone-400 tracking-[0.25em] leading-none uppercase mt-1 block">
                          {news.paperSub}
                        </span>
                      </div>

                      {/* Newspaper headline in Kannada script */}
                      <div className="min-h-[32px] flex items-center">
                        <p className="font-serif text-[11px] sm:text-xs font-bold text-[#1a0002] leading-snug tracking-wide text-left line-clamp-2 group-hover:text-[#8c1c24] transition-colors">
                          {news.headline}
                        </p>
                      </div>

                      {/* Newspaper Clipping Body simulation (image on left, news text on right) */}
                      <div className="flex gap-2 pt-1.5 border-t border-stone-100 items-start">
                        {/* Aspect Image representing achievements */}
                        <div className="w-[42%] flex-shrink-0 relative aspect-[3/4.2] rounded overflow-hidden bg-stone-900 border border-stone-200/60">
                          <img 
                            src={news.image} 
                            alt={news.paperName} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                        
                        {/* Newspaper dummy justified multi lines */}
                        <div className="flex-grow text-justify font-sans text-[7.5px] leading-relaxed text-stone-500 overflow-hidden line-clamp-[6]">
                          {news.columnText}
                        </div>
                      </div>

                    </div>

                    {/* Maroon Footer with Calendar Date */}
                    <div className="bg-[#4d0206] text-[#FAF6F0] py-2 px-3 flex items-center justify-center gap-1.5 text-[9px] font-mono tracking-wider font-bold border-t border-[#c5a85c]/20 uppercase mt-auto">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a85c] flex-shrink-0" />
                      <span>{news.date}</span>
                    </div>

                    {/* Hover glass magnify button overlay */}
                    <div className="absolute inset-0 bg-[#4d0206]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <div className="bg-[#4d0206] border border-[#c5a85c] text-white px-3 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight className="w-3 h-3 text-[#c5a85c]" />
                        <span>READ ARTICLE</span>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Separator Line */}
        <div className="w-full flex justify-center py-4">
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAF6F0] border border-[#c5a85c] rotate-45" />
          </div>
        </div>

        {/* ================= 5. CENTRAL VIEW MORE NEWS BUTTON ================= */}
        {/* Commented out as per original */}
        {/* <div className="flex justify-center w-full">
          <button
            onClick={() => {
              alert("You are viewing our latest 2024 publications. For complete legacy print archives, contact MRCL PR department.");
            }}
            className="cursor-pointer bg-[#4d0206] hover:bg-[#c5a85c] text-[#e5c78a] hover:text-[#4d0206] border border-[#c5a85c] rounded-xl px-10 py-4 font-bold tracking-[0.2em] text-xs uppercase shadow-md transition-all duration-300 hover:scale-103 group focus:outline-none flex items-center gap-2"
          >
            <span>VIEW MORE NEWS</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div> */}

      </section>

      {/* ================= 6. LIGHTBOX NEWS DETAILS READING MODAL ================= */}
      <AnimatePresence>
        {selectedClipping && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000]/95 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-10">
            
            {/* Close modal on backdrop click */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedClipping(null)} />

            {/* Modal Stage Container */}
            <div className="relative max-w-2xl w-full my-auto z-10 flex flex-col space-y-4 px-2 sm:px-4">

              {/* Elegant Header Bar */}
              <div className="flex items-center justify-between w-full pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-serif text-[10px] sm:text-xs font-bold text-[#c5a85c] tracking-[0.2em] uppercase">
                    News Article
                  </span>
                </div>
                <button
                  onClick={() => setSelectedClipping(null)}
                  className="cursor-pointer group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8c1c24] border border-white/20 text-stone-200 hover:text-white transition-all duration-200"
                  aria-label="Close modal"
                >
                  <span className="text-[9px] font-sans font-bold tracking-wider uppercase">Close</span>
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full bg-[#faf7f2] border-3 border-[#c5a85c] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >

                {/* Newspaper header brand block */}
                <div className="bg-[#240103] p-8 text-center border-b-2 border-[#c5a85c]">
                  
                  {/* Stamp graphic inside modal header */}
                  <div className="inline-block bg-gradient-to-br from-[#c5a85c] to-[#a3802b] text-white p-2 rounded-full mb-3 shadow-md">
                    <Newspaper className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h2 
                    className="font-serif text-3xl sm:text-4xl font-black tracking-wide leading-none"
                    style={{ color: selectedClipping.color }}
                  >
                    {selectedClipping.paperName}
                  </h2>
                  <p className="text-[#c5a85c] font-sans text-xs tracking-[0.25em] font-extrabold uppercase mt-2.5">
                    {selectedClipping.paperSub} • BENGALURU & SHIMOGA EDITION
                  </p>
                  <div className="w-20 h-[1px] bg-[#c5a85c]/40 mx-auto mt-4" />
                  <span className="text-stone-300 font-mono text-xs tracking-wider uppercase block mt-3">
                    PUBLISHED DATE: {selectedClipping.date}
                  </span>
                </div>

                {/* Newspaper article content body layout */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
                  
                  {/* Newspaper main headline */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug tracking-wide border-b border-stone-200 pb-4">
                    {selectedClipping.headline}
                  </h3>

                  {/* Main image with gold border */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-[#c5a85c]/60 shadow-md bg-stone-950">
                    <img 
                      src={selectedClipping.image} 
                      alt="Article moment photo" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Subtitle / intro */}
                  <div className="bg-stone-100 border-l-4 border-[#8c1c24] p-4 rounded-r-xl">
                    <p className="text-stone-700 font-sans text-xs sm:text-sm font-semibold tracking-wide leading-relaxed">
                      ಎಂಆರ್‌ಸಿಎಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಸಂಸ್ಥೆಯು ತನ್ನ ಗುಣಮಟ್ಟ ಮತ್ತು ಕಾಲಮಿತಿಯ ಭರವಸೆಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸುವ ಮೂಲಕ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ನಂಬಿಕಸ್ಥ ಬ್ರಾಂಡ್ ಎಂಬ ಹೆಗ್ಗಳಿಕೆಗೆ ಪಾತ್ರವಾಗಿದೆ.
                    </p>
                  </div>

                  {/* Fully justified multi-paragraph newspaper text content */}
                  <div className="space-y-4 text-stone-800 font-sans text-sm leading-relaxed text-justify tracking-wide">
                    <p>
                      {selectedClipping.columnText}
                    </p>
                    <p>
                      ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಉದ್ಯಮದಲ್ಲಿ ಗ್ರಾಹಕರಿಗೆ ಮೋಸವಾಗದಂತೆ, ಶೇಕಡಾ ನೂರರಷ್ಟು ನೈಜ ದೃಢೀಕರಣ ಮತ್ತು ಕಾನೂನು ಅನುಮೋದನೆ ಪಡೆದ ಜಾಗಗಳನ್ನು ಒದಗಿಸುವುದು ಇಂದಿನ ದಿನಗಳಲ್ಲಿ ಸವಾಲಿನ ಕೆಲಸವಾಗಿದೆ. ಆದರೆ ಮರಕಲ್ ಇನ್ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ತಂಡವು ಪ್ರಾರಂಭದಿಂದಲೂ ಪಾರದರ್ಶಕತೆಗೆ ಮೊದಲ ಆದ್ಯತೆ ನೀಡಿದೆ. ಬೆಂಗಳೂರಿನಲ್ಲಿ ವೇಗವಾಗಿ ಅಭಿವೃದ್ಧಿ ಹೊಂದುತ್ತಿರುವ ಬನ್ನೇರುಘಟ್ಟ ಹಾಗೂ ಕೊಪ್ಪ ಗೇಟ್ ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿ ನಿರ್ಮಿಸುತ್ತಿರುವ ವಿಶಾಲವಾದ ರಸ್ತೆಗಳು, ಸುಸಜ್ಜಿತ ಒಳಚರಂಡಿ ಸೌಲಭ್ಯ, ಸುಂದರ ಕ್ಲಬ್ ಹೌಸ್ ಸೌಲಭ್ಯಗಳು ಭವಿಷ್ಯದ ಜೀವನಶೈಲಿಗೆ ಪೂರಕವಾಗಿವೆ.
                    </p>
                    <p>
                      ಮತ್ತೊಂದೆಡೆ, ಮಲೆನಾಡಿನ ಹೆಬ್ಬಾಗಿಲಾದ ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಪರಿಸರ ಸ್ನೇಹಿ ಗ್ರೀನ್ ಲೇಔಟ್‌ಗಳನ್ನು ಕಲ್ಪಿಸಿರುವ ಸಂಸ್ಥೆಯು ಮರಗಳನ್ನು ಕತ್ತರಿಸದೆಯೇ ಪ್ರಕೃತಿ ಸ್ನೇಹಿ ವಸತಿ ಸಂಕೀರ್ಣಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿದೆ. ಮುಂದಿನ ಐದು ವರ್ಷಗಳಲ್ಲಿ ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ನಗರಗಳಲ್ಲೂ ಸಂಸ್ಥೆ ತನ್ನ ನೂತನ ವಸತಿ ಯೋಜನೆಗಳನ್ನು ವಿಸ್ತರಿಸಲು ಬೃಹತ್ ಕಾರ್ಯಯೋಜನೆ ರೂಪಿಸುತ್ತಿದೆ. ವಿವರವಾದ ಮಾಹಿತಿ ಮತ್ತು ಸ್ಥಳ ಪರಿಶೀಲನೆಗೆ ಬುಕಿಂಗ್ ಲಭ್ಯವಿದೆ.
                    </p>
                  </div>

                </div>

                {/* Modal footer action */}
                <div className="bg-stone-100 p-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-[10px] font-black text-stone-500 tracking-wider uppercase font-sans">
                    MRCL PRESS INFORMATION AGENCY
                  </span>
                  <button
                    onClick={() => setSelectedClipping(null)}
                    className="cursor-pointer bg-[#4d0206] hover:bg-[#8c1c24] text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase shadow transition-all duration-300"
                  >
                    CLOSE ARTICLE
                  </button>
                </div>

              </motion.div>

            </div>

          </div>
        )}
      </AnimatePresence>

      {/* ================= 7. FOOTER SLOGAN STRIP ================= */}
      <section className="bg-[#250205] py-14 text-[#FAF6F0] border-t-2 border-[#c5a85c] relative text-center">
        
        {/* Subtle lobby pattern overlay inside banner */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} 
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          
          {/* Ornate gold scrollwork header */}
          <div className="w-32 h-5 text-[#c5a85c]/85 flex items-center justify-center my-1 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="3" fill="currentColor" />
              <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#c5a85c] tracking-[0.25em] uppercase leading-relaxed">
            BUILDING TODAY FOR A BETTER TOMORROW
          </h3>
          
          {/* Micro gold scroll */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c]/50 to-transparent mx-auto relative mt-2.5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5a85c] rotate-45" />
          </div>

        </div>
      </section>

    </div>
  );
}