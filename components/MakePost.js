'use client'  
import React, { useState } from 'react';
import axios from 'axios';

export const MakePost = () => {
  const [formData, setFormData] = useState({ name: '', description: '', repoLink: '', tags: [], timeframe: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setFormData({ ...formData, tags: [...formData.tags, e.target.value] });
    } else {
      setFormData({ ...formData, tags: formData.tags.filter(tag => tag !== e.target.value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/makePost', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h1>Create a Project</h1>
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
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="tags" value="JS" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleCheckboxChange} />
            <span>JS</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="tags" value="Python" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleCheckboxChange} />
            <span>Python</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="tags" value="Java" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleCheckboxChange} />
            <span>Java</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="tags" value="PHP" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleCheckboxChange} />
            <span>PHP</span>
          </label>
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