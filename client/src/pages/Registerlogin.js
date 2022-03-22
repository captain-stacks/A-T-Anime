import React, { useState } from 'react';
import './Registerlogin.css';
import { useSpring, animated } from 'react-spring';
import Login from './Login';
import Signup from './Signup';

const Registersignup = () => {
	const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
	const loginProps = useSpring({
		left: registrationFormStatus ? -500 : 0, // Login form sliding positions
	});
	const registerProps = useSpring({
		left: registrationFormStatus ? 0 : 500, // Register form sliding positions
	});

	const loginBtnProps = useSpring({
		borderBottom: registrationFormStatus
			? 'solid 0px transparent'
			: 'solid 2px #1059FF', //Animate bottom border of login button
	});
	const registerBtnProps = useSpring({
		borderBottom: registrationFormStatus
			? 'solid 2px #1059FF'
			: 'solid 0px transparent', //Animate bottom border of register button
	});

	function registerClicked() {
		setRegistartionFormStatus(true);
	}
	function loginClicked() {
		setRegistartionFormStatus(false);
	}

	return (
		<div className='login-register-wrapper'>
			<div className='nav-buttons'>
				<animated.button
					onClick={loginClicked}
					id='loginBtn'
					style={loginBtnProps}
				>
					Login
				</animated.button>
				<animated.button
					onClick={registerClicked}
					id='registerBtn'
					style={registerBtnProps}
				>
					Register
				</animated.button>
			</div>
			<div className='form-group'>
				<animated.div action='' id='loginform' style={loginProps}>
					<Login />
				</animated.div>
				<animated.div action='' id='registerform' style={registerProps}>
					<Signup />
				</animated.div>
			</div>
			<animated.div className='forgot-panel' style={loginProps}>
				<a herf='#'>Forgot your password</a>
			</animated.div>
		</div>
	);
};
export default Registersignup;