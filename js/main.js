function createTodo() {

  let tasks = [];

  return {
    add(task) {
      tasks.push(task);
    },

    remove(task) {
      let index = tasks.indexOf(task);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    },

    // remove(task) {
    //   return tasks.filter(t => t !== task);
    // },

    list() {
      return [...tasks]; //protect private variable
    }
  };

}

// const todo = createTodo();

// todo.add('Learn JS');
// todo.add('Learn Closure');
// todo.add('Learn Python');
// todo.add('PostgreSQL');
// todo.add('React');
// todo.add('Node JS');
// console.log(todo.remove('Learn Python'));

// console.log(todo.list());



// const vazifalar = ['Learn JS', 'Learn Closure', 'Learn Python', 'PostgreSQL', 'React', 'Node JS'];

// console.log(vazifalar)

// console.log(vazifalar.filter(vazifa => vazifa !== "PostgreSQL"))


const todo = createTodo();

todo.add("Learn JS");
todo.add("Learn Closure");
todo.add("Learn React");
todo.add('Learn Node JS')

console.log(todo.list());

todo.remove("Learn Closure");

console.log(todo.list());