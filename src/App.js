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
          <p style={{maxWidth:'600px', alignSelf:'center', display:'inline-block'}}>Welcome! I'm a web developer that likes to focus on interaction design. I enjoy working on teams and have led a few myself. I've learned the best way to make a good product is to talk to your users and empathize with them throughout the design and development process.</p>
        </div>

        {/* SVG Examples */}

        <div className='' style={{ display:'none',width: '500px', border: '1px solid blue'}}>
          {/* inkscape */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Using g to inherit presentation attributes --> */}
            <g fill="white" stroke="green" stroke-width="5">
              <circle cx="60" cy="60" r="25" />
              <circle cx="40" cy="40" r="25" />
              
            </g>
            <text dx='17' dy='50'>Here</text>
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 0 300 90">
            <path className='hex' d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
                  stroke="red" fill="orange" />
            <path className='hex' d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
                  stroke="green" fill="lightgreen" />
            <path className='hex' d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
                  stroke="blue" fill="lightblue" />
            <marker id="circle" markerWidth="12" markerHeight="12"
                    refX="6" refY="6" markerUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="3" stroke-width="2"
                      stroke="context-stroke" fill="context-fill"  />
            </marker>
          </svg>


          <svg
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="red"
            fill="grey">
            <circle cx="50" cy="50" r="40" />
            <circle cx="150" cy="50" r="4" />

            <svg viewBox="0 0 10 10" x="200" width="100">
              <circle cx="5" cy="5" r="4" />
            </svg>
          </svg>

          <div className='spir'>
          <svg  viewBox='0 0 100 100' height='100px' id="s1">
            <defs id="defs1">
              <path className="spiral" id="path1" d="M 35.9882,87.805027 C 25.398503,91.270184 15.37037,82.176131 13.778933,72.074776 11.583668,58.140734 22.979725,45.925152 36.485278,44.559338 53.094843,42.879616 67.33964,56.466507 68.524128,72.704033 69.905602,91.64194 54.353001,107.71709 35.747338,108.75988 14.713776,109.93873 -3.0344597,92.601507 -3.9628366,71.870847 -4.9909394,48.913306 13.989315,29.615997 36.666618,28.782857 c 24.74766,-0.909203 45.493894,19.600982 46.245772,44.086559 0.0057,0.186185 0.01032,0.372405 0.01381,0.558645" />
            </defs>
            <use x='10' y='-18' href='#path1' transform='scale(1,1)' />
          </svg>
          </div>
          <svg viewbox='0 0 400 400' xmlns='http://www.w3.org/2000/svg' height='60vmin' width='60vmin'>
            <rect x='0' y='0' width='50%' height='50%' fill='tomato' opacity='0.75' />
            <rect x='25%' y='25%' width='50%' height='50%' fill='slategrey' opacity='0.75' />
            <rect x='50%' y='50%' width='50%' height='50%' fill='olive' opacity='0.75' />
            <rect x='0' y='0' width='100%' height='100%' stroke='cadetblue' stroke-width='0.5%' fill='none' />
          </svg>
          <use x='10' y='0' href='#path1' />
          <svg viewBox="0 0 88.593987 81.72805" version="1.1" id="s1" >
            <defs id="defs1"/>
            <g id="layer1" transform="translate(-44.847367,-66.644453), scale(0.8,1)" stroke='red' stroke-width="12"  >
              <path className='s2' id="path1" d="M 35.9882,87.805027 C 25.398503,91.270184 15.37037,82.176131 13.778933,72.074776 11.583668,58.140734 22.979725,45.925152 36.485278,44.559338 53.094843,42.879616 67.33964,56.466507 68.524128,72.704033 69.905602,91.64194 54.353001,107.71709 35.747338,108.75988 14.713776,109.93873 -3.0344597,92.601507 -3.9628366,71.870847 -4.9909394,48.913306 13.989315,29.615997 36.666618,28.782857 c 24.74766,-0.909203 45.493894,19.600982 46.245772,44.086559 0.0057,0.186185 0.01032,0.372405 0.01381,0.558645" transform="translate(49.682657,38.723247)" />
            </g>
          </svg>
          {/* svg box spiral */}
          <svg width="50mm" height="50mm" viewBox="0 0 20 20" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title> spiral [#32]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="blue" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -8039.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M264,7887 C264,7891.418 260.418,7895 256,7895 L254,7895 C250.686,7895 248,7892.314 248,7889 C248,7885.686 250.686,7883 254,7883 L256,7883 C258.209,7883 260,7884.791 260,7887 C260,7889.209 258.209,7891 256,7891 L254,7891 C252.896,7891 252,7890.105 252,7889 C252,7887.895 252.896,7887 254,7887 C255.105,7887 256,7887.895 256,7889 C257.105,7889 258,7888.105 258,7887 C258,7885.895 257.105,7885 256,7885 L254,7885 C251.791,7885 250,7886.791 250,7889 C250,7891.209 251.791,7893 254,7893 L256,7893 C259.314,7893 262,7890.314 262,7887 C262,7883.686 259.314,7881 256,7881 L254,7881 C249.582,7881 246,7884.582 246,7889 C246,7893.418 249.582,7897 254,7897 L255,7897 C255.552,7897 256,7897.448 256,7898 C256,7898.552 255.552,7899 255,7899 L254,7899 C248.477,7899 244,7894.523 244,7889 C244,7883.477 248.477,7879 254,7879 L256,7879 C260.418,7879 264,7882.582 264,7887" id="-spiral-[#32]"> </path> </g> </g> </g> </g></svg>
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
