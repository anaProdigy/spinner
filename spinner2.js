let chars = ["|", "/", "-", "\\"];
delay = 100;

const spinner = (arr) => {
  for (const char of arr) {
   
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }

};

spinner(chars);


