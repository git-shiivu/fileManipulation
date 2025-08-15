const fs = require("fs")
const readline = require('readline');


console.log("\n'1' stands for Write a file\n'2' stands for Read a file\n'3' stands for Update a file\n'4' stands for Delete a file\n'5' Exit");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });


    rl.question('What do you want: ', (operation) => {
      console.log(`You have selected option "${operation}"!`);
      
      switch (operation) {
        case "1":
            rl.question("What is the File name: ", (filename)=>{
                rl.question("Enter the Content for the File: ", (content)=>{
                    try {
                        fs.writeFileSync(filename,content,"utf-8")
                        console.log(`\n${filename} was Created successfully!`);
                        rl.close()
                    } catch (error) {
                        console.error(error)
                        rl.close()
                    }
                })
            })
            break;
        case "2":
            rl.question("Which file do you want to read (with extension): ",(filename)=>{
                try {
                    console.log("\n",fs.readFileSync(filename,"utf-8"))
                    console.log("\nPress 'Ctrl + C' for EXIT");
                    
                } catch (error) {
                    console.error(error);
                    rl.close()
                }
            })
            break;
        case "3":
            rl.question("What is the file name (existing) : ",(filename)=>{
                rl.question("Write the Content for Update : ",(content)=>{
                    try {
                        fs.appendFileSync(filename,content,"utf-8")
                        console.log(`\n${filename} was Updated successfully.`);
                        rl.close()
                    } catch (error) {
                        console.error(error);
                        rl.close()                        
                    }
                })
            })
            break;
        case "4":
            rl.question("Which file do you want to Delete (with extension): ",(filename)=>{
                try {
                    fs.unlinkSync(filename)
                    console.log(`\n${filename} was Deleted successfully.`);
                    rl.close()
                } catch (error) {
                    console.error(error);
                    rl.close()
                }
            })
            break;
        case "5":
            console.log("Thanks for visiting us!");
            rl.close()
            break
        default:
            console.error("You have enter wrong input!");
            rl.close()
            break;
      }
    });
    
    
