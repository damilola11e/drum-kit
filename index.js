const kits=["crash", "kick", "snare","tom"];
const containerEl=document.querySelector(".container");
kits.forEach((kit) => {
    const btnEl=document.createElement("button");
    const audioEl=document.createElement("audio");
    btnEl.style.backgroundImage="url(images/"+kit+".png)";
    audioEl.src="sounds/"+ kit+ ".mp3";
    btnEl.classList.add("btn");
    btnEl.innerHTML=kit;
    containerEl.appendChild(btnEl);
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    })
window.addEventListener("keydown", (event)=>{
    if(event.key===kit.slice(0,1)){
        audioEl.play()
    btnEl.style.transform="scale(0.9)";
    setTimeout(()=>{
        btnEl.style.transform="scale(1)",100
})
    
    }
})
});
