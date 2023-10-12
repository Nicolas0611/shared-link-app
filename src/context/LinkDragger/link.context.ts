import { createContext } from 'react';
import { LinkContext, LinkProps } from './link.types';

export const DefaultLinksValue: LinkProps = {
	activeLinks: [],
	linkCounter: 1,
};

export const DefaultLinkContext: LinkContext = {
	linkContext: DefaultLinksValue,
	setLinkContext(): void {
		throw new Error('Function not implemented.');
	},
};

export const LinkDraggerContext =
	createContext<LinkContext>(DefaultLinkContext);
