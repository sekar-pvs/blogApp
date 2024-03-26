import React, { useContext, useEffect } from "react";
import { BlogContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/blogApi";
const EditBlog = () => {
	const navigation = useNavigate();
	const {
		blogItems,
		setBlogItems,
		editBlogTitle,
		setEditBlogTitle,
		editBlogContent,
		setEditBlogContent,
	} = useContext(BlogContext);
	const { id } = useParams();
	console.log(id, typeof id);
	const ID = Number(id);
	/*console.log("blogItems", blogItems);
	console.log("id" + ID); */

	const singleItem = blogItems.find((item) => item.id === id);
	console.log("ss" + singleItem.id, typeof singleItem.id);

	useEffect(() => {
		setEditBlogTitle(singleItem.title);
		setEditBlogContent(singleItem.content);
	}, [setEditBlogContent, setEditBlogTitle]);
	//setEditBlogContent(singleItem.map((item) => item.title));
	// update post
	const updateBlog = {
		id: ID,
		title: editBlogTitle,
		url: "sekar",
		content: editBlogContent,
	};
	console.log("update ", updateBlog);
	/* console.log(
		"indi",
		blogItems.map((item) => (item.id === ID ? { ...updateBlog } : item))
	);  */

	const handelSubmit = async (e) => {
		e.preventDefault();
		try {
			const responce = await api.put(`/blogItems/${id}`, updateBlog);
			setBlogItems(
				blogItems.map((item) => (item.id === id ? { ...responce.data } : item))
			);
			setEditBlogTitle("");
			setEditBlogContent("");
			navigation("/");
		} catch (err) {
			console.log(`ERROR : ${err.message}`);
		}
	};
	const handeleTitle = (e) => {
		setEditBlogTitle(e.target.value);
	};
	const handelContent = (e) => {
		setEditBlogContent(e.target.value);
	};
	return (
		<div className='h-5/6 flex justify-center items-center'>
			{/* <div>
        {" "}
        <img src='' alt='' /> <input type='file' name='' id='' />{" "}
        <button>submit</button>
    </div> */}
			<form
				className='w-3/6  h-5/6 p-6 border border-red-800 space-x-4 space-y-3 shadow-2xl rounded-md'
				onSubmit={handelSubmit}>
				<div className='text-center text-2xl font-bold text-blue-700 '>
					edit BLOG'S
				</div>
				<hr />
				<div className=' space-y-3'>
					<div>
						<label htmlFor='title' className=' font-semibold text-xl'>
							Title :
						</label>
					</div>
					<div>
						<input
							type='text'
							name='title'
							id=''
							className='border border-gray-700 w-96 h-10 rounded-md'
							value={editBlogTitle}
							onChange={handeleTitle}
							required
						/>
					</div>
				</div>
				<div className=' space-y-3'>
					<div>
						<label
							htmlFor='textArea'
							className=' font-semibold text-xl space-x-3 gap-x-2'>
							Blog Content :
						</label>
					</div>
					<div>
						<textarea
							className=' border border-gray-700 h-24 w-96 rounded-md'
							value={editBlogContent}
							onChange={handelContent}
							required></textarea>
					</div>
				</div>
				<div className=' flex justify-center items-center'>
					<button className='   bg-blue-700 w-full p-2 font-extrabold text-xl rounded-md  hover:bg-white hover:text-blue-700'>
						{" "}
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditBlog;
