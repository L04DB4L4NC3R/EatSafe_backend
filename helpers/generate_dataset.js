const fs = require("fs")
let arr = [];
for(let i=30;i<50;i++){
    for(let j=35;j<95;j++){
            
                 
                    
                        if( (i>48 || i< 18) || j<20){
                            arr.push({
                                input:[i,j,125,850,-7],
                                output:[false]
                            });
                        } else
                            arr.push({
                                input:[i,j,125,850,-7],
                                output:[true]
                            });
                    
            
        
    }
}


fs.writeFileSync("data.json",JSON.stringify(arr));
