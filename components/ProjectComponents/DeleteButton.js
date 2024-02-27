import React from 'react';
import axios from 'axios';

const DeletePost = ({ _id }) => {
  const deletePost = async () => {
    try {
      console.log(_id);
      const response = await axios.delete(`http://localhost:5001/project/delete/${_id}`, { withCredentials: true });
      console.log(response.data); // Log the response if needed
      // You can add further logic here if the deletion was successful
      window.location.reload();
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };

  return (
    <div onClick={deletePost} className="bg-[#7A2410] hover:bg-red-800 text-white text-sm font-bold py-2 px-4 m-2 rounded">
      <button>Delete</button>
    </div>
  );
};

export default DeletePost;


// import React, { useEffect } from 'react';
// import axios from 'axios';

// const DeletePost = ({ _id }) => {
//   const deletePost = async (_id) => {
//     try {
//       console.log(_id);
//       const response = await axios.delete(`http://localhost:5001/project/delete/${_id}`, { withCredentials: true });
//       console.log(response.data); // Log the response if needed
//       return response.data; // Return response data containing status and message
//     } catch (error) {
//       console.error(error);
//       throw error; // Re-throw the error to be caught by the caller
//     }
//   };

//   useEffect(() => {
//     deletePost(_id); // Trigger deletion when component mounts

//     // You might want to return a cleanup function if needed
//   }, [_id]); // Dependency array ensures the effect runs when _id changes

//   return (
//     <div onClick={() => deletePost(_id)} className="bg-[#7A2410] hover:bg-red-800 text-white text-sm font-bold py-2 px-4 m-2 rounded">
//       <button>Delete</button>
//     </div>
//   );
// };

// export default DeletePost;
