// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2F9n3YM4RVKSWyUWQ0JCl7BwHrl1U%3D%2F4288x2848%2Ffilters%3Afill(auto%2C1)%2Floaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg&f=1&nofb=1' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker}`
  }

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
