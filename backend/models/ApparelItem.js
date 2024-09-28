const mongoose = require('mongoose')


const ApparelItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
  condition: { type: String, required: true },
  material: { type: String, required: true },
  action: { type: String, enum: ['disposal', 'donation', 'recycling'], required: true },
});

module.exports = mongoose.model('ApparelItem', ApparelItemSchema);