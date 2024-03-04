import React from "react";

const Footer = () => {
	let date = new Date().getFullYear();
	return (
		<footer className="w-full h-[50px] bg-[var(--fff)] flex items-center justify-center text-slate-400">
			<p>All right reserved &copy; {date}</p>
		</footer>
	);
};

export default Footer;
