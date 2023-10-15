export interface Link {
	linkId: string;
	data: string;
}

export interface LinkDraggerProps {
	linkId: number;
	onDelete<T>(index: number): T | undefined;
	dropdownName: string;
	inputName: string;
	values: { link: string; platform: string };
	handleInputChange: {
		(e: React.ChangeEvent<any>): void;
		<T = string | React.ChangeEvent<any>>(
			field: T
		): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void;
	};
}
