// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import "../assets/Button.css";
// import toast, { Toaster } from 'react-hot-toast';
// // import axios from "axios";
// const id = Cookies.get("id");
// import { Link, useNavigate } from "react-router-dom";
// import url from '../url';

// const Update = () => {
//   const [reloadPage, setReloadPage] = useState(false);
//   const navigate = useNavigate();
//   // const [iid, setIid] = useState('');
//   useEffect(() => {
//     if (!id && !reloadPage) {
//       // Check if id is not available and page reload is not done
//       setReloadPage(true); // Set reloadPage to true to indicate page reload
//       window.location.reload();
//     }
//   }, [id, reloadPage]);


//   const [formData, setFormData] = useState({
//     id: id,
//     Nitrogen: "",
//     Phosphorus: "",
//     Potassium: "",
//     Temperature: "",
//     Humidity: "",
//     pH: "",
//     Rainfall: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(formData);

//       const response = await fetch(`${url}/datatoml`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const predictdata = await response.json();
//       console.log(predictdata.Crop1);

//       const datatoapi = await fetch(`${url}/data`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const detailsdata = await datatoapi.json();
//       console.log(detailsdata.message);

//       toast.success(detailsdata.message,{
//         onClose: setTimeout(function () { navigate("/"); }, 1500)
//     });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="soil_container" style={{height:"200%"}}>
//       <h3>
//         Crop Recommendation System{" "}
//         <span role="img" aria-label="plant">
//           🌱
//         </span>
//       </h3>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="Nitrogen"
//               name="Nitrogen"
//               placeholder="Enter Nitrogen"
//               className="form-control"
//               value={formData.Nitrogen}
//               onChange={handleChange}
//               min={"0"}
//               max={"150"}
//               required
//             />
//             <label htmlFor="Nitrogen">&nbsp;Nitrogen </label>
//           </div>
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="Phosphorus"
//               name="Phosphorus"
//               placeholder="Enter Phosphorus"
//               className="form-control"
//               value={formData.Phosphorus}
//               onChange={handleChange}
//               min={"0"}
//               max={"150"}
//               required
//             />
//             <label htmlFor="Phosphorus">&nbsp;Phosphorus </label>
//           </div>
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="Potassium"
//               name="Potassium"
//               placeholder="Enter Potassium"
//               className="form-control"
//               value={formData.Potassium}
//               onChange={handleChange}
//               min={"0"}
//               max={"250"}
//               required
//             />
//             <label htmlFor="Potassium">&nbsp;Potassium </label>
//           </div>
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="Temperature"
//               name="Temperature"
//               placeholder="Enter Temperature"
//               className="form-control"
//               value={formData.Temperature}
//               onChange={handleChange}
//               min={"0"}
//               max={"50"}
//               required
//             />
//             <label htmlFor="Temperature">&nbsp;Temperature </label>
//           </div>
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="Humidity"
//               name="Humidity"
//               placeholder="Enter Humidity"
//               className="form-control"
//               value={formData.Humidity}
//               onChange={handleChange}
//               min={"10"}
//               max={"100"}
//               required
//             />
//             <label htmlFor="Humidity">&nbsp;Humidity </label>
//           </div>
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="pH"
//               name="pH"
//               placeholder="Enter pH"
//               className="form-control"
//               value={formData.pH}
//               onChange={handleChange}
//               min={"2"}
//               max={"10"}
//               required
//             />
//             <label htmlFor="pH">&nbsp;pH </label>
//           </div>
//           <div className="form-floating col-md-6 mt-3">
//             <input
//               type="number"
//               id="Rainfall"
//               name="Rainfall"
//               placeholder="Enter Rainfall"
//               className="form-control"
//               value={formData.Rainfall}
//               onChange={handleChange}
//               min={"15"}
//               max={"300"}
//               required
//             />
//             <label htmlFor="Rainfall">&nbsp;Rainfall </label>
//           </div>
//           <div className="col-md-6 mt-3">
//             <button className="btn-hover color-1">Update Details</button>
//           </div>
//         </div>

//         <div className="row mt-4"></div>
//       </form>
      
      
//       <Toaster />
//     </div>
//   );
// };

// export default Update;

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import url from '../url';
import "../assets/Button.css";

const id = Cookies.get("id");

const Update = () => {
  const [reloadPage, setReloadPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id && !reloadPage) {
      setReloadPage(true);
      window.location.reload();
    }
  }, [id, reloadPage]);

  const [formData, setFormData] = useState({
    id: id,
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/datatoml`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const detailsdata = await response.json();
      toast.success(detailsdata.message, {
        onClose: setTimeout(function () { navigate("/"); }, 1500)
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Set body background image in a useEffect
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/09/09/19/07/corn-field-440338_1280.jpg')"; // Change this to your image path
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh"; // Optional: ensures body height is full
    document.body.style.margin = "0"; // Remove default margin

    // Cleanup function to reset styles when the component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.height = "";
      document.body.style.margin = "";
    };
  }, []);

  return (
    <div className="soil_container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "Black" }}>
      <h3 style={{ textAlign: "center" }}>
        Crop Recommendation System{" "}
        <span role="img" aria-label="plant">🌱</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH', 'Rainfall'].map((field) => (
            <div className="form-floating col-md-6 mt-3" key={field}>
              <input
                type="number"
                id={field}
                name={field}
                placeholder={`Enter ${field}`}
                className="form-control"
                value={formData[field]}
                onChange={handleChange}
                min={"0"}
                max={field === 'pH' ? "10" : "300"} // Adjust max based on field
                required
              />
              <label htmlFor={field}>&nbsp;{field} </label>
            </div>
          ))}
          <div className="col-md-6 mt-3">
            <button className="btn-hover color-1">Update Details</button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Update;
