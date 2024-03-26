import { createContext, useState } from "react";

export const BlogContext = createContext(null);

const Context = ({ children }) => {
	const [favour, setFavour] = useState([]);
	const [color, setColor] = useState(false);
	const [blogItems, setBlogItems] = useState([]);
	const [addBlogTitle, setAddBlogTitle] = useState([]);
	const [addBlogContent, setAddBlogContent] = useState([]);
	const [editBlogTitle, setEditBlogTitle] = useState([]);
	const [editBlogContent, setEditBlogContent] = useState([]);

	// resiter variable//
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [conPassword, setConPassword] = useState("");

	return (
		<BlogContext.Provider
			value={{
				favour,
				setFavour,
				color,
				setColor,
				blogItems,
				setBlogItems,
				userName,
				setUserName,
				email,
				setEmail,
				password,
				setPassword,
				conPassword,
				setConPassword,
				addBlogTitle,
				setAddBlogTitle,
				addBlogContent,
				setAddBlogContent,
				editBlogTitle,
				setEditBlogTitle,
				editBlogContent,
				setEditBlogContent,
			}}>
			{children}
		</BlogContext.Provider>
	);
};

export default Context;
