import CircleSkeleton from './Circle/Circle';
import InfoSkeleton from './Info/info';
import TabSkeleton from './Tab/Tab';
import { SkeletonProps } from './skeleton.types';

function Skeleton({ type, name }: SkeletonProps) {
	switch (type) {
		case 'profile':
			return <CircleSkeleton />;
		case 'tabs':
			return <TabSkeleton name={name} />;
		case 'info':
			return <InfoSkeleton />;
		default:
			break;
	}
}

export default Skeleton;
