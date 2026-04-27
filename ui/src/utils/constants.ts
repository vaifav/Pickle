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

export const DUMMY_CATEGORIES = [
	{
		id: 1,
		name: "Mango Pickle",
		numberOfVarities: 15,
		isComingSoon: false,
		styles: "md:col-span-2 md:row-span-2",
		image: "https://plus.unsplash.com/premium_photo-1675731118431-fdaf4dc283ee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		name: "Lemon & Citrus",
		numberOfVarities: 5,
		isComingSoon: false,
		styles: "md:col-span-1",
		image: "https://plus.unsplash.com/premium_photo-1675731118156-51ade18e82b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
	},
	{
		id: 3,
		name: "Garlic & Ginger",
		numberOfVarities: 7,
		isComingSoon: false,
		styles: "md:col-span-1",
		image: "https://plus.unsplash.com/premium_photo-1675731118463-c475c5508b80?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		name: "Chilli & Spicy",
		numberOfVarities: 3,
		isComingSoon: false,
		styles: "md:col-span-1",
		image: "https://plus.unsplash.com/premium_photo-1675731117887-a42bad4a4ce2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 5,
		name: "Dry snacks & Farsan",
		numberOfVarities: 0,
		isComingSoon: true,
		styles: "md:col-span-1",
		image: "https://plus.unsplash.com/premium_photo-1668862483214-30aa4f8e915f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

// https://plus.unsplash.com/premium_photo-1726876952155-b08350d9b9af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8
