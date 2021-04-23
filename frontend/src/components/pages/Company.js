import './Company.css';
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from 'react-router-dom';


export default function Company() {
	/*const Company = (callback, validate) => {
		const [values, setValues] = useState({
		  Name: '',
		  CMP_Name: '',
		  email: '',
		  password: '',
		  password2: ''
		});
		const [errors, setErrors] = useState({});
		const [isSubmitting, setIsSubmitting] = useState(false);
	  
		const handleChange = e => {
		  const { name, value } = e.target;
		  setValues({
			...values,
			[name]: value
		  });
		};
	  
		const handleSubmit = e => {
		  e.preventDefault();
	  
		  setErrors(validate(values));
		  setIsSubmitting(true);
		};
	  
		useEffect(
		  () => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
			  callback();
			}
		  },
		  [errors]
		);
	  
		return { handleChange, handleSubmit, values, errors };
	  };*/
	const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
	const loginProps = useSpring({
		left: registrationFormStatus ? -500 : 0, 
	});
	const registerProps = useSpring({
		left: registrationFormStatus ? 0 : 500, 
	});

	const loginBtnProps = useSpring({
		borderBottom: registrationFormStatus
			? "solid 0px transparent"
			: "solid 2px #1059FF",
	});
	const registerBtnProps = useSpring({
		borderBottom: registrationFormStatus
			? "solid 2px #1059FF"
			: "solid 0px transparent", 
	});

	function registerClicked() {
		setRegistartionFormStatus(true);
	}
	function loginClicked() {
		setRegistartionFormStatus(false);
	}


	return (
		<div className="login-register-wrapper">
			<div className="nav-buttons">
				<animated.button
					onClick={loginClicked}
					id="loginBtn"
					style={loginBtnProps}
				>
					Login
				</animated.button>
				<animated.button
					onClick={registerClicked}
					id="registerBtn"
					style={registerBtnProps}
				>
					Sign up
				</animated.button>
			</div>
			<div className="form-group">
				<animated.form action="" id="loginform" style={loginProps}>
					<LoginForm />
				</animated.form>
				<animated.form action="" id="registerform" style={registerProps}>
					<RegisterForm />
				</animated.form>
			</div>
			<animated.div className="forgot-panel" style={loginProps}>
			<Link to="/Forgotpassword" >
             <h4>Forgotpassword?</h4>
            </Link>
			
			</animated.div>
		</div>
	);
}

function LoginForm() {
	return (
		<React.Fragment>
			<label for="email">email</label>
			<input type="email" id="email" />
			<label for="password">PASSWORD</label>
			<input type="password" id="password" />
			<form action="http://localhost:3000/CompanyHome">
				<input  type="submit" value="submit" className="submit" />
			</form>
		</React.Fragment>
	);
}

function RegisterForm() {
	return (
		/*	<div className='form-inputs'>
         <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='Name'
            placeholder='Enter your name'
            value={values.Name}
            onChange={handleChange}
          />
          {errors.Name && <p>{errors.Name}</p>}
        </div> */
		<React.Fragment>
		
			
		
			<label for="CMP_Name">Company Name</label>
			<input type="text" id="CMP_Name" />
			<label for="email">email</label>
			<input type="text" id="email" />
			<label for="password">password</label>
			<input type="password" id="password" />
			<label for="confirmpassword">confirm password</label>
			<input type="password" id="confirmpassword" />
			<form action="http://localhost:3000/companyAdd">
				<input  type="submit" value="submit" className="submit" />
			</form>
		</React.Fragment>
	);
}



