import React from "react";
import { Box } from "../Components/Box";
import Title from "../Components/Title";
import heroimg from "../assets/me.png";

const About = () => {
	return (
		<div
			className="min-h-[90vh] text-white flex cursor-default justify-center items-center py-[80px] md:flex-row w-screen flex-col-reverse"
			id="about">
			<div className="lefts md:w-[45%] w-[100%] ">
				<img
					src={heroimg}
					alt="a young boy smiling"
					className="w-[60%] md:w-[70%] lg:w-[80%] ml-[20%] md:ml-[10%]"
				/>
			</div>
			{/* end of left side */}
			<div className="rights md:w-[45%] w-[100%] md:pl-[32px] md:ml-[0] md:mb-[0] mb-[50px] md:mt-[30px]">
				<Title small="ABOUT ME" large="Who I Am" />
				<div className="content w-full">
					<p className=" px-[32px] md:px-[0] text-justify leading-[38px] my-[10px]">
						Segun is a skilled junior developer specializing in frontend
						development and product design. With expertise in frontend
						development tools and languages, he crafts user-friendly interfaces
						that seamlessly blend aesthetics with functionality. However,
						Segun's approach goes beyond creating visually appealing designs. He
						prioritizes creating practical solutions that address real-world
						problems, ensuring that his designs are not just beautiful but also
						meaningful and impactful. With a passion for combining technology
						and design, Segun continuously seeks opportunities to enhance his
						skills and stay up-to-date with the latest industry trends. His
						commitment to creating purposeful solutions sets him apart as a
						valuable asset in the world of frontend development and product
						design.
					</p>
					<div className="funfact w-[90%] mx-[5%] md:mx-[0] md:w-[100%]" data-aos="slide-up">
						<h3 className="text-2xl font-bold my-[24px] text-center">
							Fun Facts
						</h3>
						<div className="topfact flex md:justify-start justify-center gap-[32px] flex-wrap md:flex-nowrap mb-[32px]">
							<Box top="Started Since" bottom="2022" />
							<Box top="Self Taught" bottom="Dev" />
							<Box top="Current Role" bottom="SRE" />
							<Box top="Chill Spot" bottom="YouTube" />
						</div>
						{/* end of first top fact */}
						<div className="bottomfact flex md:justify-start justify-center gap-[32px] flex-wrap md:flex-nowrap">
							<Box top="Design Tool" bottom="Figma" />
							<Box top="Twitter" bottom="@frontend_bros" />
							<Box top="LinkedIn" bottom="Click Me" />
						</div>
						{/* end of bottom fact */}
					</div>
				</div>
			</div>
			{/* end of right side */}
		</div>
	);
};

export default About;
