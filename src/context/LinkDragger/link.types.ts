import { Link } from '../../shared/LinkDragger/link.types';

export interface LinkProps {
	activeLinks: Link[];
	linkCounter: number;
}

export type LinkContext = {
	linkContext: LinkProps;
	setLinkContext: React.Dispatch<React.SetStateAction<LinkProps>>;
};
