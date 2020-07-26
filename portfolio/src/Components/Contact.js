import React, { useState , useEffect} from 'react';
import axios from 'axios';
import {Row, Col, FormControl, Image} from 'react-bootstrap';
import {
  Input,
  Form,
  FormGroup,
  Button}
from 'reactstrap';
import './contact.css';
import camera from "./images/behindcamera.jpg"
const Contact = (props) => {
  // const [isError, setIsError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [inputs, setInputs] = useState({title: '',username:'', email:'', text:'',number:''});
  const [categories, setCategory] = useState([]);

  // const history = useHistory()


  const fetchCategories = async () => {
    setShowLoading(true)
    fetch('/categories')
    .then(res => res.json())
    .then(data => {
      setShowLoading(false)
      setCategory(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleInputChange = event => {
  event.persist();
  setInputs({
    ...inputs,
    [event.target.name]: event.target.value});
  };

  // const contactForm = async (e) => {
  //   e.preventDefault()
  //   axios.post('/contact-us', {
  //     username,email,text,number,categories
  //   }).then(result => {
  //     if (result.status === 200) {
  //       //console.log(result.data)
  //       setContact(true);
  //       props.history.push('/')
  //     } else {
  //       setIsError(true);
  //     }
  //   }).catch(e => {
  //     setIsError(true);
  //   });
  // }
  const contactForm = async (e) => {
    e.preventDefault()
      axios.post('/contact/contact-us', inputs,
    {
    validateStatus: function (status) {
      return status < 600; // Reject only if the status code is greater than or equal to 500
      }}
    )
    .catch(function (error) {
      console.log(error);
      })  
    .then(function (response) {
    // console.log(response)
    })
  }
  

  useEffect(() => {
    fetchCategories();
  }, [])


return (
  <div className="contact-page">
    <Image src={camera} fluid/>
    <h3 className="contact-title">Contacter nous !<span></span></h3>
		<Row>
      <Col sm="6">
        <section className="form-contact-ii">
          <div className="info-contact">
            <p>Guadeloupe <span>971</span></p>
            
          </div>
          <div className="info-contact">
            <p>Téléphone: <span> 07-78-34-35-445</span></p> 
          </div>
          <div className="info-contact">
            <p>Email:</p>
            <span>alpiniastudioweb@gmail.com</span>
          </div>
        </section>
      </Col>

      <Col sm="6">
        <section className="form-contact">
          <Form>
            <Col className="column">
              <Input
                type="text"
                placeholder='Nom et prénom'
                value={inputs.username || ""}
                onChange={handleInputChange}
                name="username"
                required
            />
            </Col>

            <Col className="column">
              <FormControl 
              as="select"
              name="categories"
              onChange={handleInputChange}
              >
              {categories.map((category, key) => 
              <option value={category.id}  key={key} >{category.title}</option>
              )}
              </FormControl>
                      
						</Col>

            <Col className="column">
              <Input
                type="tel"
                placeholder='Téléphone'
                value={inputs.number || ""}
                onChange={handleInputChange}
                name="number"
            />
            </Col>
            <Col className="column">
              <Input
                type="email"
                placeholder='Email'
                value={inputs.email || ""}
                onChange={handleInputChange}
                name="email"
                required
            />
            </Col>

            <Col className="column">
              <Input
                type="textarea"
                placeholder='Message'
                value={inputs.text || ""}
                onChange={handleInputChange}
                name="text"
                required
              />
            </Col>
            <div className="submit_contact">
              <Button
                onClick={contactForm}
              >
                Envoyer
              </Button>
            </div>
            
          </Form>
        </section>
      </Col>
    </Row>


  </div>
  )
}
export default Contact;
