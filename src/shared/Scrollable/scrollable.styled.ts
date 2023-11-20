import { styled, Stack } from '@mui/material';

export interface ScrollableProps {
	maxHeight: string;
}

export const Scrollable = styled(Stack)(({ maxHeight }: ScrollableProps) => ({
	height: maxHeight,
	overflow: 'auto',
}));
