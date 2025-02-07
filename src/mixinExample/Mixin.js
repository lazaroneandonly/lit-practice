export const mixinExample = (superclass) =>
  class extends superclass {
    sayHello(name) {
      return `hello ${name}!`;
    }
  };
