import { Stack, Typography, Link } from '@mui/material';

import { AuthLayoutProps } from './AuthLayoutInterfaces';

function AuthLayout({
	children,
	title,
	description = '',
	subDescription,
	linkLabel,
	link,
}: AuthLayoutProps) {
	return (
		<Stack
			direction="column"
			spacing={4}
			sx={{
				backgroundColor: 'white',
				maxWidth: '40rem',
				width: '100%',
				padding: '3rem 3rem',
				borderRadius: '1rem',
			}}
		>
			<Stack direction="column" spacing={2}>
				<Typography sx={{ fontWeight: 'bold' }} variant="h4">
					{title}
				</Typography>
				<Typography variant="body1">{description}</Typography>
			</Stack>
			<Stack>{children}</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Typography variant="body1">{subDescription}</Typography>
				<Link href={link}>{linkLabel}</Link>
			</Stack>
		</Stack>
	);
}

export default AuthLayout;
