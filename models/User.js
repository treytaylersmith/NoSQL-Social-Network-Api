const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        validate: [(email)=>{
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return reg.test(email);
        }, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts:{
        type: Schema.Types.ObjectId,
        ref: 'thought'
    },
    friends:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(()=>{
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
