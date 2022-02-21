export interface EventType {
	id: number;
	time: string;
	title: string;
	creator: User;
	guests: User[];
	type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES';
	location: EventLocation;
	comments: EventComment[];
}

export interface EventLocationType {
	name: string;
	latitude: number;
	longitude: number;
}

export interface EventCommentType {
	user: User;
	timestamp: string;
	message: string;
}

export interface UserType {
	name: string;
	avatarUrl: string;
}
