import { useContext, useState } from "react";
import { BlogContext } from "../context/Context";
import Card from "./Card";

const Fav = () => {
	const { favour } = useContext(BlogContext);
	return (
		<div>
			{favour.length === 0 ? (
				<div className=' h-screen text-center text-2xl '>
					Favour list is empty{" "}
				</div>
			) : (
				<section className=' w-3/5  mx-8 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4  space-x-8 '>
					{favour.map((item) => {
						return <Card key={item.id} Bitem={item} />;
					})}
				</section>
			)}
		</div>
	);
};

export default Fav;
