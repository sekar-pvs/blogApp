import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
	return (
		<div>
			<div className=' flex justify-center items-center h-5/6 text-2xl mt-10 font-serif  px-5 py-10 space-y-4  '>
				<div className='h-5/6 space-y-4 text-center px-5 py-10'>
					<div className=' gap-x-5'>This is Sekar blog's </div>

					<div> You contact through this</div>

					<div className=' flex gap-x-4'>
						<SiMinutemailer />
						sekarbabu633@gmail.com
					</div>
					<div className='flex justify-center items-center'>
						<span>
							<FaPhoneAlt />
						</span>
						<span>+91 9751491532</span>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center space-x-20  '>
				<div className=' flex justify-center items-center '>
					<span className=' border border-green-700 bg-green-600 p-4 rounded font-mono text-white text-xl hover:scale-105 transition hover:bg-white hover:text-green-600'>
						{" "}
						<a href='https://wa.me/919751491532?text=hi'>what's app</a>
					</span>
				</div>
				<div className=' flex justify-center items-center'>
					<span className=' font-bold border border-black bg-slate-100  text-center p-4 rounded font-mono text-yellow-400 text-xl hover:scale-105 transition  '>
						{" "}
						<a href='mailto:sekarbabu633@gmail.com'>Mail me </a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
