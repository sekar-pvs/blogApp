import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/Context";
import api from "../api/blogApi";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
	// DATA FROM CONTEXT API
	const navigate = useNavigate();
	const {
		blogItems,
		setBlogItems,
		addBlogTitle,
		setAddBlogTitle,
		addBlogContent,
		setAddBlogContent,
	} = useContext(BlogContext);

	// FOR ADD DATA WE WANT ID , URL , TITLE , CONTENT
	// FUNCTION TO DO ADD TITILE & CONTENT & SUBMIT FORM
	const handelSubmit = async (e) => {
		e.preventDefault();
		const id = blogItems.length ? blogItems[blogItems.length - 1].id + 1 : 1;

		console.log("id", id);
		const newItem = {
			id,
			title: addBlogTitle,
			url: "sekar",
			content: addBlogContent,
		};
		console.log("add items", newItem);
		// API POST METHOD
		try {
			const responce = await api.post("/blogItems", newItem);
			const addItem = [...blogItems, responce.data];
			setBlogItems(addItem);
			setAddBlogTitle("");
			setAddBlogContent("");
			navigate("/");
		} catch (err) {
			console.log(err.message);
		}
	};
	const handelAddTitle = (e) => {
		setAddBlogTitle(e.target.value);
	};
	const handelAddContent = (e) => {
		setAddBlogContent(e.target.value);
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
					ADD BLOG'S
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
							value={addBlogTitle}
							onChange={handelAddTitle}
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
							value={addBlogContent}
							onChange={handelAddContent}
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

export default AddBlog;
