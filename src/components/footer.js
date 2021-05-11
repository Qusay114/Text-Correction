import React from 'react';

//bootstrap elements 
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';

class Footer extends React.Component{

  render(){
    return(
    
      <Card style={{ color:'black' , width:'100%' , textAlign:'center'}}>
        <Card.Header>
           About US
        </Card.Header>
        <Card.Body>
          This webiste to correct and improve your text
        </Card.Body>
        <Card.Footer>
          &copy;By eng.Qusay Al-Amarat
        </Card.Footer>
      </Card>
   
    );
  }
}

export default Footer ;
