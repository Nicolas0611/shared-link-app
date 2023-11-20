import { InputConfig } from '../../pages/Home/constants';
import { DropdownItemsTypes } from '../Dropdown/dropdown.types';

export interface LinkDraggerProps {
	content?: Link;
	linkId: number;
	onDelete: () => void;
	data: InputConfig<DropdownItemsTypes>[];
}
