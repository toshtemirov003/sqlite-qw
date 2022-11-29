const readline = require("readline");
const commandRun = require("./functions/commandRun");
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question('MySQLite version 1.5 2022-06-15\nmy_sqlite> ', (answer) =>  {

    let command = answer.trim();
    if (command.toLowerCase() === 'quit') {
        console.log("Thank you for reviewing my_sqlite!");
        readlineInterface.close();
    } else if(command){
        //Execute command
        commandRun(command);
        readlineInterface.setPrompt('my_sqlite> ');
        readlineInterface.prompt();

        readlineInterface.on('line', (input) => {
            command = input.trim();
            if (command.toLowerCase() === 'quit') {
                console.log("Thank you for reviewing my_sqlite!");
                readlineInterface.close();
            } else {
                //Execute command
                commandRun(command);
                readlineInterface.setPrompt('my_sqlite> ');
                readlineInterface.prompt();
            }
        });
    }
});


