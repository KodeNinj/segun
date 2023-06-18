//the images
import image2 from '../assets/image2.jpg'
// import image3 from '../../assets/image3.jpg'
//bakeet images
import coverss from '../assets/bakeets/cover.png'
import customize from '../assets/bakeets/customize.png'
import dash from '../assets/bakeets/dash.png'
import load from '../assets/bakeets/load.png'
import onboard from '../assets/bakeets/onboard.png'
import pass from '../assets/bakeets/pass.png'
import stated from '../assets/bakeets/stated.png'
import success from '../assets/bakeets/success.png'
//harbode images
import harbode1 from '../assets/harbode/1.png'
import harbode2 from '../assets/harbode/2.png'
import harbode3 from '../assets/harbode/3.png'
import harbode4 from '../assets/harbode/4.png'
import harbode5 from '../assets/harbode/5.png'
import harbode6 from '../assets/harbode/6.png'
//dwin images
import games from '../assets/dwin/games.png'
import bills from '../assets/dwin/bills.png'
import home from '../assets/dwin/home.png'
import investment from '../assets/dwin/investment.png'
import peer from '../assets/dwin/peer.png'
import signup from '../assets/dwin/signup.png'
import transfer from '../assets/dwin/transfer.png'
import cover from '../assets/dwin/cover.png'
//smuut images
import cart from '../assets/Smuut/cart.png'
import homes from '../assets/Smuut/home.png'
import login from '../assets/Smuut/login.png'
import onboarding from '../assets/Smuut/onboarding.png'
import scan from '../assets/Smuut/scan.png'
import covers from '../assets/Smuut/cover.png'
//luta images
import luta_cover from '../assets/luta/cover.png'
import feedbacks from '../assets/luta/feedback.png'
import message from '../assets/luta/message.png'
import onboardings from '../assets/luta/Onboarding.png'
import register from '../assets/luta/register.png'
import reset from '../assets/luta/reset.png'
import splash from '../assets/luta/Splash.png'
import usages from '../assets/luta/Usage.png'
import user from '../assets/luta/User.png'
import segun from '../assets/Segun.png'
//end of image
export const ProjectDevArray = [
    {
        id: 1,
        title: "Harbode Website",
        techs: ["ReactJs", "EmailJS", "Css","Git"],
        link1: "https://harbode.vercel.app",
        link2: "https://github.com/KodeNinj/harbode",
        mainImg: harbode1,
        otherImgs: [harbode2, harbode3, harbode4, harbode5, harbode6],
        category: "Dev",
        details: "This is from the design full project that focuses on ensuring easy and smooth way for users to find accommodation online. The project started with figuring out the pattern of online house hunting in Nigeria, Especially in Lagos. The hustle of searching for numerous apartment with beautiful images online but later discovered that the house is not what they expected it to be. Also, popular house hunting platforms in Lagos here always leave the communication with the agent to be outside the platform, this makes most house hunters be susceptible to extortion as the condition stated on their platform changes when they chat them up or even give them a call. This also makes reporting and monitoring of the agent's integrity almost impossible for these platforms. How about scammers that pose as agent on these platforms. Most of these users are not verified. This project was developed with ReactJs and the styling was done using pure CSS.",
        process: ["This project was developed with ReactJs and the styling was done using pure CSS.",
                "The website was integrated with the ability to send emails directly and also receive an automated reply. This was used in the contact us form.",
                "Another thing that was integrated into this project is the Toast notification that notify users that their mail has been sent successfully."
    ],
        bullet: [
            "Fully responsive landing page highlighting all the information of the platform",
            "Explore list to view available properties and the price",
            "Login and sign in page that is not fully integrated to accept information (this is a test project)"
        ],
        features: [
            "User authentication means to do proper KYC for the agents who are advertising on the platform",
            "User-Agent communication integrated in-situ the platform",
            "Ability to filter properties based on your budget and preferences",
            "Feature that ensure reporting agent, glitches, or other challenges to Harbode customer agent"
        ]


    },
    {
        id: 2,
        title: "SuperDiva Website",
        techs: ["ReactJs", "EmailJS", "Css","Git"],
        link1: "https://superdiva.vercel.app",
        link2: "https://github.com/KodeNinj/superdiva",
        mainImg: image2,
        otherImgs: [],
        category: "Dev",
        details: "SuperDiva is a fashion e-commerce store for women of varios age and sizes. This is my first attempt towards creating multiple pages using ReactJS. To be honest, i focuses on different concept such as state management with Redux, API integration using Flutterwave payment gateway, etc. You can do the following on the website:",
        process: [
            "This project handles states using Redux Toolkit. This project is my major first project using redux. Even the entire project is for me to familiarize with Redux and state management. A V.2 will be added that prioritize aesthetic with the impeccable state management",
            "This project also integrate Toast alert to notify users for an item already in the cart. On the app, you have the:",
            "Ability to Preview products before adding to cart",
            "Ability to save item as favorite",
            "Ability to add item to cart and view",
            "Ability to checkout using test Flutterwave API",
        ],
        
        features: [
            "User authentication means to do proper KYC for the agents who are advertising on the platform",
            "User-Agent communication integrated in-situ the platform",
            "Ability to filter properties based on your budget and preferences",
            "Feature that ensure reporting agent, glitches, or other challenges to Harbode customer agent"
        ]


    },
    {
        id: 3,
        title: "portfolio Website", 
        techs: ["ReactJs", "EmailJS", "Tailwind","AOS"],
        link1: "https://segun-fadiya.vercel.app/",
        link2: "https://github.com/KodeNinj/segun",
        mainImg: segun,
        otherImgs: [segun],
        category: "Dev",
        details: "This is my personal portfolio. Well, that's what you are checking now. The idea behind the website is to be simple, yet stylish and elegant.  For the development, I used ReactJs (Obviously) and style it using Tailwind CSS. There are some small-quantity of some secret ingredient used in this project. Some of them which include: ",
        bullet: [
            "AOS library - Used to add float-in animation to the components",
            "EmailJs - Used in handling the CONTACT ME section of the website",
            "State management managed by React useState hook - No serious state change that could have require Redux or full state management tool",
        ],
        process: ["fg"],
        features: [
            "User authentication means to do proper KYC for the agents who are advertising on the platform",
            "User-Agent communication integrated in-situ the platform",
            "Ability to filter properties based on your budget and preferences",
            "Feature that ensure reporting agent, glitches, or other challenges to Harbode customer agent"
        ]


    },
]
// second array for design
// second array for design
// second array for design
export const ProjectDesignArray = [
    {
        id: 1,
        title: "Harbode Website",
        techs: ["Research", "Wireframes", "Ux Design", "Prototype"],
        link1: "https://www.figma.com/proto/dctHaHfpAnd5xiX2nGEXoI/Untitled?node-id=0%3A1&scaling=scale-down&starting-point-node-id=3%3A37",
        link2: "#",
        mainImg: harbode1,
        otherImgs: [harbode2, harbode3, harbode4, harbode5, harbode6],
        category: "Design",
        process: ["Research: This was done by visiting numerous real estate websites as a user to know how the user-journey looks like on these platforms. Also, carried out a survey to know the pain people experience while trying to get an apartment (Lagos state being the focus)", 
        //next 
        "Analysis: this involved counting my eggs toknow the good, bad, big and small. The response from my research questions were analysed to know the most talked-about pain-point, the ones that is related to design-related, those that are business-logic related", 
        //next
        "Solution Proposition: one of the problems mention frequently during the survey and interview was extortion and lack of transparency when it comes into payment. So for this I propose a transparent means where all the fees (including those that are always hidden) can be listed for users to see what they are paying for. Also, I created a means to communicate with agent on the website rather that depending on other 3rd party platform like Whatsapp. These were done through sketching, and hi-fidelity design and prototype on Figma",
        //next
        "User Feedback: The sole purpose of this project is to create a solution for users. The solution were given to some of the interview participants to get their feedback and also to see how easy they could navigate the platform"
    ],
        details: "This is a full project that focuses on ensuring easy and smooth way for users to find accommodation online. The project started with figuring out the pattern of online house hunting in Nigeria, Especially in Lagos. The hustle of searching for numerous apartment with beautiful images online but later discovered that the house is not what they expected it to be. Also, popular house hunting platforms in Lagos here always leave the communication with the agent to be outside the platform, this makes most house hunters be susceptible to extortion as the condition stated on their platform changes when they chat them up or even give them a call. This also makes reporting and monitoring of the agent's integrity almost impossible for these platforms. How about scammers that pose as agent on these platforms. Most of these users are not verified.",
        features: [
            "User authentication means to do proper KYC for the agents who are advertising on the platform",
            "User-Agent communication integrated in-situ the platform",
            "Ability to filter properties based on your budget and preferences",
            "Feature that ensure reporting agent, glitches, or other challenges to Harbode customer agent",
            "View live link here: http://segun-fadiya.vercel.app/"
        ]


    },
    {
        id: 2,
        title: "Bakeet App",
        techs: ["Research", "UI Design", "Prototype"],
        link1: "https://superdiva.vercel.com",
        link2: "#",
        mainImg: coverss,
        otherImgs: [onboard, stated, pass, load, success, dash,customize],
        category: "Design",
        process: [],
        details: "Bakeet is a mini app project that focuses on bringing pastries closer to their customers. Via this app, their customers can order different pasteries, make payment and track their yummy-goodness' delivery. This project is completed using aesthetic, modern, and intuitive User interface in a way that ensures seamless navigation across the platform. The app contain the following features",
        features: [
            "Aesthetic, modern, and intuitive User interface",
            "Different categories of pasteries",
            "Fast and easy payment method",
            "An easy to use contact us chat box",
            "Tracking of order movement from the oven to your doorstep",
        ]


    },
    {
        id: 3,
        title: "Smuut Mobile App",
        techs: ["Research", "wireframes", "UX Design", "Prototype"],
        link1: "https://superdiva.vercel.com",
        link2: "#",
        mainImg: covers,
        otherImgs: [ onboarding, login, homes, scan, cart, covers],
        category: "Design",
        details: "Smuut App is pronounced as 'SMOOTH' which desribe the experience of the user while making transactions on the app. The rise of card theft online recently brought about this project. It focuses on creating an avenue where user can make secured payments (in-store and online) without any fear of compromising the security of their funds. This is done by integrating QR payment which is fast and reliable to ensure faster transaction time. The transaction will be forced to be within Smuut acount of the sender to Smuut account of the merchant. This way, customers don't need to wait for 20-infinity minutes just to confirm their transaction in the store as transation is processed in real tssime and alert will be delivered in nano seconds.  ",
        features: [],
        process: [
            "Collection of data from users to figure out their behaviour and thought when it comes to online payment. Over 30 participant. This include knowing their favorite payment platform, and how they like to pay for stuff inside a mall/store. Also, I tend to figure out painpoint from users who makes payment regularly using top payment platforms/channels (banks app, opay, Quickteller, debit cards, USSD, etc ). Also, i take into consideration to go through user feedbacks on playstore and appstore to further know the challenges and features they enjoyed on these apps.",
            "Made deduction from the data I got from the research. 90% of the users makes at least 2 transactions that involved either their debit cards, or their bank's mobile app. Also, more than 60% of the prticipant mention threat of online card compromise as a major threat to payment. 40% of the participant also talked about their fraustration whenever they make a transfer to merchant in stores as they will have to wait patiently for the merchant to recieve the alert while they pray that their bank should not mess them up by not sending the alert. ",
            "Creating different sketches to strategically distribute the solution to these challenges across the app",
            "Designing the full app while ensuring beautiful UI without forsaking having a seamless experience across the app",
            "Testing of the prototype to see how user navigate across the app, their thoughts about the app, where they are stuck and confuse about a feature, etc. Making changes here and there to solve the deficiencies picked by the testers",
        ]


    },
    {
        id: 4,
        title: "DWIN Bank Software",
        techs: ["Research", "Design", "Prototype"],
        link1: "https://www.figma.com/proto/ZxZjvukwLGf3uYwYKzWAAZ/DWIN-BANK?node-id=65%3A22&scaling=scale-down&page-id=1%3A2&starting-point-node-id=65%3A22",
        link2: "#",
        mainImg: cover,
        otherImgs: [games, bills,home,investment, peer, signup,transfer],
        category: "Design",
        process: [],
        details: "This is a FinTech cum casino software design that tends to integrate mutual savings while still performing the regular banking app functions. Apart from the mutual savings, the software also give the user opportunity to play games staking from their gaming account. This means users have different accounts on DWIN. One for general savings and the other for gaming. The features of the software include:",
        features: [
            "Multiple accounts for savings and gaming",
            "Investment opportunities where users can contribute towards a project and gain from the profit of th project",
            "Casino integrated feature that allows users play games and win money",
            "Mutual contribution which the Yorubas refers to as AJO. This let users join a 10 members group, get a collection number, save money in the groups account and collect the pool contribution based on their collection number.",
            "Ability to send money from their DWIN account to other DWIN account",
            "Ability to send money from their DWIN account to other bank's account",
        ]


    },

    {
        id: 5,
        title: "Luta Social App",
        techs: ["Research", "UX Design", "Prototype"],
        link1: "#",
        link2: "#",
        mainImg: luta_cover,
        otherImgs: [splash,onboardings,register,reset,message,feedbacks,usages,user],
        category: "Design",
        process: [],
        details: "LUTA is a social app target towards connecting student across Nigeria.The app consist of forums that is either school specific or a general forum for all institution. Thia is a collaborative work with another badass designer with whom I worked with to ensure this project is a success. Our roles as the product dedigner for this start up app include but not limited to researching and information gathering from the intended users, analysing of data and deducing inference from the result, sketches and design of interfaces, testing, collaboration with the devs, etc. The app include the following features:",
        features: [
            "Student verification to ensure safe platform for our users",
            "Connect with students in any institution in Nigeria be it polytechnics, colleges, universities, etc",
            "Collaboration with like minds via forums and group calls",
        ]


    },
]
