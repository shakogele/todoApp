const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: "Another Text",
  completed: true,
  completedAt: new Date().getTime()
});

newTodo.save().then( (response) => {
  console.log(JSON.stringify(response, undefined, 2));
}, (e) => {
  console.log("Unable to save data. Error: ", e);
});
