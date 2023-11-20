import { ReactElement } from 'react'; // Import ReactElement for typing the icon property
import {
	LinkedIn,
	GitHub,
	Twitter,
	YouTube,
	Facebook,
} from '@mui/icons-material';

type TabIcon = {
	icon: ReactElement; // Assuming the icons are React components
	color: string;
};
interface TabIconProps {
	[key: string]: TabIcon;
}

export const tabsIcons: TabIconProps = {
	github: {
		icon: <GitHub />,
		color: '#1A1A1A',
	},
	twitter: {
		icon: <Twitter />,
		color: '#43B7E9',
	},
	linkedin: {
		icon: <LinkedIn />,
		color: '#2D68FF',
	},
	youtube: {
		icon: <YouTube />,
		color: '#EE3939',
	},
	facebook: {
		icon: <Facebook />,
		color: '#2442AC',
	},
};
