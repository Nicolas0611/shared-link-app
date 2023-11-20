import { ThreeDots } from 'react-loader-spinner';
import Container from '../Container/container.styled';

function Loader() {
	return (
		<Container
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#633CFF"
				ariaLabel="three-dots-loading"
				visible={true}
			/>
		</Container>
	);
}

export default Loader;
