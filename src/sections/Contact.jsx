import React from "react";
import Form from "../Components/Form";
import Title from "../Components/Title";
import {
	FaWhatsapp,
	FaLinkedinIn,
	FaBehance,
	FaDribbble,
} from "react-icons/fa";
const Contact = () => {
	return (
		<section
			className="cursor-default my-[80px] min-h-[100vh] px-[30px] md:px-[0] w-[100vw]"
			id="contact"
			data-aos="slide-up">
			<Title small="CONTACTS" large="How To Reach Me" />
			<p className="text-md md:text-lg text-center capitalize text-slate-300 mt-[12px]">
				All roads leads to me. Get in touch with me using any of the channels
				below.{" "}
			</p>

			{/* the social box */}
			<div className="md:w-[80%] w-full md:mx-[10%] mx-0 md:h-[100px] h-[80px] gap-[20px]  md:rounded-[60px] rounded-[5px] overflow-hidden mt-[50px] flex items-center justify-center">
				{/* behance link */}
				<a
					href="https://www.behance.net/segunfadiya?tracking_source=search_projects%7Cfrontend"
					target="_blank"
					rel="noreferrer"
					className="h-full w-full">
					<div className="h-full w-full bg-[var(--fff)] text-slate-100 flex gap-[10px] flex-col justify-center items-center hover:bg-[var(--sss)] ease duration-[1s] rounded-[5px]  hover:shadow-inner cursor-pointer">
						<FaBehance size={25} />
						<p className=" md:text-xl text-sm">Behance</p>
					</div>
				</a>
				{/* Dribbble link */}
				<a
					href="https://dribbble.com/i_Osborne"
					target="_blank"
					rel="noreferrer"
					className="md:block hidden h-full w-full">
					<div className="h-full w-full bg-[var(--fff)] text-slate-100 flex rounded-[5px]  gap-[10px] flex-col justify-center items-center ease duration-[1s]  hover:shadow-inner hover:bg-[var(--sss)] cursor-pointer">
						<FaDribbble size={25} />
						<p className=" md:text-xl text-sm">Dribbble</p>
					</div>
				</a>
				{/* linkedin link */}
				<a
					href="https://ng.linkedin.com/in/femi-fadiya-segun-pelumi"
					target="_blank"
					rel="noreferrer"
					className="h-full w-full">
					<div className="h-full w-full bg-[var(--fff)] text-slate-100 flex gap-[10px] flex-col rounded-[5px] justify-center items-center ease duration-[1s]  hover:shadow-inner hover:bg-[var(--sss)] cursor-pointer">
						<FaLinkedinIn size={25} />
						<p className=" md:text-xl text-sm">LinkedIn</p>
					</div>
				</a>

				{/* Whatsapp link */}
				<a
					href="http://wa.me/2347038329044"
					target="_blank"
					rel="noreferrer"
					className="h-full w-full">
					<div className="h-full w-full bg-[var(--fff)] text-slate-100 flex gap-[10px] flex-col justify-center items-center hover:bg-[var(--sss)] ease duration-[1s] rounded-[5px]  hover:shadow-inner cursor-pointers">
						<FaWhatsapp size={25} />
						<p className="md:text-xl text-sm">Whatsapp</p>
					</div>
				</a>
			</div>

			{/* the address section */}
			<div className="containers flex justify-center lg:flex-row flex-col lg:w-[90vw] lg:mx-[5vw] pt-[50px] gap-[40px]">
				<div className="right lg:w-[50vw] w-full">
					<h4 className="text-md md:text-xl font-bold text-[var(--secondary)] mb-[20px] text-center">
						Want to send A Mail Instead?
					</h4>
					<Form />
				</div>
				{/* the form section */}
			</div>
		</section>
	);
};

export default Contact;
