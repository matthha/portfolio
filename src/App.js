import './Reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { examples } from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';
import './App.css';
// import Cars from './components/Cars';
function App() {
  return (
    <div className="App">

      <Header />
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

{/* Testing stuff */}


{/* Start of my content */}
        <div className='element-content tile1'>
          <h2 id='aboutMe'>About Me</h2>
          {/* <img src={require("./images/Mirror Match Info.png")} alt="..." width="800" height="auto"/> */}
          {/* <p>A prior logistics manager of 5 years, I have changed career paths into web development with a focus on user centered design.</p> */}
          <p style={{maxWidth:'500px', alignSelf:'center', display:'inline-block'}}>I'm a front end web developer that likes to learn more about full stack development. I focused on UX in school and try to make products that are easily adapted by the intended audience.</p>
        </div>
        <div className='element-content tile2' id='mirrorMatch'>
          <h2>Mirror Match</h2>
          <p>A design prototype for people who want a little more help getting ready.</p>
          {/* <Button href='https://matthha.github.io/gov-property-taxes/' target='blank'>Site</Button> */}
          <div><a type="button" class="btn btn-outline-primary btn-sm" href='https://verdant-cell-8ec.notion.site/Mirror-Match-70a30d36bb254905935f71cfe1b112ac' target='blank'>Article</a></div>
          <img src={require("./images/Mirror Match Info.png")} alt="..." width="800" height="auto"/>
        </div>

        <div className='element-content tile3'>
          <h2>CCHS</h2>
          <p>A high school orientation app for staff to administer and track progress online.</p>
          <div>
            <a type="button" class="btn btn-outline-primary btn-sm" href='https://si-699-school.webflow.io/' target='blank'>Article</a>{'  '}
            <a type="button" class="btn btn-outline-primary btn-sm" href='https://github.com/matthha/react-amp' target='blank'>GitHub</a>
          </div>
          
          <img src={require("./images/CCHSInfo.png")} alt="..." width="800" height="auto"/>
        </div>

        <div className='element-content tile4'>
          <h2>DigiArcade</h2>
          <p>A cross platform gaming app for people who don't always have time to finish games.</p>
          <div><a type="button" class="btn btn-outline-primary btn-sm" href='https://github.com/SI669-classroom/si-669-final-project-teamarc' target='blank'>GitHub</a></div>
          <img src={require("./images/DigiArcadeInfo.png")} alt="..." width="800" height="auto"/>
        </div>

        <div className='element-content tile5'>
          <h2>League Teams</h2>
          <p>An attendance and team making app for coaches to check-in and sort players.</p>
          <div>
            <a type="button" class="btn btn-outline-primary btn-sm" href='https://matthha.github.io/vball/' target='blank'>Site</a>{' '}
            <a type="button" class="btn btn-outline-primary btn-sm" href='https://github.com/matthha/vball' target='blank'>GitHub</a>
          </div>
          <img src={require("./images/VBallInfo.png")} alt="..." width="800" height="auto"/>
        </div>
      </div>

      <div className='grid g5 tile6'>

      {/* My old content. It was too text heavy. */}

      {/* {examples.map((x,i)=>(
        <div key={i*4} className='card sec'>
          <Section key={i*10} title={x.title} summary={x.summary} parts={x.parts} pics={x.pics} links={x.links}/>
        </div>
      ))} */}

      {/* <div className='sec bot'>
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
      </div> */}
      </div>

      <Footer /> 
    </div>
  );
}

export default App;
