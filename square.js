

        var drawSquare = function(length,char){
                var top = Array(length+1).join(char+" ");
                var bottom = Array(length+1).join(char+" ");
                var middle=Array(length-1).join(char+(Array(length*2-2).join(" "))+char+"\n")

                middle = middle.substring(0,middle.length-1)
               
                console.log(top);
                console.log(middle);
                console.log(bottom);

                return [top,middle,bottom];
        }


