import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Fav from "./components/Fav";
import Login from "./components/Login";
import AddBlog from "./components/AddBlog";
import { BlogContext } from "./context/Context";
import LandingPage from "./components/LandingPage";
import api from "../src/api/blogApi";
//import axios from "axios";
import Register from "./components/Register";
import SingleBlog from "./components/SingleBlog";
import EditBlog from "./components/EditBlog";
import RegisterAdvance from "./components/RegisterAdvance";

const App = () => {
	const loginStatus = true;
	const { setBlogItems, blogItems } = useContext(BlogContext);
	/* useEffect(() => {
		const fetchBlog = async () => {
			try {
				const responce = await fetch(`${baseUrl}`);
				if (!responce.ok) throw Error(" Data is not received");
				const data = await responce.json();
				console.log(data);
				setBlogItems(data);
			} catch (err) {
				console.error(err.msg);
			}
		};
		fetchBlog();
	}, []); */

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const responce = await api.get("/blogItems");
				setBlogItems(responce.data);
				console.log("axios working bro");
				if (!responce.ok) {
					throw Error(" Data is not received");
				}
			} catch (err) {
				if (err.responce) {
					console.log(err.responce.data);
				} else {
					console.log(`Error : ${err.message}`);
				}
			}
		};
		fetchBlog();
	}, [setBlogItems]);

	return (
		<div className='h-screen'>
			<>
				<Header />

				<Routes>
					<Route path='/' element={<Content />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/favour' element={<Fav />} />
					<Route path='/login' element={<Login />} />
					<Route path='/addblog' element={<AddBlog />} />
					<Route path='/register' element={<Register />} />
					//
					<Route path='/singleblog/:id' element={<SingleBlog />} />
					<Route path='/editblog/:id' element={<EditBlog />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
				<RegisterAdvance />
			</>
		</div>
	);
};

export default App;
