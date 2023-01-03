import { MutexType } from "./utils";

declare namespace RouteType {
	export type Item = MutexType<
		{
			path: string;
			children?: Item[];
			element: JSX.Element;
			option?: any;
			isLeaf?: boolean;
			name: string;
		},
		{
			path: string;
			children?: Item[];
			redirect: string;
			option?: any;
			isLeaf?: boolean;
		}
	>;
	export type Map = Item[];
}
