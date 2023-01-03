export declare type Without<T, U> = {
	[P in Exclude<keyof T, keyof U>]?: T[Exclude<keyof T, keyof U>];
};
//互斥类型： T 在 U 不在， U 在 T 不在，T , U 不可共存，但必须有一个在
export declare type MutexType<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
export declare type RuiCommon = {};
