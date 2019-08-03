import React, {Component} from 'react'
import BasePage from 'Components/_generics/BasePage'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Box from 'Components/_generics/Box'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
            email: "",
            password: ""
          },
          errors: {
            email: "",
            password: ""
          }
        }
    }

    render() { 
      const CustomInputComponent = ({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        ...props
      }) => (
        <div className="form-group input-field">
          <label htmlFor={field.name}>{field.name}</label>
          <input type="text" {...field} {...props} className="form-control"/>
          {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
      );

        return ( 
            <BasePage center>
              <Container>
                <Row className="justify-content-md-center">
                  <Col sm="4">
                    <Box rounded>
                      <Formik
                        initialValues={this.state.user}
                        onSubmit={(values, actions) => { console.log(values) }}
                        render={({ errors, status, touched, isSubmitting }) => (
                          <Form>
                            <Field type="email" name="email" component={CustomInputComponent}/>
                            <ErrorMessage name="email" component="div" />  
                            <Field type="text" className="error" name="password" component={CustomInputComponent}/>
                            {status && status.msg && <div>{status.msg}</div>}
                            <button type="submit" disabled={isSubmitting} className="btn btn-success full-width">
                              Submit
                            </button>
                          </Form>
                        )}
                      />
                    </Box>
                  </Col>
                </Row>
              </Container>
            </BasePage>
         );
    }
}
 
export default Login;