import React, { Component } from 'react';
import { toast } from "react-toastify";
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';
import { Paper } from "@material-ui/core"

const username2 = "test@test.com"
const password2 = "test"
toast.configure();

// export function Loggedin(key) {
//     if(key){
//         return true;
//     }
//     return false;
    
// }

export class Login extends Component {
    state = {
        user:
        {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    _isValid = (email, password) => {
        if (username2 === email && password2 === password) {
            return true;
        }
        return false;
    }

    onHandleChange = ({ target: { name = "", value = "" } }) => {
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        });
    };

    saveObject = (key , data) => {
        let obj =JSON.stringify(data)
        console.log(obj, "obj in saveobject")
        localStorage.setItem(key , obj)    
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        const { user } = this.state;
        if(this._isValid(user.email, user.password)){
            toast.success(" you are logged in");
            this.setState({
                isLoggedIn: true
            })
        }
        else {
            toast.warn("wrong email or password")
        } 
    }

    render() {
        const { email, password } = this.state.user;
        return (
            <Container className="App" style={{ marginTop: 100 }}>
               
                <Row  className="justify-content-sm-center" >
                    <Col xs={5} sm={4} md={4}>
                        <Form  action={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"  name="email" value={email} onChange={this.onHandleChange}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.onHandleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.onSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}