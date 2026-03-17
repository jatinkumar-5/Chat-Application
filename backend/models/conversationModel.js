const mongoose = require('mongoose');
const conversationModel = new mongoose.Schema({

  participants:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  messages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message"
  }]

},
{
    timestamp: true,
  }
);
const Conversation = mongoose.Model("Conversation",conversationModel);
module.exports = Conversation;

