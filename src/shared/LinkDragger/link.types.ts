export interface LinkDraggerProps {
	content: Link;
	linkId: number;
	onDelete: () => void;
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
