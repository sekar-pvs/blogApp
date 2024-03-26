import React, { useState } from "react";

const RegisterAdvance = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password1: "",
	});

	const { name, email } = formData;

	const handelChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handelSubmit = (e) => {
		//e.preventDefault();
		e.preventDefault();
		setFormData({
			name: "",
			email: "",
			password: "",
			password1: "",
		});
	};
	return (
		<form onSubmit={handelSubmit}>
			name:
			<input
				type='text'
				required
				name='name'
				id='name'
				value={name}
				onChange={handelChange}
			/>
			emIL
			<input
				type='text'
				required
				name='email'
				id='email'
				value={email}
				onChange={handelChange}
			/>
			<button onSubmit={handelSubmit}>click</button>
		</form>
	);
};

export default RegisterAdvance;
