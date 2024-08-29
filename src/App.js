import './Reset.css'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Section from './components/Section';
import { examples } from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import Cars from './components/Cars';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='grid g5'>
      {examples.map((x,i)=>(
        <div key={i*4} className='card sec'>
          <Section key={i*10} title={x.title} summary={x.summary} parts={x.parts} pics={x.pics} links={x.links}/>
        </div>
      ))}
      <div className='sec bot'>
        <h3>Other Projects</h3>
        <div className='grid'>
          <div className='card info'>
            <h5>SI 529 Intro Web Development</h5>
            <div>
            <Button href='https://matthha.github.io/BestOf/index.html' target='blank' variant="primary">Site</Button>{' '}
            <Button href='https://github.com/matthha/BestOf' target='blank'>GitHub</Button>
            </div>
          </div>
          <div className='card info'>
            <h5>SI 538 Citizen Interaction Design</h5>
            <div>
            <Button href='https://matthha.github.io/gov-property-taxes/' target='blank'>Site</Button>{' '}
            <Button href='https://github.com/matthha/gov-property-taxes' target='blank'>GitHub</Button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer /> 
    </div>
  );
}

export default App;
