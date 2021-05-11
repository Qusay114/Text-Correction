import React from 'react';

//bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

class CorrectedText extends React.Component{

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.copyButton = React.createRef();
    this.state = {
      button:this.copyButton,
      show:false,
      copyButtonText:'copy',
      hoverText:'copy corrected text'
    };
  }

  copyText = () => {
    const text = this.myRef.current.outerText ;
    navigator.clipboard.writeText(text);
    this.setState({
      copyButtonText:'copied!',
      hoverText:'text copied!',
    });
  }
  handle = () => {window.addEventListener('click' , () => console.log('dfgvwert'));}
  render(){
    return(
      <Card bg='primary' className="text-center" style={{color:'white' , width:'30rem' , minHeight:'4rem'}}>
        <Card.Title Style={{ textAlign:'center'}}>
          <Button ref={this.copyButton} variant='outline-light' onClick={this.copyText} onMouseEnter={()=> this.setState({show:true})} onMouseLeave={()=> this.setState({show:false})} style={{position:'absolute' , left:'100%' , transform:'translateX(-100%)' , top:'0'}}>{this.state.copyButtonText}</Button>        
          <Overlay target={this.state.button} show={this.state.show} placement='right'>
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                {this.state.hoverText}
              </Tooltip>
            )}
          </Overlay>
        </Card.Title>
        <Card.Body>
          <Card.Text ref={this.myRef}>
            {this.props.correctedText}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CorrectedText ;
