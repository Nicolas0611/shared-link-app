import { useMemo, useState } from 'react';
import { LinkContext, LinkProps } from './link.types';
import { DefaultLinksValue, LinkDraggerContext } from './link.context';

export default function LinkContextComponent({ children }: ParentComponent) {
	const [linkContext, setLinkContext] = useState<LinkProps>(DefaultLinksValue);

	const cachedLinkContext = useMemo<LinkContext>(
		() => ({ linkContext, setLinkContext }),
		[linkContext]
	);

	return (
		<LinkDraggerContext.Provider value={cachedLinkContext}>
			{children}
		</LinkDraggerContext.Provider>
	);
}
