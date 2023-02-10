import mongoose from "mongoose";

const questionDetailsSchema = new mongoose.Schema({
	question_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	thumb: {
		type: { type: String, enum: ['', 'up', 'down'] }, //up/down
		date: {
			type: Date,
			default: Date.now,
		}
	},
	comment: {
		text: String,
		date: {
			type: Date,
			default: Date.now,
		}
	},
})

export default mongoose.models.questionDetail || mongoose.model('questionDetail', questionDetailsSchema)