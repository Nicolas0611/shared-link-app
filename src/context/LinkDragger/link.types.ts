export interface LinkProps {
	data: Link[];
}

export type LinkContext = {
	linkContext: LinkProps;
	setLinkContext: React.Dispatch<React.SetStateAction<LinkProps>>;
};
