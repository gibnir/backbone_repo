var AppView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML
  //      content will be rendered.
  el: '#container',
  
  // template which has the placeholder 'who' to be substitute later
  template: _.template("<h3>Hello <%= who %></h3>"),

  // It's the first function called when this view it's instantiated.
  initialize: function(){
    this.render();
  },
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions
  //       to push content. Like the Hello World in this case.
  render: function(){
    
    // this.$el.html("Hello World");
    // this.$el.html("<h1>Hello TutorialsPoint!!!</h1>");

    // render the function using substituting the varible 'who' for 'world!'.
    this.$el.html(this.template({who: 'world!'}));
    //***Try putting your name instead of world.

    console.log(this);
  }
});

var appView = new AppView();