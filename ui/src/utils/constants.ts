import dates from "../assets/DatesPickle.png";
import lemon from "../assets/Malabar_Lemon_Pickle.png";
import jaggery from "../assets/Jaggerylemonpickle.png";
import { BookOpen, CookingPot, Phone, Store } from "lucide-react";

export const ENDPOINTS = {
	HOME: "/",
	PRODUCTS: "/products",
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
		path: ENDPOINTS. PRODUCTS,
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
	shop: ["All Pickles","Mango Pickles", "Lime Pickles", "Chilli Pickles", "Gift Boxes", "Bundles"],
	info: ["Our Story", "How We Make", "Ingredients", "Shipping Policy", "Returns"],
	connect: ["Instagram", "WhatsApp", "Facebook", "hello@example.in"],
};

export const OUR_PROCESS_STEPS = [
	{
		title: "Browse & Pick",
		description: "Explore 40+ handcrafted varieties. Filter by taste, size, or occasion.",
	},
	{
		title: "Place Your Order",
		description: "Secure checkout with UPI, and card options. Pan-India delivery.",
	},
	{
		title: "We craft fresh",
		description: "Each jar is made to order in small batches — never pre-stockpiled.",
	},
	{
		title: "Delivered safely",
		description: "Tamper-proof jars, eco packaging, delivered in 3–5 business days.",
	},
];

// Dummy data
export const DUMMY_PERSON =
	"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww";

export const DUMMY_FEATURED_PICKLES = [
	{
		name: "lemon",
		image: lemon,
		price: 160,
		description: "Sun-dried limes, red chilli, fenugreek, aged in clay pots, pure masala",
	},
	{
		name: "dates",
		image: dates,
		price: 120,
		description: "Arabian dates, village-ground spices, cold-pressed sesame oil",
	},
	{
		name: "garlic",
		image: lemon,
		price: 180,
		description: "Small pearl onions, tamarind, kokum, traditional Kerala masala",
	},
	{
		name: "lemon",
		image: jaggery,
		price: 130,
		description: "Sun-dried limes, jaggery, fenugreek, aged in clay pots, kerala traditional masala",
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

export const DUMMY_REVIEWS = [
	{
		review: "The spicy mango pickle has that authentic homemade kick. The mustard oil base is perfect and reminds me of my grandmother's recipe.",
		name: "Amit Sharma",
		place: "Jaipur, Rajasthan",
	},
	{
		review: "Incredible crunch on the garlic pickles! They arrived safely in Mumbai with zero leakage, which I was honestly worried about.",
		name: "Rohan Deshmukh",
		place: "Mumbai, Maharashtra",
	},
	{
		review: "The balance of tanginess and spice in the lime pickle is spot on. It pairs beautifully with simple curd rice.",
		name: "Kavitha Iyer",
		place: "Chennai, Tamil Nadu",
	},
	{
		review: "Good quality, but I wish the 'Extra Hot' version was actually hotter. Still, the texture is much better than store-bought brands.",
		name: "Sandeep Gill",
		place: "Chandigarh, Punjab",
	},
];
