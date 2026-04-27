import type React from "react";
import type { Dispatch, SetStateAction } from "react";

export type StateProps<T, K extends string> = {
	[P in K]: T;
} & {
	[P in `set${Capitalize<K>}`]: Dispatch<SetStateAction<T>>;
};

export type CommonSectionPropsType = {
	text: string;
	dividerText: string;
	linkText?: string;
	emphasizedText?: string;
	className?: string;
	lineBreak?: boolean;
	hasLink?: boolean;
	Component: React.ComponentType
};