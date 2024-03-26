import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { BlogContext } from "../context/Context";

const Content = () => {
	//console.log(BlogContext);
	const { name, blogItems } = useContext(BlogContext);
	console.log(name);
	return (
		<div className=' h-auto'>
			{blogItems.length === 0 ? (
				<div className=' h-screen text-center text-2xl '>List is an empty</div>
			) : (
				<section className=' w-4/5  mx-8 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4  space-x-8  '>
					{blogItems.map((item) => {
						return <Card key={item.id} Bitem={item} />;
					})}
					{/* <div>
				<ul>

					{blogItems.map((item) => (
						<li key={item.id}>
							<div>{item.title}</div>
							<img src={`${item.url}.jpg`} alt={`${item.url} no image`} />
							<div>{item.content}</div>
						</li>
					))}
				</ul>
			</div> */}
				</section>
			)}
		</div>
	);
};

export default Content;
