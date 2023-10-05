export interface AuthLayoutProps {
	children?: string | JSX.Element | JSX.Element[];
	title: string;
	description: string;
	subDescription: string;
	linkLabel?: 'Login' | 'Register';
	link?: string;
}

export type LayoutLabelContentProps = {
	[key: string]: AuthLayoutProps;
};
