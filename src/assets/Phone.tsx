import { Stack } from '@mui/material';
import { useContext } from 'react';

import Skeleton from '../shared/Skeleton/skeleton';
import { LinkDraggerContext } from '../context/LinkDragger/link.context';

function Phone() {
	/* 	const [tabs, setTabs] = useState({});
	 */
	const { linkContext } = useContext(LinkDraggerContext);

	//TODO: Add children props so the tabs can render in the phone.wrapper
	return (
		<>
			<svg
				style={{ position: 'relative' }}
				width="307"
				height="631"
				viewBox="0 0 307 631"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M54 0.5H253C282.547 0.5 306.5 24.4528 306.5 54V577C306.5 606.547 282.547 630.5 253 630.5H54C24.4528 630.5 0.5 606.547 0.5 577V54C0.5 24.4528 24.4528 0.5 54 0.5Z"
					stroke="#737373"
				/>

				<path
					d="M11.5 55C11.5 30.4233 31.4233 10.5 56 10.5H80C86.3513 10.5 91.5 15.6487 91.5 22C91.5 30.0081 97.9919 36.5 106 36.5H201C209.008 36.5 215.5 30.0081 215.5 22C215.5 15.6487 220.649 10.5 227 10.5H251C275.577 10.5 295.5 30.4233 295.5 55V576C295.5 600.577 275.577 620.5 251 620.5H56C31.4233 620.5 11.5 600.577 11.5 576V55Z"
					fill="white"
					stroke="#737373"
				/>
			</svg>
			<div style={{ position: 'absolute' }}>
				<Stack spacing={5} alignItems={'center'}>
					<Stack spacing={1} alignItems={'center'}>
						<Skeleton type="profile" />
						<Skeleton type="info" />
						<Skeleton type="info" />
					</Stack>
					<Stack spacing={2} alignItems={'center'}>
						{linkContext.data.map((link, linkIndex) => (
							<Skeleton
								type="tabs"
								key={`${link.link}_${linkIndex}`}
								name={link.platform}
							/>
						))}
					</Stack>
				</Stack>
			</div>
		</>
	);
}

export default Phone;
