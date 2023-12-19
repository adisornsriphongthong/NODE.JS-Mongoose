const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adisornsriphongthong:0953314906Get*@cluster0.0f5il8j.mongodb.net/yyy?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', { name: String });

const y = Cat.find()
  .then(data => {
    return data
  })
  .catch(error => {
    console.error(error);
  });

y.then(result => {
    result.forEach(e => {
        console.log(e.length)
    })
})





/*const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/