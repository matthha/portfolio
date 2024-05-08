import './Reset.css'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Section from './components/Section';
import { examples } from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
// import Cars from './components/Cars';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='grid g5 info'>
      {examples.map((x,i)=>(
        <div key={i*4} className='card newcard' style={{ gridColumn: `${i%2+1} / span 4`, margin: 20,backgroundColor:'#86bbd8'}}>
          <Section key={i*10} title={x.title} summary={x.summary} parts={x.parts} pics={x.pics} links={x.links}/>
        </div>
      ))}
      <div className='newcard card' style={{ gridColumn: `2 / span 3`, margin: 20,backgroundColor:'#86bbd8'}}>
        <h3>Other Projects</h3>
        <div className='grid g2'>
          <div>
            <h5>SI 529 Intro Web Development</h5>
            <Button href='https://matthha.github.io/BestOf/index.html' target='blank'>Site</Button>{' '}
            <Button href='https://github.com/matthha/BestOf' target='blank'>GitHub</Button>
          </div>
          <div>
            <h5>SI 538 Citizen Interaction Design</h5>
            <Button href='https://matthha.github.io/gov-property-taxes/' target='blank'>Site</Button>{' '}
            <Button href='https://github.com/matthha/gov-property-taxes' target='blank'>GitHub</Button>
          </div>
        </div>
      </div>
      </div>

      <Footer /> 
    </div>
  );
}

export default App;
