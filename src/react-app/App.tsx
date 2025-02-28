import './App.css';
import Animation from './Animation';

function App() {
  return (
    <div className="website-container">
      <div className="gradient-background"></div>
      
      <main className="content">
        <div className="logo-container">
          <div className="emoji">😻</div>
          <h1 className="site-title">wind.cat</h1>
        </div>
        
        <p className="site-description">
          wind.cat is under construction! The purpose of the site is to provide updates and information about an in-progress AI system.
        </p>
        
        <div className="wow-animation-wrapper">
          <Animation />
        </div>
        
        <footer className="contact-info">
          Contact: <a href="mailto:lizziemachine@gmail.com">lizziemachine@gmail.com</a>
        </footer>
      </main>
    </div>
  );
}

export default App;