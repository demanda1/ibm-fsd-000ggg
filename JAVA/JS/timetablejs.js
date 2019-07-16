function saveTrainer(){
    console.log('Save Called');
    name=document.getElementById('tname').value
    skill=document.getElementById('tskills').value
    // SAVE 
    data=`{"name":"${name}", "skill":"${skill}"}`
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
            if(n.skill== "math"){
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
        })
    }
    if(subject=="physics"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if(n.skill== "physics"){
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
        })
    }
    if(subject=="chemistry"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if(n.skill== "chemistry"){
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
        })
    }
    if(subject=="biology"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if(n.skill== "biology"){
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
        })
    }
    if(subject=="english"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if(n.skill== "english"){
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
        })
    }
    if(subject=="cs"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if(n.skill== "cs"){
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
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
    console.log(`${time},${subject},${trainername}`)
    formtable(time,subject,trainername)
}

function formtable(time,subject,trainername){
    if(time=="10to11"){
        fillsess1(time,subject,trainername)
    }
    if(time=="11to12"){
        fillsess1(time,subject,trainername)
    }
    if(time=="12to1"){
        fillsess1(time,subject,trainername)
    }
    if(time=="1to2"){
        fillsess1(time,subject,trainername)
    }
    if(time=="3to4"){
        fillsess1(time,subject,trainername)
    }
    if(time=="4to5"){
        fillsess1(time,subject,trainername)
    }
}
function fillsess1(time,subject,trainername){
    data=`<table>
            <tr>
                <th>${subject}<th>
            </tr>
            <tr>
                <td>${trainername}<td>
            </tr>
            </table>`
    if(time=='10to11')
    document.getElementById("sess1").innerHTML=data

    if(time=='11to12')
    document.getElementById("sess2").innerHTML=data

    if(time=='12to1')
    document.getElementById("sess3").innerHTML=data

    if(time=='1to2')
    document.getElementById("sess4").innerHTML=data

    if(time=='3to4')
    document.getElementById("sess5").innerHTML=data

    if(time=='4to5')
    document.getElementById("sess6").innerHTML=data
}



