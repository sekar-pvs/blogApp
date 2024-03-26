import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className='h-full  space-y-10  p-10 mt-20 bg-gray-500'>
			<div className=' uppercase text-center align-middle text-2xl font-extrabold text-lime-500 '>
				welcome to pvs blog
			</div>

			<div>
				<div className='flex space-x-5 justify-center items-center'>
					<div className='border border-black p-2 w-20 rounded text-center'>
						<Link to='/login '>login</Link>
					</div>
					<div className='border border-black p-2 w-20 rounded text-center'>
						<Link to='/register'>Register</Link>
					</div>
				</div>
			</div>
			<div className=' text-center uppercase text-teal-500  '>
				<div>In this website we share our blog </div>
				<div> copyright &copy; {year}</div>
			</div>
		</div>
	);
};

export default LandingPage;
