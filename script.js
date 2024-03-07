let btn = document.querySelector("button");
let h3 = document.querySelector("#dis");
let h2 = document.querySelector("#condn");

btn.addEventListener("click" ,()=>{
    let inp = document.querySelector("#solistic").value;
    let inp2 = document.querySelector("#diastolic").value;
    console.log(inp);
    console.log(inp2);  
    h3.innerText =`your blood pressure is ${inp}/${inp2}`;
    if(inp<=120 && inp>90 && inp2>60 && inp2<=80){
        h2.innerText ="you have normal blood pressure";
    }
    else if(inp<90 && inp2<60){
        h2.innerText ="you have low blood pressure";
    }
    else if(inp<130 && inp>120 &&  inp2>60 &&inp2<80){
        h2.innerText ="you have elevated";
    }   
    else if(inp<140 && inp>=130 && inp2<90 && inp2>=80){
        h2.innerText ="you have high blodd pressure (stage-1 -hypertention";
    }
    else if(inp>=140 && inp<180 && inp2<120 && inp2>=90){
        h2.innerText ="you have high blood pressure (stage 2- hypertension)";
    }
    else if( inp>=180 && inp2>=120){
        h2.innerText ="you have high blood pressure (stage 3- hypertension)";}
    else {
        h2.innerText ="please enter correct value";
    }
     
})