//! UI Types

//! React Core Types
import { ReactNode, ButtonHTMLAttributes } from 'react';

//* Button Component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	readonly children: ReactNode;
	readonly onClick?: () => void;
}

//* Card Component
export type CardProps = {
	readonly children: React.ReactNode;
	readonly variant: 'character' | 'episode';
};

//* Text Component
export type TextProps = {
	readonly children: React.ReactNode;
	readonly variant: 'title' | 'subtitle' | 'paragraph' | 'details';
};
