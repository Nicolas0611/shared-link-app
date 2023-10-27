export interface Link {
	link: string;
	platform: string;
}

export interface LinkDraggerProps {
	content: Link;
	linkId: number;
	onDelete<T>(index: number): T | undefined;
	dropdownName: string;
	inputName: string;
	values: Link;
	handleInputChange: {
		(e: React.ChangeEvent<any>): void;
		<T = string | React.ChangeEvent<any>>(
			field: T
		): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void;
	};
}
