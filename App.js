const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adisornsriphongthong:0953314906Get*@cluster0.0f5il8j.mongodb.net/yyy?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', { name: String });

Cat.find()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


/*const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/