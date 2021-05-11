import React from 'react';

import TextForm from './textForm';
//bootstrap components
import Card from 'react-bootstrap/Card';

class Background extends React.Component{

  render(){
    return(
      <Card>
        <Card.Body>
          <Card.Img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v462-n-130-textureidea_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9465282a2b0a375f4f5b120d7bbad882' alt='' />
          <TextForm />
        </Card.Body>
      </Card>
    );
  }
}

export default Background ;
