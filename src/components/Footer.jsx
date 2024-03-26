import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<footer className=' h-20 bg-gradient-to-t from-blue-700 to-white text-center p-2 space-y-10 '>
			<div className=' text-black font-bold  '>
				copyright &copy; {year}
				<div className='flex space-x-4 justify-center'>
					<a href='https://www.instagram.com'>
						<IoLogoInstagram />
					</a>

					<a href='https://www.facebook.com'>
						<FaFacebookSquare />
					</a>
					<a href='https://github.com/sekar-pvs/'>
						<FaGithub />
					</a>
				</div>
			</div>
			<div></div>
		</footer>
	);
};

export default Footer;
