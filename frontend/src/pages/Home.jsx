import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
         <div className="bg-gray-100 min-h-screen">      
      <div className="bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Professor's Portfolio</h1>
        <p className="text-lg md:text-xl mt-4">
          Showcasing Research, Publications, and Achievements
        </p>
        
      </div>

    
      <section className="max-w-5xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          About Myself
        </h2>
        <p className="text-gray-700 text-lg mt-4 text-center">
          An experienced academic professional specializing in research, teaching, 
          and innovation. Passionate about guiding students and making significant 
          contributions to the academic community.
        </p>
      </section>

      
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 my-12 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">📚 Research Papers</h3>
          <p className="text-gray-600 mt-2">
            Published multiple research papers in renowned journals and conferences.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">🎓 Teaching Experience</h3>
          <p className="text-gray-600 mt-2">
            More than 15 years of experience teaching undergraduate and postgraduate students.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">🏆 Achievements</h3>
          <p className="text-gray-600 mt-2">
            Recipient of multiple academic awards for excellence in research and education.
          </p>
        </div>
      </section>
    </div>


      



    </div>
  )
}

export default Home
