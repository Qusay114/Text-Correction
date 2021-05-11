import React from 'react' ;
import axios from 'axios';

//created components
import TextForm from './components/textForm';
import Footer from './components/footer';

//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CorrectedText from './components/correctedText';

//assets
import bg from './assets/background3.png';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userText:'',
      correctedText:'',
      showCard:false,
    };
  }

  textConvertor = async (event) => {
    event.preventDefault();
    event.target.userText.value='';

    const url = process.env.REACT_APP_URL ;
    const convertTextReq = await axios.get(`${url}/convert?text=${this.state.userText}`);

    this.setState({
      correctedText:convertTextReq.data,
      showCard:true ,
    });
  }

  handleChange = (event) => this.setState({userText:event.target.value});
  render(){
    return(
      <>
        <Card className="bg-dark text-white">
          <Card.Img src={bg} alt=''/>
          <Card.ImgOverlay>
            <Row style={{position:'absolute' , top:'25%' , left:'50%' , transform:'translate(-50%,-25%)'}}>
              <TextForm handleChange={this.handleChange} textConvertor={this.textConvertor} />
            </Row>
            {this.state.showCard && 
              <Row style={{position:'absolute' , top:'40%' , left:'50%' , transform:'translate(-50%,-25%)'}}>
                <CorrectedText correctedText={this.state.correctedText} />
              </Row>
            }
          </Card.ImgOverlay>
          <Card.Footer style={{padding:'0'}}> <Footer /></Card.Footer>
        </Card>
      </>  
    );
  }
}

export default App ;
