import dates from "../assets/DatesPickle.png";
import lemon from "../assets/Malabar_Lemon_Pickle.png";
import jaggery from "../assets/Jaggerylemonpickle.png";
import { BookOpen, CookingPot, Phone, Store } from "lucide-react";

export const ENDPOINTS = {
	HOME: "/",
	PRODUCTS: "/products",
	SHOP: "/shop",
	CONTACT: "/contact",
	OUR_STORY: "/ourstory",
	CART: "/cart",
	ACCOUNT: "/account",
};

export const NAV = [
	{
		name: "Pickles",
		path: ENDPOINTS.HOME,
		Icon: CookingPot,
	},
	{
		name: "Shop",
		path: ENDPOINTS.SHOP,
		Icon: Store,
	},
	{
		name: "Contact",
		path: ENDPOINTS.CONTACT,
		Icon: Phone,
	},
	{
		name: "Our Story",
		path: ENDPOINTS.OUR_STORY,
		Icon: BookOpen,
	},
];

export const FOOTER_DATA = {
	shop: ["Mango Pickles", "Lime Pickles", "Chilli Pickles", "Gift Boxes", "Bundles"],
	info: ["Our Story", "How We Make", "Ingredients", "Shipping Policy", "Returns"],
	connect: ["Instagram", "WhatsApp", "Facebook", "hello@example.in"],
};

// Dummy data
export const DUMMY_PERSON =
	"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww";

export const DUMMY_FEATURED_PICKLES = [
	{
		name: "lemon",
		image: lemon,
	},
	{
		name: "dates",
		image: dates,
	},
	{
		name: "garlic",
		image: lemon,
	},
	{
		name: "lemon",
		image: jaggery,
	},
];
export const DUMMY_MARQUEE = [
	"Free delivery on orders above ₹499",
	"Handcrafted in Kerala",
	"No artificial preservatives",
	"Pan-India shipping",
	"40+ pickle varieties",
	"Traditional family recipes",
	"Freshness guaranteed",
	"Free delivery on orders above ₹499",
	"Handcrafted in Kerala",
	"No artificial preservatives",
	"Pan-India shipping",
	"40+ pickle varieties",
	"Traditional family recipes",
	"Freshness guaranteed",
];
