import React from 'react';
import {languages} from '../../src/languages';
import Image from 'next/image';

function Sidebar({ selectedLanguages, setSelectedLanguages }) {
  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-gray-500 to-gray-700 min-h-screen items-center justify-center text-center ring-1 ring-gray-500">
        
        {/* <h2 className="text-lg mb-2">Filter:</h2> */}
        {/* <h3>Programming language</h3> */}
        <div className="">
        <div className="flex flex-col justify-between min-h-screen px-2 py-4">
          {languages.map(({ name, image }) => (
            <div key={name} className={`p-1 items-center justify-center mx-auto cursor-pointer w-50 h-50 ${selectedLanguages.includes(name) ? 'scale-110 animate-pulse focus' : 'border-none'}`} onClick={() => handleLanguageClick(name)}>
              <Image src={image} alt={name} width={50} height={50} className="hover:scale-125 transition duration-100" />
              
            </div>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;