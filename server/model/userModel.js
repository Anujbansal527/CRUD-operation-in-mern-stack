import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

// how our document look like
const userSchema = mongoose.Schema({
    _id:{
        type:Number,
    },
    name:{
        type:String,
        required:[true,"Please provide your User name"]
    },
    username:{
        type:String,
        required: [true,"Please provide your User name"],
    },
    email:{
        type: String,
        required: [true,"Please provide your Email address."],
    },
    phone:{
        type: String,
        required: [true,"Please provide your Email address."],
    }
});

userSchema.plugin(AutoIncrement, { inc_field: '_id' });


const user = mongoose.model('user', userSchema);

export default user;