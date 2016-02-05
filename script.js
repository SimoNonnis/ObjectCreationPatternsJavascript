
//Observer
function Producer () {
  this.listeners = [];
}

Producer.prototype.add = function (listener) {
  this.listeners.push(listener);
};

Producer.prototype.remove = function (listener) {
  var index = this.listeners.indexOf(listener);
  this.listeners.splice(index, 1);
};

Producer.prototype.notify = function (msg) {
  this.listeners.forEach(function (listener) {
    listener.update(msg);
  });
};


//listeners
var listener1 = {
  update: function (msg) {
    console.log('Listener1 received message:', msg);
  }
};

var listener2 = {
  update: function (msg) {
    console.log('Listener2 received message:', msg);
  }
};

var observer = new Producer();

observer.add(listener1);
observer.add(listener2);

observer.notify('Hey There!');
