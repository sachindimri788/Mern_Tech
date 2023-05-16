const express = require('express');

const app=express();
 const port= process.env.PORT || 4500;
const mongoose=require('mongoose');

mongoose.connect(url).then(()=> {
    console.log(`connect`);
}).catch((err)=>console.log(err));

 app.listen(port, ()=>{
     console.log(`listening to the port at ${port}`) 
 })

//  var WorksnapsTimeEntry = BaseSchema.extend({ student: {
//     type: Schema.ObjectId, ref: 'Student'
//     },
//     timeEntries: { type: Object
//     }
//     });
// var StudentSchema = BaseSchema.extend({ firstName: {
//     type: String, trim: true, default: ''
//     // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
//     },
//     lastName: { type: String, trim: true, default: ''
//     // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
//     },
//     displayName: { type: String, trim: true
//     },
//     municipality: { type: String
//     }
//     });

//Loop through each student and display their time entries

  
//   timeEntries.forEach(function (entry) {
//     var student = entry.student;
//     var timeEntries = entry.timeEntries;
  
//     console.log('Student:', student.displayName);
//     console.log('Time Entries:', timeEntries);
//   });

