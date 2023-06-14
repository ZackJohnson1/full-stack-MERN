import React from 'react';

function TopicsPage() {
  return (
      <main>
          <nav id="local-nav">
              <ul>
                  <a href="#web-servers">Web Development Concepts</a>
                  <a href="#frontend-design">Frontend Design</a>
                  <a href="#optimizing-images">Optimizing Images</a>
                  <a href="#CSS-basics">CSS Stylesheets</a>
                  <a href="#Java-basics">JavaScript Basics</a>
              </ul>
          </nav>
      <section>
        <h2>Web Development Concepts</h2>
        <article>
          <h3 id="web-servers">Web Servers</h3>
          <p>An <strong>index.html</strong> file in the context of web development is a website’s default page and/or home page that is hosted on an <strong>Apache</strong> web server. Other server platforms may employ different names, for example, the .NET platform uses <strong>default.html</strong> as the homepage.</p>
          <p>There are several differences between the file’s network details on a <strong>web server</strong> versus a <strong>local computer</strong>. On my local computer the network tab shows that the get request for index.html was successful, however for <strong>main.css</strong> and <strong>main.js</strong> there is no error code in the <strong>header</strong> window. On the <strong>web server</strong>, both <strong>main.css</strong> and <strong>main.js</strong> has 404 error codes, indicating that the resources were not found. The <strong>executor.js</strong> details also appear on the web server, but it does not appear on the local file. On the web server, executor.js  has a status code of 200 (Ok). Lastly, the web server includes a <strong>favicon.ico</strong>, which is the browser icon for the OSU College of Engineering.</p>
          <p>The <strong>favicon.ico</strong> file has a status code of 200 which indicates that it was successful. Both the <strong>main.css</strong> and <strong>main.js</strong> files returned a <strong>404 Not Found</strong> error. This error is due to the <strong>main.css</strong> and <strong>main.js</strong> files not being available on the server. </p>
          <p>My full URL is https://web.engr.oregonstate.edu/~johnsza5/a1-johnsza5/. The <strong>scheme</strong> is <strong>HTTPS</strong>. The <strong>subdomains</strong> are <strong>web.engr</strong>. The <strong>domain</strong> is <strong>oregonstate.edu</strong>. The <strong>resource</strong> includes the folder/ file name, which is <strong>/~johnsza5/a1-johnsza5/</strong>.</p>
        </article>
        <article>
          <h3 id="frontend-design">Frontend Design</h3>
          <p>First and foremost, <strong>frontend design</strong> is primarily focused on optimizing the user’s experience. Frontend Design incorporates various elements such as the design and layout of the webpage, the graphical user interface (GUI) and considers the interactive experience of the user. </p>
          <dl>
            <dt><strong>The 5 E's of Usability</strong></dt>
            <dt><strong>Effective</strong></dt>
            <dd>A platform or product is effective if it helps users meet their goals and provides accurate results.</dd>

            <dt><strong>Efficient</strong></dt>
            <dd>A platform or product is efficient if it allows users to perform tasks with the least number of steps and provides results quickly.</dd>

            <dt><strong>Easy to Navigate</strong></dt>
            <dd>A platform or product is easy to navigate if users can easily locate their goals by clicking or searching and can remember how to do so in the future.</dd>

            <dt><strong>Error-Free</strong></dt>
            <dd>A platform or product is error-free if it avoids accessibility and availability issues by learning how users commonly create errors.</dd>

            <dt><strong>Enjoyable to Use</strong></dt>
            <dd>A platform or product is enjoyable to use if it fits the unique needs of the intended audience in content and design, encouraging users to come back and use it again.</dd>
        </dl>
          <p><strong>Page layout tags</strong> are <strong>block-level elements</strong> that serve to break up the content flow of a webpage. Page layout tags are usually displayed in the browser with a <strong>newline</strong> separating it from other page layout tags. Most standard webpages include page layout tags such as the <strong>header, nav, main, section, article, asides,</strong> and a <strong>footer</strong>.</p>
          <p>The <strong>anchor element</strong> is used to create a link from one part of a webpage/website to another. Inside the anchor element symbols, the <strong>href</strong> attribute is used to provide the URL for the destination link. Links can be created using both <strong>absolute URLs</strong> and <strong> relative URLs</strong>.</p>
        </article>
        <article>
          <h3 id="optimizing-images">Optimizing Images</h3>
          <p>The 6 major specifications of images for web development include having a descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and color mode. Descriptive file names serve to improve search engine optimization or “SEO.” Small file sizes and having the exact dimensions help improve the loading time. Ensuring that files are in the correct format is also an extremely important part of the process for optimizing images. .GIF, .PNG, and .SVG are commonly used for line art, whereas .JPEG and .WebP are optimized for photos. Reducing the resolution for low resolution monitors can also be beneficial. Lastly, color mode can also be used to optimize images with RGB for .PNG, .JPEG, .SVG, and .WebP, and indexed for .GIF.</p>
          <h3 id="CSS-basics">CSS Stylesheets</h3>
          <p>The main reasons to incorporate stylesheets (CSS) are because they help define the content, components, and overall structure of a website looks, as well as improving the usability, readability, legibility and if needed, to fulfill any brand requirements. The five ways to incorporate styles are with CSS stylesheets, to embed them within a style tag, or inline within an element using an attribute and value, with JavaScript template literals, or in regular JavaScript by manipulating the Document Object Model (DOM).</p>
        </article>
        <article>
          <h3 id="Java-basics">JavaScript Basics</h3>
          <p>JavaScript’s main data types are numbers, boolean values, strings, symbols, objects, and special values such as undefined, null and NaN. In JavaScript, an object is a set of name-value pairs, and the names of those pairs are called “properties.” Arrays in JavaScript are also objects, however in the case of arrays, the properties are indexed numerically starting from 0. It is important to note that while arrays in JavaScript are indexed numerically, the properties are stored as strings. JSON is short for JavaScript Object Notation, which is one of the most widely utilized formats for exchanging data. It is essential to remember that although it has JavaScript in the name, JSON files is programming language independent. The two most common methods for operating on JSON files in JavaScript are the stringify and parse methods. Conditionals and loops are used for decision-making and repetition in JavaScript programming. JavaScript supports conditional branching by utilizing “if” and “switch” statements. JavaScript is an object-oriented language, which means that it uses objects to represent and manipulate data even though it does not rely heavily on classes. Functional programming is also supported in JavaScript, which involves creating functions that are used to perform specific tasks and can be reused throughout the program. In JavaScript, we can use first-class values to assign functions to variables, define functions that receive other functions as arguments, and to define functions that return functions. </p>
        </article>
      </section>
        </main>
    );
}

export default TopicsPage;