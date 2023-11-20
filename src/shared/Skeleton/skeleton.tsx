import CircleSkeleton from './Circle/Circle';
import InfoSkeleton from './Info/info';
import TabSkeleton from './Tab/Tab';
import { SkeletonProps } from './skeleton.types';

function Skeleton({ type, name, link }: SkeletonProps) {
	switch (type) {
		case 'profile':
			return <CircleSkeleton />;
		case 'tabs':
			return <TabSkeleton name={name} link={link && link} />;
		case 'info':
			return <InfoSkeleton />;
		default:
			break;
	}
}

export default Skeleton;
