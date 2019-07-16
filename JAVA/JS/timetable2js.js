function saveTrainer(){
    console.log('Save Called');
    name=document.getElementById('tname').value
    skill1=document.getElementById('tskills').value
    skill2=document.getElementById('tskills2').value
    let cl="no"
    // SAVE 
    data=`{"name":"${name}", "skill1":"${skill1}","skill2":"${skill2}","class":"${cl}"}`
    localStorage.setItem(`${name}`,`${data}`)
    console.log("data saved");  
}

function selectTrainer(){
    subject=document.getElementById("subject").value;
    console.log(subject);
    tlist=""
    if(subject=="math"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "math"||n.skill2=="math")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none" 
            }
        })
    }
    //PHYSICS
    if(subject=="physics"){
        console.log("physics")
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            console.log(n)
            if((n.skill1== "physics"||n.skill2=="physics")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none" 
            }
        })
    }
    if(subject=="biology"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "biology"||n.skill2=="biology")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                tlist+=`<option value=${val}>no trainer</option>` 
            }
        })
    }
    if(subject=="english"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "english"||n.skill2=="english")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                
            }
        })
    }
    if(subject=="chemistry"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "chemistry"||n.skill2=="chemistry")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                 
            }
        })
    }
    if(subject=="cs"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "cs"||n.skill2=="cs")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                 
            }
        })
    }

    
    
        console.log(tlist);
        document.getElementById("gettrainer").innerHTML=tlist;
    
}

function assign(){
    time=document.getElementById("slot").value;
    subject=document.getElementById("subject").value;
    trainername=document.getElementById("gettrainer").value;
    classes=document.getElementById("classes").value;
    console.log(`${time},${subject},${trainername},${classes}`)
    formtable(time,subject,trainername,classes)
    Object.keys(localStorage).forEach((e)=>{
        let n=JSON.parse(localStorage.getItem(e));
        if(n.name==trainername){
        if(n.class!="full"){
            if(n.class=="no"){
                console.log(n.class)
                n.class="assigned1";
                localStorage.setItem(e,JSON.stringify(n));
                console.log(n.class)
                }
            else if(n.class=="assigned1"){
                    console.log(n.class)
                    n.class="assigned2";
                    localStorage.setItem(e,JSON.stringify(n));
                    console.log(n.class)
                    }
            else if(n.class=="assigned2"){
                        console.log(n.class)
                        n.class="full";
                        localStorage.setItem(e,JSON.stringify(n));
                        console.log(n.class)
                        }
            }
        }
    })
    
}

function formtable(time,subject,trainername,classes){
    if(time=="10to11"){
        c=1;
        fillsess1(time,subject,trainername,c,classes)
    }
    if(time=="11to12"){
        c=2
        fillsess1(time,subject,trainername,c,classes)
    }
    if(time=="12to1"){
        c=3
        fillsess1(time,subject,trainername,c,classes)
    }
    if(time=="1to2"){
        c=4
        fillsess1(time,subject,trainername,c,classes)
    }
    if(time=="3to4"){
        c=5
        fillsess1(time,subject,trainername,c,classes)
    }
    if(time=="4to5"){
        c=6
        fillsess1(time,subject,trainername,c,classes)
    }
}
function fillsess1(time,subject,trainername,c,classes){
    data=`<table>
            <tr>
                <th>${subject}<th>
            </tr>
            <tr>
                <td>${trainername}<td>
            </tr>
            </table>`
    if(classes == '1')
    document.getElementById(`sess${c}1`).innerHTML=data

    if(classes == '2')
    document.getElementById(`sess${c}2`).innerHTML=data

    if(classes =='3')
    document.getElementById(`sess${c}3`).innerHTML=data

    if(classes == '4')
    document.getElementById(`sess${c}4`).innerHTML=data
}

function initialization (){
    Object.keys(localStorage).forEach((e)=>{
        let n=JSON.parse(localStorage.getItem(e));
        if(n.class!="no"){
            n.class="no"
            localStorage.setItem(e,JSON.stringify(n));
        }
    })
}



