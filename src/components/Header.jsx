import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
	return (
		<section className='flex justify-between p-4 bg-blue-700 text-center '>
			<div className=' text-5xl font-serif text-white'>
				PVS<span> Blog</span>
			</div>
			<IoMenu />
			<CgMenuLeft />
			<CgMenuLeft />
			<div>
				<ol className='flex space-x-16 uppercase'>
					<li className='text-white font-semibold hover:text-slate-400 flex'>
						<FaHome />

						<Link to='/'> home</Link>
					</li>
					<li className='text-white font-semibold  hover:text-slate-400'>
						<Link to='/favour'>Favour</Link>
					</li>
					<li className='text-white font-semibold  hover:text-slate-400'>
						<Link to='/addblog'> add blog</Link>
					</li>
					<li className='text-white font-semibold  hover:text-slate-400'>
						<Link to='/contact'> conatact</Link>
					</li>
					<li className='text-white font-semibold  hover:text-slate-400'>
						<Link to='/login'>login</Link>
					</li>
				</ol>
			</div>
		</section>
	);
};

export default Header;
