import { Box, Typography } from '@mui/material';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TabSkeletonProps } from './tab.types';
import { tabsIcons } from './tabs.data';

function TabSkeleton({ name, link }: TabSkeletonProps) {
	if (!name)
		return (
			<svg
				width="237"
				height="44"
				viewBox="0 0 237 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="237" height="44" rx="8" fill="#EEEEEE" />
			</svg>
		);

	return (
		<a href={link}>
			<Box
				display="flex"
				alignItems="center"
				padding="0 1rem"
				justifyContent="space-between"
				sx={{
					minHeight: '2.75rem',
					minWidth: '14.813rem',
					backgroundColor: `${tabsIcons[name].color}`,
					color: 'white',
					borderRadius: '8px',
				}}
			>
				<Box display="flex" alignItems="center" gap={1}>
					{tabsIcons[name].icon}
					<Typography variant="body1">{name}</Typography>
				</Box>
				<ArrowForwardRoundedIcon />
			</Box>
		</a>
	);
}

export default TabSkeleton;
