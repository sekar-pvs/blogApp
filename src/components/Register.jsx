import React from "react";
import { BlogContext } from "../context/Context";
import { useContext } from "react";
import api from "../api/blogApi";

const Register = () => {
	const {
		userName,
		setUserName,
		email,
		setEmail,
		password,
		setPassword,
		conPassword,
		setConPassword,
	} = useContext(BlogContext);
	const handelForm = (e) => {
		e.preventDefault();
		//api.post('/user',)
		if (validation()) {
			const registerValue = {
				username: userName,
				password: password,
				email: email,
				conPassword: conPassword,
			};
			console.log(registerValue);
			setUserName("");
			setPassword("");
			setConPassword("");
			setEmail("");
		}
	};
	const validation = () => {
		if (password !== conPassword) {
			alert("password and confirm password must be same");
			return false;
		} else {
			return true;
		}
	};
	const handelUser = (e) => {
		setUserName(e.target.value);
	};
	const handelPassword = (e) => {
		setPassword(e.target.value);
	};
	const handelConPassword = (e) => {
		setConPassword(e.target.value);
	};
	const handelEmail = (e) => {
		setEmail(e.target.value);
	};
	return (
		<>
			{userName}
			{password}
			{email}
			<div className=' flex justify-center items-center h-5/6'>
				<form
					action=' '
					className=' border border-black p-7 h-5/6 rounded  bg-gray-400 '
					onSubmit={handelForm}>
					<div className='space-y-8'>
						<div className=' uppercase text-center font-semibold text-blue-700 text-2xl stroke-white'>
							register form
						</div>
						<hr />
						{/*  ------------USER NAME------- */}
						<div className='space-x-10'>
							<label htmlFor='username'>Username :</label>
							<input
								type='text'
								className='border border-black rounded'
								value={userName}
								onChange={handelUser}
								autoFocus
							/>
						</div>
						{/*  ------------ PASSWORD------- */}
						<div className='space-x-10'>
							<label htmlFor='password'>passsword:</label>
							<input
								type='password'
								className='border border-black rounded'
								value={password}
								onChange={handelPassword}
							/>
						</div>
						{/*  ------------COFORMATION PASSWORD------- */}
						<div className='space-x-6'>
							<label htmlFor='password'>confirm pass:</label>
							<input
								type='password'
								className='border border-black rounded'
								value={conPassword}
								onChange={handelConPassword}
							/>
						</div>
						{/*  ------------EMAIL------- */}
						<div className='space-x-16'>
							<label htmlFor='email'>email:</label>
							<input
								type='email'
								className='border border-black rounded'
								value={email}
								onChange={handelEmail}
							/>
						</div>

						<div className=' text-center'>
							<button
								className=' border border-black p-2 rounded bg-blue-700 text-white hover:bg-white hover:text-black'
								onClick={handelForm}>
								SUBMIT
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Register;
