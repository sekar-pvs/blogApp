import React, { useState, useContext, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { BlogContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import api from "../api/blogApi";
import SingleBlog from "./SingleBlog";

const Card = ({ Bitem }) => {
	const { id } = useParams();
	console.log("params", id);
	/* useEffect(() => {
		const { favour, setFavour, color, setColor, blogItems, setBlogItems } =
			useContext(BlogContext);
	}, [blogItems]); */
	const { favour, setFavour, color, setColor, blogItems, setBlogItems } =
		useContext(BlogContext);
	useContext(BlogContext);
	console.log("favour items", favour);
	const handelFavour = (e) => {
		e.preventDefault();
		setColor(!color);
	};
	// DELETE OPERATION IS DONE
	/* 	const handelDelete = (id) => {
		api.delete(`/blogitems/${id}`);
		const listItems = blogItems.filter((item) => item.id !== id);
		setBlogItems(listItems);
	}; */

	return (
		<div className='  text-justify shadow-2xl  hover:scale-105 duration-75  rounded-2xl  p-4'>
			<img src={`image/${Bitem.url}.jpg`} alt={`${Bitem.url}`} />
			<div>
				<span className=' font-bold text-2xl'>{Bitem.title}</span>
				<br />
				<span className=' '>{Bitem.content.slice(0, 70)}...</span>
			</div>
			<div className='mt-6 flex justify-between'>
				<div>
					{/* 	<Routes>
						<Route path={`/singleblog/:id`} element={<SingleBlog />}></Route>
					</Routes> */}

					<a href='#' className=' hover:text-blue-600 '>
						<Link to={`/singleblog/${Bitem.id}`}>Learn more...</Link>
					</a>
				</div>

				{/* <button
					onClick={handelFavour}
					className={`${color ? " bg-pink-600" : " bg-white"}`}>
					<FaGithub />
				</button> */}
				{favour.includes(Bitem) ? (
					<div className=' border border-blue-700 p-1 bg-red-600 rounded text-white'>
						<button
							className=' font-serif shadow-2xl hover:scale-105 duration-75  '
							onClick={() => {
								setFavour(favour.filter((c) => c.id !== Bitem.id));
							}}>
							Remove
						</button>
					</div>
				) : (
					<div className=' border border-blue-700 p-1 bg-blue-600 rounded text-white'>
						<button
							className=' font-serif shadow-2xl hover:scale-105 duration-75 '
							onClick={() => setFavour([...favour, Bitem])}>
							Add Fav
						</button>
					</div>
				)}
				{/* 	<div>
					<button
						onClick={() => handelDelete(Bitem.id)}
						className=' cursor-auto'>
						del
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default Card;
