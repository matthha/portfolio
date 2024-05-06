import './Reset.css'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { Card } from 'antd';
import Section from './components/Section';
import { examples } from './Content';

function App() {
  // const [screen, setScreen] = useState("Basic");
  return (
    // <Temp />
    <div className="App">
      
      <header className="App-header">      
      </header>
      <Header />

      {/* <Page screen={screen} /> */}
      <div className='grid g5 info'>
      {examples.map((x,i)=>(
        <div className='card' style={{gridColumn: `${i%2+1} / span 4`, backgroundColor:'#86bbd8'}}><Section key={i} title={x.title} summary={x.summary} parts={x.parts} pics={x.pics}/></div>
      ))}
      </div>
      {/* {screen === 'Learn' && <Learn screen={screen} setScreen={setScreen}/>} */}
      <Footer /> 
    </div>
  );
}

export default App;
