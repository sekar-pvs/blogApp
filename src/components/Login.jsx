import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	// validPassword
	const validPassword = new RegExp("^(?=[A-Za-z])(?=.*?[0-9]).{6,}$");
	const [userData, setUserData] = useState([]);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [loginStatus, setLoginStatus] = useState(false);

	const handelSubmit = (e) => {
		e.preventDefault();
		// username validation
		if (userName.length === 0) {
			alert("Please enter user name ");
		}
		// PASSWORD VALIDATION
		if (password.length === 0) {
			alert("Please enter password  ");
		}
		if (!validPassword.test(password)) {
			alert("set strong password");
		}
		// LOGIN FORM SET EMPTY STATE
		setUserName("");
		setPassword("");
		setLoginStatus(true);
		const userDetail = { name: userName, password: password };
		console.log(userDetail);
		setUserData([...userData, userDetail]);
		console.log(userData);
		//console.log(userName);
	};
	const handelUserName = (e) => {
		setUserName(e.target.value);
		//console.log(userName);
	};
	const handelPassword = (e) => {
		setPassword(e.target.value);

		//console.log(userName);
	};
	return (
		<div className=' h-5/6  flex justify-center items-center bg-gray-700 bg-gradient-to-b from-white via-blue-700 to-white'>
			<form
				action=''
				className='border border-gray-600 border-inherit w-1/3  h-5/6 space-y-5 p-5 shadow-2xl bg-white rounded-md'
				onSubmit={handelSubmit}>
				{/*border border-indigo-400 space-y-4 w-1/3 p-5 h-3/4 shadow-2xl*/}

				<div className='uppercase font-bold text-center text-blue-800 text-2xl '>
					login
				</div>
				<hr />
				<div className=' text-xl border-solid space-y-3 '>
					<div>
						<label htmlFor='text'>User Name :</label>
					</div>
					<div>
						<input
							type='text '
							placeholder='Username..'
							className='border hover:border-gray-600  w-3/4 rounded-md'
							value={userName}
							onChange={handelUserName}
							required
						/>
					</div>
				</div>
				<div className='space-y-3'>
					<div>
						<label htmlFor='password'>Password :</label>
					</div>
					<div>
						<input
							type='text'
							name=''
							id='pass'
							placeholder='Password..'
							className='border hover:border-gray-700 w-3/4 rounded-md'
							value={password}
							onChange={handelPassword}
							required
						/>
					</div>
				</div>
				<div className=''>
					<button className=' font-extrabold bg-blue-700 w-full p-2 hover:text-blue-800 hover:bg-white rounded-md text-white'>
						Log in
					</button>
				</div>
				<div className='  '>
					<Link to='/register'>
						<button className='font-extrabold block text-center w-full bg-blue-700 p-1.5  hover:text-blue-800 hover:bg-white rounded-md text-white'>
							SIGN UP
						</button>
					</Link>
				</div>
				<div className='flex justify-between'>
					<div>
						<a href='#' className='hover:text-blue-700 '>
							Forget Password ?
						</a>
					</div>
					<div>
						<input type='checkbox' name='checkbox' />
						<label htmlFor='checkbox'>Remember me</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
