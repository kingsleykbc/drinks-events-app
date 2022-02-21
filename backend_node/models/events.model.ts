import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	name: { type: String, required: true },
	avatarUrl: { type: String, required: true }
});

const EventLocationSchema = new Schema({
	name: { type: String, required: true },
	latitude: { type: Number, required: true },
	longitude: { type: Number, required: true }
});

const EventCommentSchema = new Schema({
	user: UserSchema,
	timestamp: { type: String, required: true },
	message: String
});

const EventSchema = new Schema({
	id: { type: String, required: true },
	time: { type: Date, required: true },
	title: { type: String, required: true },
	creator: UserSchema,
	guests: [UserSchema],
	type: { type: String, enum: ['BEERS', 'COCKTAILS', 'COFFEES', 'MILKSHAKES'] },
	location: EventLocationSchema,
	comments: [EventCommentSchema]
});

export default model('event', EventSchema);
