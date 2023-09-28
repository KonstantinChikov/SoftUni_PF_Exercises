function chessBoard(num){

    let output = "";
    
    let div1 = '   <span class="black"></span>';
    let div2 = '   <span class="white"></span>';
 
    for (let i = 1; i <= num; i+= 1){
        for (let j = 1 ; j <= num; j += 1){   
        
            if (i % 2 == 0){
    
                if (j % 2 == 0){ 
                    output = div1;
                }else{
                    if (j == 1){
                        if(i == 1){
                            output +='<div class="chessboard">' + "\n" + " " + "<div>"+ "\n" + div2;
                        }else{
                            output = "<div>"+ "\n" + div2;
                        }
                            
                    }else{
                        output = div2  ;
                    }
                }

            }else{

                if(j % 2 == 0){ 
                    output = div2;
                }else{
                    if (j == 1){
                        if(i == 1){
                            output +='<div class="chessboard">' + "\n" + " " + "<div>"+ "\n" + div1;
                        }else{
                            output = "<div>"+ "\n" + div1;
                        }
                                
                    }else{
                        output = div1  ;
                    }
                }

            }
            
            if(num == j){
                if(num == i){
                    output += "\n" + ' </div>' + "\n" + "</div>"
                }else{
                    output += "\n" + '</div>'
                }  
            }
    
            console.log(output);
            
        }      
    }
}

chessBoard(3)