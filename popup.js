function username (event){
    var form = document.getElementById("subUN");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    
    let newName = document.getElementById('username').value;
    if (newName === '') {
            
    } else {
        document.getElementById('username1').innerHTML='Welcome ' + (newName).fontcolor(randomcolor) + '!';
        var element = document.getElementById('subUN')
        element.parentNode.removeChild(element);
    }
}

var usercolors = ["Red", "Blue", "Fuchsia", "Aqua", "Coral", "DarkOrchid", "DarkOrange", "Cornsilk", "Yellow", "SlateBlue", "Plum"]
var randomcolor = usercolors[Math.floor(Math.random() * usercolors.length)]; 
var msgList = []

function sendMessage (event){
    event.preventDefault();  
    var form = document.getElementById("submitmsg");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    let username = document.getElementById('username').value;
    let newmsg = document.getElementById('usermsg').value;
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    msgList.push(username.fontcolor(randomcolor) + (' ('+time+')').fontcolor('Azure') + ' : ' + newmsg);
    var newLine = msgList.join('<br>')
    document.getElementById('messages').innerHTML = newLine;
    document.getElementById('usermsg').innerHTML='';
}

document.getElementById('submitmsg').addEventListener('click', sendMessage)
document.getElementById('subUN').addEventListener("click", username)