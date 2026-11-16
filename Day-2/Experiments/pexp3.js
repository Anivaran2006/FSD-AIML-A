const fs = require('fs');
console.log("Crud Operations in Node.js");
fs.writeFile('student.txt', 'Student Name: Anivaran\nRoll Number: 27', (err) => {
    if (err) throw err;
    console.log("1. Create: File created successfully");
    fs.readFile('student.txt','utf8', (err, data)=> {
        if (err) throw err;
        console.log("2. Read: ");
        console.log(data);
        fs.appendFile('student.txt', '\nCourse: AIML', (err)=>{
            if (err) throw err;
            console.log("3. Update: File updated successfully");
            fs.readFile('student.txt','utf8', (err, data)=>{
                if (err) throw err;
                console.log("Updated File Content:");
                console.log(data);
                fs.unlink('student.txt', (err) => {
                    if (err) throw err;
                    console.log("4. Delete: File deleted successfully");
                });
            });
        });
    });
});
