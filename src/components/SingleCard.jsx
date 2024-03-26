import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/blogApi";
import { BlogContext } from "../context/Context";
//import image from "image";
const SingleCard = ({ item, url }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	console.log(typeof id);
	const ID = Number(id);

	console.log("id", ID);
	console.log(typeof ID);
	const { blogItems, setBlogItems } = useContext(BlogContext);
	/* console.log("blogItems", blogItems);
	const listItems = blogItems.filter((item) => item.id !== ID);
	console.log("list ", listItems); */

	const handelDelete = async (ID) => {
		console.log(ID, typeof ID);
		try {
			await api.delete(`/blogItems/${ID}`);
			const listItems = blogItems.filter((item) => item.id !== id);
			console.log("list ", listItems);
			setBlogItems(listItems);
			navigate("/");
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<>
			<div className=' h-full flex justify-center items-center '>
				<div className=' h-4/6'>
					<div className=' h-fit w-fit'>
						<img
							src={`../../image/${url}.jpg`}
							alt={`${url}`}
							className='   h-3/5 w-full'
						/>
					</div>
					<div className=' space-y-4'>
						<div className=' text-4xl font-medium'>{item.title}</div>
						<div className=' text-2xl'>{item.content}</div>
					</div>
				</div>
			</div>
			<div>
				<div className=' flex justify-center items-center space-x-4 '>
					<div className='text-white w-20 border border-black bg-blue-600 text-center text-xl rounded hover:bg-white hover:text-blue-700 font-bold p-2 hover:scale-105 transition'>
						<Link to={`/editblog/${id}`}>
							<button className=' '>Edit</button>
						</Link>
					</div>
					<div className='text-white w-20 border border-black bg-red-600 text-center text-xl rounded hover:bg-white hover:text-red-700 font-bold p-2 hover:scale-105 transition'>
						<button onClick={() => handelDelete(ID)} className=' cursor-auto'>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCard;
