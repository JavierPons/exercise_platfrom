// Write a function called runOnRange that takes one argument, an object.
// this object will contain three properties, a start, and end and a a step.
// according to these properties it should push specific numbers to an array.
// Once done return the array.

function runOnRange(obj) {
		
    var arr = [];
    if(obj['step'] == -1){
    	 if(obj['start'] < obj['end']){
					return arr;
            }else if(obj['start'] > obj['end']){
                var a = -Math.abs(obj['start'])
                var b = -Math.abs(obj['start'] -1);
                var c = -Math.abs(obj['end'])
					arr.push(a,b,c);
					return arr;
            }
    	}else if(obj['step'] == 0){
                    return arr;
				
        }else if (obj['step'] == undefined && obj['start'] < obj['end'] ) {
       			var a = obj['start'] +1;
       			arr.push(obj['start'],a,obj['end']);
				return arr;
    	}else if (obj['start'] < obj['end']){
        		var a = obj['start']  + obj['step'];
       			 var b = obj['end'];
        		arr.push(obj['start'], a,b );
       			 return arr;
        }else if(obj['start'] == obj['end']){
                return arr;
    }

    }


module.exports = {
    runOnRange
}