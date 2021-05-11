import React from 'react';

//bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button' ;



class TextForm extends React.Component{

  render(){
    return(
      <>
        <Form onSubmit={this.props.textConvertor} >
          <Form.Group style={{width:'20rem'  }}>
            <Form.Control as='textarea' placeholder='Do you want to correct your text ? what you wait enter it' name='userText' onChange={this.props.handleChange} style={{minHeight:'7rem'}}/>
            <Button type='submit' variant='outline-success' style={{marginLeft:'8.5rem' , marginTop:'2rem' , color:'white' }}>Correct</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default TextForm ;
