import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './write.css';

class Write extends Component {
    state = {
            name: '',
            title: '',
            article: ''
        }
    
   validate = () => {
       let isError = false;
       const errors = {};

       if (this.state.article.length < 100 ) {
         isError = true;
         errors.articleError = alert("Article needs to be atleast 100 characters long");
       }

       
       if (isError) {
           this.setState({
               ...this.state,
               ...errors
           });
       }
       return isError;
   }
        
   onSubmitForm = () => {
      
       const err = this.validate ();
       if (!err) {
        fetch('https://young-retreat-10768.herokuapp.com/write', {
  			method: 'post',
  			headers: {'Content-Type': 'application/json'},
  			body: JSON.stringify({
  				name: this.state.name,
  				title: this.state.title,
  				article: this.state.article
  			})
  		})
  		.then(response => response.json())
         }
		
				
	}
    
 
    render() {
        
        return (
            <div>
                <Form className='article-form' onSubmit={() => this.onSubmitForm()} >
                <h1 style={{paddingBottom: '10px'}}>Write an Article</h1>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" required name="fullname" value={this.state.name}  onChange={e => this.setState({name: e.target.value})} />
                </Form.Group> 

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" required name="title" value={this.state.title}  onChange={e => this.setState({title: e.target.value})} />
                </Form.Group>                
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" required rows="10" name="article" value={this.state.article} onChange={e => this.setState({article: e.target.value})}/>
                </Form.Group>

                <Button variant="danger" type="submit" >
                    Submit
                </Button>
                </Form>
                <div className='article-bottom-grid'></div>
            </div>
        );
    }
}

export default Write;