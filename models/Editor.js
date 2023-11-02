const mongoose = require('mongoose');

const producteditorSchema = new mongoose.Schema({
    // content: {
    //   type: mongoose.Schema.Types.ObjectId, 
    //   ref: 'GridFSModel',
    // },
    content: {
        type: String,
        maxlength: 2000000 
      },
    },
    {
        timestamps:true
    })
  const Editortool = mongoose.model('producttexteditor', producteditorSchema);
  module.exports = Editortool;
  