const fs = require("fs")
let arr = [];
for(let i=0;i<50;i++){
    for(let j=0;j<100;j++){
            
                for(let m=0;m>-10;m--)   
                    {
                        if( (i>48 || i< 18) && j<20){
                            arr.push({
                                input:[i,j,125,850,m],
                                output:[false]
                            });
                        } else
                            arr.push({
                                input:[i,j,125,850,m],
                                output:[true]
                            });
                    }
            
        
    }
}


fs.writeFileSync("data.json",JSON.stringify(arr));