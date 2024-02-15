'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { languages } from '../src/languages';
import Image from 'next/image';

export const MakePost = () => {
  const [formData, setFormData] = useState({ name: '', description: '', repoLink: '', tags: [], timeframe: '' });
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
      const response = await axios.post('http://localhost:5001/makePost', formData);
      console.log(response.data);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h1>Create a Project</h1>
      {submitted && <div className="text-green-500">Your project has been submitted!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2 font-bold">
          Project Name 
          <input type="text" name="name" className="ml-2 p-1 border rounded" onChange={handleChange} />
        </div>
        <div className="mb-2">
          Description
          <input type="text" name="description" className="ml-2 p-1 border rounded" onChange={handleChange} />
        </div>
        <div className="mb-2 font-bold">
          Repo Link
          <input type="text" name="repoLink" className="ml-2 p-1 border rounded" onChange={handleChange} />
        </div>
        <div className="flex space-x-4">
          {languages.map(({ name, image }) => (
            <div key={name} className={`p-1 ${formData.tags.includes(name) ? 'border-2 border-blue-500' : 'border border-gray-300'}`} onClick={() => handleLanguageClick(name)}>
              <Image src={image} alt={name} width={50} height={50} />
              
            </div>
          ))}
        </div>
        <div className="mb-2">
          Timeframe
          <select name="timeframe" className="ml-2 p-1 border rounded" onChange={handleChange}>
            <option value="1">1 week</option>
            <option value="2">2 - 4 weeks</option>
            <option value="3">1 - 2 months</option>
            <option value="4">3 months</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default MakePost;