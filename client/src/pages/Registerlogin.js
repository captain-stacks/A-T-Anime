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
		<div className='row card-panel teal lighten-2'>

			<section className='col s12 m12 l6 lineBreak'>
				<header className=''>
					<h2 className=''>
						Register
					</h2>
					<p className=''>
						Register for a free A-T-Anime account
					</p>
				</header>
				<div action='' id='registerform' style={registerProps}>
					<Signup />
				</div>
			</section>

			<section className=''>
				<header className='col s12 m12 l6'>
					<h2 className=''>
						Log In
					</h2>
					<p className=''>
						Already have an account? Log in below.
					</p>
				</header>
				<div action='' id='loginform' style={loginProps}>
					<Login />
				</div>
			</section>

		</div>
	);
};
export default Registersignup;