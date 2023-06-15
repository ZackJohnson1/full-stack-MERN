import { React } from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to my full stack MERN Application!</h1>
      <p>
        This website is built using MERN, an end-to-end, full-stack JavaScript based framework. MERN is an acronym for MongoDB, Express.js, React.js, and Node.js.
      </p>
      <p>
        MongoDB, a NoSQL database, stores the application data. Express.js is a minimal web application framework that handles the server-side logic. React.js is a JavaScript library for building user interfaces that powers the frontend of the application. Finally, Node.js is a runtime environment that executes the server-side JavaScript code.
      </p>
      <p>
        In addition to these core technologies, I have employed several other tools and techniques for optimal development. I have made use of React's built-in hooks like useState and useEffect for state management and side effects handling. I've also utilized react-router-dom's useNavigate hook for smooth navigation throughout the application.
      </p>
    </div>
  );
}

export default HomePage;
