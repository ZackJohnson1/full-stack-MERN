import { React } from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to my full stack MERN Application!</h1>
      <p>
        This website is built using the MERN stack, an end-to-end, full-stack JavaScript solution. MERN is an acronym for MongoDB, Express.js, React.js, and Node.js.
      </p>
      <p>
        MongoDB, a NoSQL database, stores our application data. Express.js is a minimal web application framework that handles our server-side logic. React.js, a JavaScript library for building user interfaces, powers the frontend of our application. Finally, Node.js is a runtime environment that executes our server-side JavaScript code.
      </p>
      <p>
        In addition to these core technologies, we've employed several other tools and techniques for optimal development. We've made use of React's built-in hooks like useState and useEffect for state management and side effects handling. We've also utilized react-router-dom's useNavigate hook for smooth navigation throughout the application.
      </p>
    </div>
  );
}

export default HomePage;
