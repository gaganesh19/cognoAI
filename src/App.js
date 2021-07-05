import './App.css';
import Message from './message.png';
import Robot from './robot.png';

function App() {
  return (
    <div class="main">
    <div class="all">
      <div class="contant">
        <h1>IRIS</h1>
        <h2>Hello 👋</h2>
        <h3>I am Iris, a Virtual Assistant<br />How may I help you?</h3>
      </div>
      <div class="chat">
        <img class="robot" src={Robot} />

        <h4>Frequently Asked Questions <i class="question">?</i></h4>
        <div class="one">
          <p>Can I redeem my Fb before the original term?</p>
        </div>
        <div class="one"><p>How do I pay my Credit card bill?</p></div>
        <div class="one"><p>How can I get my Account Statement?</p></div>
        <div class="one"><p>What is the tenure of Fixed Deposit</p></div>
        <div class="start">
          <img class="message" src={Message} />
          <h4>Start a New Converstation</h4>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
