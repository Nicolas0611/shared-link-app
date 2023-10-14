export interface Link {
	linkId: string;
	data: string;
}

export interface LinkDraggerProps {
	linkId: number;
	onDelete: (linkId: string) => void;
	dropdownName?: string;
	setLinks?: (
		value: React.SetStateAction<{
			activeLinks: Link[];
			linkCounter: number;
		}>
	) => void;
	handleInputChange: {
		(e: React.ChangeEvent<any>): void;
		<T = string | React.ChangeEvent<any>>(
			field: T
		): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void;
	};
}
