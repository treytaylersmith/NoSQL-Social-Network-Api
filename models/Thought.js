const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength:1,
        maxlength: 4,

    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    username:{
        type: String,
        required: true,
    },
    reactions:[{
        type: Schema.Types.ObjectId,
        ref:'reaction'
    }]

}
);


postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
