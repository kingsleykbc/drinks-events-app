export interface EventListItemType {
	id: number;
	time: string;
	title: string;
	type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES';
}

export interface EventType {
	id: number;
	time: string;
	title: string;
	creator: UserType;
	guests: UserType[];
	type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES';
	location: EventLocationType;
	comments: EventCommentType[];
}

export interface EventLocationType {
	name: string;
	latitude: number;
	longitude: number;
}

export interface EventCommentType {
	user: UserType;
	timestamp: string;
	message: string;
}

export interface UserType {
	name: string;
	avatarUrl: string;
}

export type ThemeColorType = '#DBB561' | '#E5CB90' | '#5DAB7C' | '#4C3800' | '#BB6B62';
