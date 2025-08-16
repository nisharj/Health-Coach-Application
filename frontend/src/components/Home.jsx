import "./styles/index.css";
import introBg from "./Assets/intro1.webp";
import logo from "./Assets/fitfreak.png";
import cardioImg from "./Assets/Cardio.jpg";
import bodybuildingImg from "./Assets/BodyBuilding2.jpg";
import boxingImg from "./Assets/Boxing.jpg";
import yogaImg from "./Assets/Yoga.jpg";
import about2 from "./Assets/about-2.png";
import { useState } from "react";
import Login from "./Login";

function Home() {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiMessage, setBmiMessage] = useState("");
  const [age, setAge] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  function handleLoginClick() {
    setShowLogin(true);
  }

  const CalculateBMI = () => {
    if (!heightValue || !weightValue || !age) {
      setBmiMessage("⚠️ Please enter height, weight, and age.");
      setBmiValue(null);
      return;
    }

    const heightInMeters = heightValue / 100;
    const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(1);
    setBmiValue(bmi);

    if (bmi < 18.5) {
      setBmiMessage("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiMessage("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiMessage("Overweight");
    } else {
      setBmiMessage("Obesity");
    }
  };

  return (
    <>
      <div
        className="container full-screen"
        id="Home-page-top"
        style={{
          backgroundImage: `url(${introBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <nav className="nav-center">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Our Team</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          <div className="login-signup">
            <button onClick={handleLoginClick} className="login">Login</button>
            <button className="signup">Signup</button>
          </div>
        </header>

        {showLogin ? (
          <Login />
        ) : (
          <>
            <div className="hero">
              <h4>WELCOME TO FIT FREAK CENTER</h4>
              <h1>WORK HARD EVERYDAY</h1>
              <div className="hero-buttons">
                <button>FOR MEN</button>
                <button>FOR WOMEN</button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* The rest of the page content */}
      {!showLogin && (
        <>
          <h2 className="services">OUR SERVICES</h2>
          <div className="classes">
            <div className="class-card">
              <img src={cardioImg} alt="Cardio" />
              <div className="corner-frame"></div>
              <h2>CARDIO</h2>
              <button>START NOW</button>
            </div>
            <div className="class-card">
              <img src={bodybuildingImg} alt="BodyBuilding" />
              <div className="corner-frame"></div>
              <h2>BODY BUILD</h2>
              <button>START NOW</button>
            </div>
            <div className="class-card">
              <img src={boxingImg} alt="Boxing" />
              <div className="corner-frame"></div>
              <h2>BOXING</h2>
              <button>START NOW</button>
            </div>
            <div className="class-card">
              <img src={yogaImg} alt="Yoga" />
              <div className="corner-frame"></div>
              <h2>YOGA</h2>
              <button>START NOW</button>
            </div>
          </div>

          <div className="quotes">
            <img className="about2" src={about2} alt="About" />
            <div className="quote">
              <h3>Improve Yourself Everyday</h3>
              <p>
                True wellness isn’t found in shortcuts—it’s built through
                intention, consistency, and self-respect. Every choice you make
                shapes the life you live.
              </p>
              <a href="#top">
                <button>Start Now</button>
              </a>
            </div>
          </div>

          <div className="calculatebmi">
            <h3>CALCULATE YOUR BMI</h3>
            <p>
              Your BMI is more than just a number—it’s a starting point.
              It offers a snapshot of your body’s relationship with weight and
              height, but it doesn’t define your strength or potential.
            </p>
            <div className="row">
              <input
                type="number"
                placeholder="Height / cm"
                value={heightValue}
                onChange={(e) => setHeightValue(e.target.value)}
              />
              <input
                type="number"
                placeholder="Weight / kg"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
              />
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input type="text" placeholder="Sex" />
            </div>

            <button onClick={CalculateBMI}>Calculate</button>

            {bmiValue && (
              <span className="result">
                Your BMI: <strong>{bmiValue}</strong> ({bmiMessage})
              </span>
            )}

            {!bmiValue && bmiMessage && (
              <span className="result">{bmiMessage}</span>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
