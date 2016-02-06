(function () {
  //Observer
  function Producer () {
    this.listeners = [];
  }

  Producer.prototype.add = function (listener) {
    this.listeners.push(listener);
  };

  Producer.prototype.remove = function (listener) {
    const index = this.listeners.indexOf(listener);
    this.listeners.splice(index, 1);
  };

  Producer.prototype.notify = function (msg) {
    this.listeners.forEach(function (listener) {
      listener.update(msg);
    });
  };


  //listeners
  const listener1 = {
    update: function (msg) {
      console.log('Listener1--prototype message received:', msg);
    }
  };

  const listener2 = {
    update: function (msg) {
      console.log('Listener2--prototype message received:', msg);
    }
  };

  const observer = new Producer();

  observer.add(listener1);
  observer.add(listener2);

  observer.notify('Hey There!!!');

})();



(function () {
  //Observer
  const producer = () => {
    const listeners = [];

    const add = (listener) => listeners.push(listener)

    const remove = (listener) => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };

    const notify = (msg) => listeners.forEach((listener) => listener.update(msg))

    return {
        add: add,
        remove: remove,
        notify: notify
    }
  };


  //listeners
  const listener1 = {
    update: (msg) => console.log('Listener1--factory message received:', msg)
  };

  const listener2 = {
    update: (msg) => console.log('Listener2--factory message received:', msg)
  };

  const observer = producer();
  observer.add(listener1);
  observer.add(listener2);

  observer.notify('Hey Guys!');

})();
