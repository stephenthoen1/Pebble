/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Golf Game Tracker',
  textAlign: 'center',
  icon: 'images/menu_icon.png',
  subtitle: 'Choose Select to Pick Game'
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [
        {
          title: 'Putting',
          subtitle: '4 footers'
        }, 
        {
          title: 'Chipping',
          subtitle: '20 yard chips'
        },
        {
          title: 'Range',
          subtitle: '100 yard'
        }]
    }]
  });
  
  var counter = 0;
  
  
  menu.on('select', function(e) {
      var card = new UI.Card({
        title: e.item.title,
        subtitle: e.item.subtitle, 
        }); 
    
    
    card.body(counter);    
    card.on('click', 'up', function()
    {
      counter++;
      card.body('Completed = ' + counter);
    });
    card.on('click', 'down', function()
    {
      counter--;
      card.body('Completed = ' + counter);
    });
    
    card.show();
    console.log('Counter =' + counter);
  });  
  
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  
  menu.show();
 
  
});

