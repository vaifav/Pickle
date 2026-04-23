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

export const DUMMY_PERSON =
	"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww";
