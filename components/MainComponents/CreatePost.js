'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { languages } from '../../src/languages';
import Image from 'next/image';
import ApiClient from '@/utils/ApiClient';

const apiClient = new ApiClient();

export const MakePost = () => {
  const [formData, setFormData] = useState({ name: '', description: '', repoLink: '', tags: []});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageClick = (language) => {
    if (formData.tags.includes(language)) {
      setFormData({ ...formData, tags: formData.tags.filter(tag => tag !== language) });
    } else {
      setFormData({ ...formData, tags: [...formData.tags, language] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, subheading, description, repoLink, tags } = formData;
      const response = await apiClient.makePost({ name, subheading, description, repoLink, tags });
      console.log(response);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

 
  


  return (
    <div className="w-full p-4 ring-1 ring-orange-700 bg-gradient-to-br from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% text-white shadow-2xl rounded mx-auto">
      <h1 className="text-center text-3xl font-bold mb-4">CREATE A PROJECT</h1>
      {submitted && <div className="text-green-500 mb-4">Your project has been submitted!</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold mb-1">Project Name</label>
          <input type="text" style={{ color: 'black' }} name="name" id="name" className="appearance-textfield p-2 border rounded" onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subheading" className="font-bold mb-1">Subheading</label>
          <input type="text" style={{ color: 'black' }} name="subheading" id="subheading" className="appearance-textfield p-2 border rounded" onChange={handleChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-bold mb-1">Description</label>
          <input type="text" style={{ color: 'black' }} name="description" id="description" className="p-2 border rounded" onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="repoLink" className="font-bold mb-1">Repo Link</label>
          <input type="text" style={{ color: 'black' }} name="repoLink" id="repoLink" className="p-2 border rounded" onChange={handleChange} />
        </div>
        <div className="flex space-x-4">
          {languages.map(({ name, image }) => (
            <div key={name} className={`p-1 border rounded cursor-pointer ${formData.tags.includes(name) ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => handleLanguageClick(name)}>
              <Image src={image} alt={name} width={50} height={50} />
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="timeframe" className="font-bold mb-1">Timeframe</label>
          <select name="timeframe" id="timeframe" className="p-2 border rounded" onChange={handleChange}>
            <option value="1">1 week</option>
            <option value="2">2 - 4 weeks</option>
            <option value="3">1 - 2 months</option>
            <option value="4">3 months</option>
          </select>
        </div> */}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out">Submit</button>
      </form>
    </div>
  );
  

  // return (
  //   <div className="items-center justify-center w-full p-4 bg-gray-200 shadow-2xl rounded mx-auto">
  //     <h1>Create a Project</h1>
  //     {submitted && <div className="text-green-500">Your project has been submitted!</div>}
  //     <form onSubmit={handleSubmit}>
  //       <div className="mb-2 font-bold">
  //         Project Name 
  //         <input type="text" name="name" className="ml-2 p-1 border rounded" onChange={handleChange} />
  //       </div>
  //       <div className="mb-2">
  //         Description
  //         <input type="text" name="description" className="ml-2 p-1 border rounded" onChange={handleChange} />
  //       </div>
  //       <div className="mb-2 font-bold">
  //         Repo Link
  //         <input type="text" name="repoLink" className="ml-2 p-1 border rounded" onChange={handleChange} />
  //       </div>
  //       <div className="flex space-x-4">
  //         {languages.map(({ name, image }) => (
  //           <div key={name} className={`p-1 ${formData.tags.includes(name) ? 'border-2 border-blue-500' : 'border border-gray-300'}`} onClick={() => handleLanguageClick(name)}>
  //             <Image src={image} alt={name} width={50} height={50} />
              
  //           </div>
  //         ))}
  //       </div>
  //       <div className="mb-2">
  //         Timeframe
  //         <select name="timeframe" className="ml-2 p-1 border rounded" onChange={handleChange}>
  //           <option value="1">1 week</option>
  //           <option value="2">2 - 4 weeks</option>
  //           <option value="3">1 - 2 months</option>
  //           <option value="4">3 months</option>
  //         </select>
  //       </div>
  //       <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
  //     </form>
  //   </div>
  // );
};

export default MakePost;