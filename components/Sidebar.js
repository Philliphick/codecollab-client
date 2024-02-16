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
      <div className="p-4 bg-gradient-to-br from-gray-500 to-gray-700 min-h-screen items-center justify-center text-center ">
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded">Add Project</button>
        {/* <h2 className="text-lg mb-2">Filter:</h2> */}
        {/* <h3>Programming language</h3> */}
        <div className="flex flex-col space-y-4 my-6">
          {languages.map(({ name, image }) => (
            <div key={name} className={`p-1 items-center justify-center mx-auto cursor-pointer w-50 h-50 ${selectedLanguages.includes(name) ? 'border-2 border-blue-500' : 'border-none'}`} onClick={() => handleLanguageClick(name)}>
              <Image src={image} alt={name} width={50} height={50} />
            </div>
          ))}
        </div>
        <a href="/api/auth/login" className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded'>Login</a>
      </div>
    </div>
  );
}

export default Sidebar;