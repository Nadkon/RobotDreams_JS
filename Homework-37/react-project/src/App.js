import './App.css';

export function Photo(props) {
  return (
    <div className='img'>
      <h1>Nadiia Kononykhina</h1>
      <img src={props.src} className="photo" alt="photo" />
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className='contact'>
      <h2>Contact information</h2>
      <h3>Address</h3>
      <span className="element"> Kyiv, Ukraine</span>
      <h3>Phone</h3>

      <span className="element">
        <a href="tel:+380999030943"></a>+380999030943
      </span>
      <h3>E-mail</h3>

      <span className="element">
        <a href="mailto:nadkon@gmail.com">nadkon@gmail.com</a>
      </span>
    </div>
  );
}

export function GetExperience() {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <div className="work-place">
        <p>
          <span className="bold">Name of employer:</span> Worldwide Clinical
          trials
        </p>
        <p>
          <span className="bold">Dates of employment:</span> 2005 to present
        </p>
        <p>
          <span className="bold">Job title:</span> Depot Manager
        </p>
      </div>
      <div className="work-place previous-experience">
        <p>
          <span className="bold">Name of employer:</span> East Site Management
          and Research
        </p>
        <p>
          <span className="bold">Dates of employment:</span> 2004 - 2005
        </p>
        <p>
          <span className="bold">Job title:</span> Office-Manager, Regulatory
          Affairs Associate
        </p>
      </div>
    </div>
  );
}




