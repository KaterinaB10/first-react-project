import "./index.css";

// function MyComponent() {
// svg
// }

function GreetingName(properties) {
  return <p>Hello {properties.name} </p>;
}
// I should put it in one line

// function Greeting() {
//   const name = "Kate";
//   return `Hello, ${name}`;
// }

function App() {
  // return <h1>Hello</h1>;
  return (
    // React.Fragment
    <div className="app">
      <header className="header">
        <h1>Hello</h1>
      </header>
      <main className="main">
        <h2>Hello</h2>
        <GreetingName name="Kate" />
        {/* <MyComponent /> */}
      </main>

      <section>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>

      <footer className="footer">
        <h1>Hello</h1>
      </footer>
    </div>
  );
}

export default App;
