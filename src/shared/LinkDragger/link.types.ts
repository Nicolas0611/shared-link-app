export interface Link {
	linkId: string;
	data: string;
}

export interface LinkDraggerProps {
	linkId: string;
	onDelete: (linkId: string) => void;
	setLinks?: (
		value: React.SetStateAction<{
			activeLinks: Link[];
			linkCounter: number;
		}>
	) => void;
}
