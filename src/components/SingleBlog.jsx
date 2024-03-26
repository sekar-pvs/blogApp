import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/Context";
import SingleCard from "./SingleCard";

const SingleBlog = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { blogItems, setBlogItems } = useContext(BlogContext);
	const ID = Number(id);
	//console.log(typeof ID);

	console.log(blogItems);
	const singleItem = blogItems.filter((item) => item.id === id);
	console.log(singleItem, "single");

	return (
		<div className=' h-auto'>
			{singleItem.map((item) => {
				return <SingleCard url={item.url} item={item} key={item.id} />;
			})}
		</div>
	);
};

export default SingleBlog;
