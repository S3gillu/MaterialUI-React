import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';


const gender = [
    <MenuItem key={1} value={1} primaryText="Male" />,
    <MenuItem key={2} value={2} primaryText="Female" />,
    <MenuItem key={3} value={3} primaryText="Not specified" />,
];

const status = [
    <MenuItem key={1} value={1} primaryText="Single" />,
    <MenuItem key={2} value={2} primaryText="Married" />,
    <MenuItem key={3} value={3} primaryText="Divorced" />,
];

const country = [
    <MenuItem key={1} value={1} primaryText="India" />,
    <MenuItem key={2} value={2} primaryText="USA" />,
    <MenuItem key={3} value={3} primaryText="France" />,
];

class signup extends Component {
    state = {
        value: null,
        value1: null,
        value2: null,
        firstName: "",
        firstNameError: "",
        lastName: '',
        lastNameError: '',
        middleName: '',
        middleNameError: '',
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        confirmPassword: '',
        confirmPasswordError: '',
        DOB: '',
        DOBError: '',
        address:'',
        addressError:'',
        contact:'',
        contactError:''
    };

    change = (e) => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    validate = () => {
        let isError = false;

        const errors = {
            firstNameError: "",
            lastNameError: '',
            middleNameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
            DOBError: '',
            addressError: '',
            contactError:''
        };

        if (this.state.firstName.length < 3) {
            isError = true;
            errors.firstNameError = "Required, atleast 3 characters long";
        }

        if (this.state.lastName.length < 3) {
            isError = true;
            errors.lastNameError = "Required, atleast 3 characters long";
        } 

        if (this.state.middleName.length < 3) {
            isError = true;
            errors.middleNameError = "Required, atleast 3 characters long";
        }

        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        }

        if (this.state.password.length < 6) {
            isError = true;
            errors.passwordError = "Required, atleast 6 characters long";
        }

        if (this.state.confirmPassword !== this.state.password) {
            isError = true;
            errors.confirmPasswordError = "password did not match";
        } else if ( this.state.confirmPassword.length < 6) {
            isError = true;
            errors.confirmPasswordError = "Required, must be of 6 characters"
        }

        if (this.state.DOB === null) {
            isError = true;
            errors.DOBError = "DOB Required";
        }
        

        if (this.state.address.length < 5 || this.state.address.length > 255) {
            isError = true;
            errors.addressError = "Address field is required";
        }

        if (this.state.contact.length > 10 || this.state.contact.length < 10) {
            isError = true;
            errors.contactError = "Required, only of 10 digit";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                firstName: "",
                firstNameError: "",
                lastName: '',
                lastNameError: '',
                middleName: '',
                middleNameError: '',
                email: "",
                emailError: "",
                password: '',
                passwordError: '',
                confirmPassword: '',
                confirmPasswordError: '',
                DOB: '',
                DOBError: '',
                address:'',
                addressError:'',
                contact:'',
                contactError:''
            });

            this.props.onChange({
                firstName: "",
                middleName: '',
                lastName: '',
                email: "",
                password: '',
                confirmPassword: '',
                DOB: '',
                address:'',
                contact:''
            });
        }
    };


    handleChange = (event, index, value) => this.setState({ value });
    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });

    render() {
        return (
            <Card style={{ marginLeft: '15%', marginRight: '15%', marginTop: '2%' }}>
                <form>
                    <CardTitle title="Sign Up" subtitle="This is a sign up form" />
                    <TextField style={{ marginLeft: '2%' }}
                        name="firstName"
                        hintText="First name"
                        floatingLabelText="First name"
                        type="text"
                        value={this.state.firstName}
                        onChange={e => this.change(e)}
                        errorText={this.state.firstNameError}
                    />
                    <TextField style={{ marginLeft: '2%' }}
                        name="middleName"
                        hintText="Middle name"
                        floatingLabelText="Middle name"
                        type="text"
                        value={this.state.middleName}
                        onChange={e => this.change(e)}
                        errorText={this.state.middleNameError}
                    />
                    <TextField style={{ marginLeft: '2%' }}
                        name="lastName"
                        hintText="Last name"
                        floatingLabelText="Last name"
                        type="text"
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                        errorText={this.state.lastNameError}
                    />
                    <br />
                    <SelectField style={{ marginLeft: '2%' }}
                        value={this.state.value}
                        onChange={this.handleChange}
                        floatingLabelText="Select gender"
                    >
                        {gender}
                    </SelectField>
                    <SelectField style={{ marginLeft: '2%' }}
                        value={this.state.value1}
                        onChange={this.handleChange1}
                        floatingLabelText="Select country"
                    >
                        {country}
                    </SelectField>
                    <SelectField style={{ marginLeft: '2%' }}
                        value={this.state.value2}
                        onChange={this.handleChange2}
                        floatingLabelText="Select status"
                    >
                        {status}
                    </SelectField>
                    <TextField style={{ marginLeft: '2%' }}
                        name="email"
                        hintText="Email "
                        floatingLabelText="Email"
                        type="Email"
                        value={this.state.email}
                        onChange={e => this.change(e)}
                        errorText={this.state.emailError}
                    />
                    <TextField style={{ marginLeft: '2%' }}
                        name="password"
                        hintText="Password "
                        floatingLabelText="Password"
                        type="password"
                        value={this.state.password}
                        onChange={e => this.change(e)}
                        errorText={this.state.passwordError}
                    />
                    <TextField style={{ marginLeft: '2%' }}
                        name="confirmPassword"
                        hintText="Confirm Password "
                        floatingLabelText="Confirm Password"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={e => this.change(e)}
                        errorText={this.state.confirmPasswordError}
                    />
                    <div style={{ display: 'inline-block', marginLeft: '2%' }}>
                        <DatePicker
                            name="DOB"
                            hintText="Select DOB"
                            floatingLabelText="DOB"
                            value={this.state.DOB}
                            onChange={e => this.change(e)}
                            errorText={this.state.DOBError}
                        />
                    </div>


                    <TextField style={{ marginLeft: '2%' }}
                        name="address"
                        hintText="Address Line "
                        floatingLabelText="Address"
                        value={this.state.address}
                        onChange={e => this.change(e)}
                        errorText={this.state.addressError}
                    />
                    <TextField style={{ marginLeft: '2%' }}
                        name="contact"
                        hintText="Contact Number"
                        floatingLabelText="Contact Number"
                        type="number"
                        value={this.state.contact}
                        onChange={e => this.change(e)}
                        errorText={this.state.contactError}
                    />
                    <CardActions style={{ marginTop: '3%' }}>
                        <FlatButton label="Submit" primary={true} onClick={e => this.onSubmit(e)} />
                        <FlatButton label="Cancel" secondary={true} />
                    </CardActions>
                </form>
                <h2 style={{ marginLeft: '2%' }}>Already have an account with us ?  <FlatButton label="Click here to Login" primary={true} /></h2>
            </Card>
        );
    }

};

export default signup;