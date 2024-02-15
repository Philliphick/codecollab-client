import React from 'react';
import {languages} from '../src/languages';
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
      <div className="p-4 bg-gray-200 min-h-screen">
        <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded">Create Project</button>
        <h2>Filter Projects</h2>
        <h3>Programming language</h3>
        <div className="flex flex-col space-y-4">
          {languages.map(({ name, image }) => (
            <div key={name} className={`p-1 ${selectedLanguages.includes(name) ? 'border-2 border-blue-500' : 'border border-gray-300'}`} onClick={() => handleLanguageClick(name)}>
              <Image src={image} alt={name} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;