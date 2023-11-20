import { createContext } from 'react';
import { LinkContext, LinkProps } from './link.types';

export const DefaultLinksValue: LinkProps = {
	data: [],
};

export const DefaultLinkContext: LinkContext = {
	linkContext: DefaultLinksValue,
	setLinkContext(): void {
		throw new Error('Function not implemented.');
	},
};

export const LinkDraggerContext =
	createContext<LinkContext>(DefaultLinkContext);
