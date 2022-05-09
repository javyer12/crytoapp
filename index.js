const train = document.getElementById("train");
train.addEventListener("click", trainClick)
var Checked = document.getElementById("trainView").checked;
console.log(Checked)



function trainClick() {

    if (Checked) {

        let start = Date.now();
        
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            
            train.style.left = timePassed / 15 + 'px';
            
            if (timePassed > 2000) clearInterval(timer);
            
        }, 20);
    }
    else {
        alert("Turn on the machine")
        const CkeckedValue = !Checked;
        if(!CkeckedValue) {
            let start = Date.now();
        
            let timer = setInterval(function() {
                let timePassed = Date.now() - start;
                
                train.style.left = timePassed / 15 + 'px';
                
                if (timePassed > 2000) clearInterval(timer);
                
            }, 20);
        }
    }
  }

