import { Carousel } from 'antd';
import { Button } from 'react-bootstrap';
import { Tab, Tabs } from 'react-bootstrap';
import React from 'react';


const Section = (props) => {

  const temp = props.parts.map((x, index) => (
    { key: index + 1, label: <h3 style={{ fontSize: '20px' }}>{x[0]}</h3>, children: (<div className='baseSize'>{x[1]}</div>) }
  ))
  // console.log(temp)

  return (
    <div className="g3 sec">
      <div className="newcard again" style={{ margin: '23px', width: '200px', color: 'white', alignContent: 'center' }}>
        {/* for the images */}
        <Carousel arrows autoplay >
          {props.pics.map((x, index) => (
            // <Card>
            <img key={index * 8} alt='' src={x} style={{ borderRadius: 10, padding: 20, margin: 20, width: '150px', }} />
            // </Card>
          ))}
        </Carousel>
      </div>


      <div className='grid newcard info' style={{}}>
        <h1>{props.title}</h1>
        <p>{props.summary}</p>
        {/* <Tabs defaultActiveKey={temp.length} tabPosition='top'  style={{height: 220}} items={temp} /> */}
        {/* Shows the content
              need a better way to show the data. */}
        <Tabs
          defaultActiveKey={props.parts.length - 1}
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          {props?.parts && props.parts.map((x, index) => (
            <Tab eventKey={index} title={x[0]}>{x[1]}</Tab>
          ))}
        </Tabs>
        <div >
          {props?.links && props.links.map((x, index) => (
            <>
              {/* <Button href={x[0]} target='blank'>{x[1]}</Button>{' '} */}
              <Button href={x[0]} target='blank' variant="primary">{x[1]}</Button>{' '}
            </>
          ))}
        </div>
      </div>

    </div>
  )

}
export default Section;