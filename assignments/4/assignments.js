const sayHello = name => console.log(`HI ${name}`);
const sayHello1 = (name,phrase) => console.log(`${phrase} ${name}`);
const sayHello2 = () => console.log(`HI hard coded`);
const sayHello3 = name => `HI ${name}`;

const sayHello4 = (name,phrase = "hi") => console.log(`${phrase} ${name}`);
const cb = ()=>{
}

const checkInput = (cb,...arg)=>{
  for(str of arg){
    if(str === ""){
      cb();
      return;
    }
  }
}

sayHello("sagar");
sayHello1("sagar","hello");
sayHello2("hello max");
console.log(sayHello3("sagar"));
sayHello4("sagar");

checkInput(()=>{
  console.log(`there's an empty string`)
},"sagar","abcd","haha");