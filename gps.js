console.log(`gps.js loaded at ${Date()}`)



gps=function(){
    if(document.getElementById("getGPS")){
        let bt = document.getElementById("getGPS")
        bt.onclick=_=>{
            console.log(`clicked at ${Date()}`)
            bt
            if(bt.innerText=='Start'){
                bt.innerText="Stop"
                bt.style.color='red'
                bt.style.backgroundColor='yellow'
                gps.start()
            }else{
                clearInterval(gps.stream) // stop acquiring data
                bt.innerText="Start"
                bt.style.color='blue'
            }
        }
    }
    console.log()
}

gps.raw=[]

gps.start=function(){
    gps.stream=setInterval(function(){
        gps.raw.push(Math.random())
    },1000)
}


// ini
gps()