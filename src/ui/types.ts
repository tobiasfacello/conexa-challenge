//! React Core Types
import { ReactNode, ButtonHTMLAttributes, BaseHTMLAttributes } from 'react';

//* Avatar UI Component
export type AvatarProps = {
	src: string;
	title: string;
};

//* Button UI Component
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	readonly children: ReactNode;
	readonly selected: boolean | null;
	readonly onClick?: () => void;
};

//* Card UI Component
export type CardProps = {
	readonly children: React.ReactNode;
	readonly variant: 'character' | 'episode';
};

//* Text UI Component
type TitleProps = BaseHTMLAttributes<HTMLHeadingElement> & {
	variant: 'title';
	children: React.ReactNode;
};

type SubtitleProps = BaseHTMLAttributes<HTMLHeadingElement> & {
	variant: 'subtitle';
	children: React.ReactNode;
};

type ParagraphProps = BaseHTMLAttributes<HTMLParagraphElement> & {
	variant: 'paragraph';
	children: React.ReactNode;
};

type DetailsProps = BaseHTMLAttributes<HTMLParagraphElement> & {
	variant: 'details';
	children: React.ReactNode;
};

//? Unified Text Props
export type TextProps =
	| TitleProps
	| SubtitleProps
	| ParagraphProps
	| DetailsProps;
