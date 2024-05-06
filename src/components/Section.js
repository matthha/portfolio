import { Carousel, Tabs } from 'antd';
// import { Image } from 'react-bootstrap';
import React from 'react';
import { Image } from 'react-bootstrap';

const Section = (props) => {

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const temp = props.parts.map((x,index)=> (
    {key: index, label:x[0], children: <div className='baseSize'>{x[1]}</div>}
  ))
  // console.log(temp)

   return (
       <div className="g3">
         {/* <img src={(props.pics)} /> */}
         <div style={{display:'block',marginLeft:'auto', marginRight:'auto', width:'150px', color:'black', alignContent:'center'}}>
         <Carousel arrows autoplay >
          {props.pics.map((x,index)=> (
            <Image src={x} fluid style={{width:'150px' }} />

          ))}
         </Carousel>
         </div>
         <div>
         <h1>{props.title}</h1>
         <p>{props.summary}</p>
         <Tabs defaultActiveKey="1" items={temp} forceRender='true' />
         </div>
       </div>
   )

}
export default Section;