/// <reference types="vite/client" />

type ParentComponent = {
	children: React.ReactNode;
};
interface Link {
	link: string;
	platform: string;
}

interface HandleOnSuccessProps {
	route?: string;
	message: string;
}
interface HandleOnError {
	message: string;
}
