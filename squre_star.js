

        var draw = function(length){
                var top = Array(length+1).join("* ");
                var bottom = Array(length+1).join("* ");
                var middle=Array(length-1).join("*"+(Array(length*2-2).join(" "))+"*\n")

                middle = middle.substring(0,middle.length-1)
               
                console.log(top);
                console.log(middle);
                console.log(bottom);

                return[top,middle,bottom];
        }


