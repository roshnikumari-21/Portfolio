// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Conferences = () => {
//   const [conferences, setConferences] = useState([]);

//   useEffect(() => {
//     const fetchConferences = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/conferences");
//         setConferences(response.data);
//       } catch (error) {
//         console.error("Error fetching conferences:", error);
//       }
//     };
//     fetchConferences();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4 text-gray"> <i className="fa-solid fa-bullhorn"></i> Conferences</h2>
//       {conferences.length === 0 ? <p>No conferences available.</p> : (
//         // <ul className="list-group">
//         <ol className="list-group list-group-numbered">
//           {conferences.map((conf) => (
//             <li key={conf._id} className="list-group-item ">
//               <h5 className="text-primary">{conf.name}</h5>
//               <p ><i className="fa-solid fa-map-marker-alt text-danger"></i><strong> Location:</strong> {conf.location}</p>
//               <p><i className="fa-solid fa-calendar-days text-success"></i><strong>  Date:</strong> {new Date(conf.date).toLocaleDateString()}</p>
//               <p><i className="fa-solid fa-users text-muted"></i><strong>  Co-Authors:</strong> {conf.coAuthors.join(", ")}</p>
//               <p>{conf.summary}</p>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default Conferences;



import React, { useState, useEffect } from "react";
import axios from "axios";

const Conferences = () => {
  const [conferences, setConferences] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  // Fetch conferences with query parameters
  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (search) queryParams.append("search", search);
        if (location) queryParams.append("location", location);
        if (date) queryParams.append("date", date);

        const response = await axios.get(`http://localhost:5000/api/conferences?${queryParams.toString()}`);
        setConferences(response.data);
      } catch (error) {
        console.error("Error fetching conferences:", error);
      }
    };
    fetchConferences();
  }, [search, location, date]); // Refetch when filters change

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">
        <i className="fa-solid fa-bullhorn"></i> Conferences
      </h2>

      {/* Search and Filter Form */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or summary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Display Conferences */}
      {conferences.length === 0 ? (
        <p className="text-center">No conferences found.</p>
      ) : (
        <ol className="list-group list-group-numbered">
          {conferences.map((conf) => (
            <li key={conf._id} className="list-group-item p-3 shadow-sm">
              <h5 className="text-primary">{conf.name}</h5>
              <p><i className="fa-solid fa-map-marker-alt text-danger"></i> <strong>Location:</strong> {conf.location}</p>
              <p><i className="fa-solid fa-calendar-days text-success"></i> <strong>Date:</strong> {new Date(conf.date).toLocaleDateString()}</p>
              <p><i className="fa-solid fa-users text-info"></i> <strong>Co-Authors:</strong> {conf.coAuthors.join(", ")}</p>
              <p>{conf.summary}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Conferences;

