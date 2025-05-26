//! UI Types

//! React Core Types
import { ReactNode, ButtonHTMLAttributes, BaseHTMLAttributes } from 'react';

//* Button Component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	readonly children: ReactNode;
	readonly selected: boolean | null;
	readonly onClick?: () => void;
}

//* Card Component
export type CardProps = {
	readonly children: React.ReactNode;
	readonly variant: 'character' | 'episode';
};

//* Text Component
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

export type TextProps =
	| TitleProps
	| SubtitleProps
	| ParagraphProps
	| DetailsProps;
