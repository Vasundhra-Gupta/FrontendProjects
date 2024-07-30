let randomDelay=()=>{
    return new Promise((resolve, reject)=>{
        let t= Math.ceil(Math.random()*7);
        setTimeout(() => {
            resolve();
        }, t*1000);
    })
}
let addItem= async (item)=>{
    await randomDelay();
    let div= document.createElement('div')
    div.innerHTML= item;
    document.body.append(div);
}
let main= async()=>{
    let t= setInterval(() => {
        // let last = document.body.lastElementChild;(Because there is script tag too.)
        last= document.getElementsByTagName("div");
        last= last[last.length-1];
        // console.log(last);
        
        if(last.innerHTML.endsWith("...")){
            // clearInterval();// just stops after 3 dots
            last.innerHTML= last.innerHTML.slice(0, last.innerHTML.length-3)
        }else{
            last.innerHTML += '.'
        }
    }, 500);
    let text= ["Initialised Hacking", "Reading your files","Password files detected","Sending all passwords and personal files to server","Cleaning up"];
    for (item of text){
        await addItem(item);
    }
    await randomDelay();
    clearInterval(t);
}
main();



