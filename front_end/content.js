window.onload = function() {

	alert('Hello world! I am '+ window.location.href)
    var elements = document.querySelectorAll("*")
    //var eventsList = ["click", "dblclick", "select", "change", "submit", "reset"];
    var eventsList=["click"]
var callbackFunction = e =>{
  //alert('Triggered event ' + eventName);
  // if(eventName=="click"){
      // var I=0
      // for(var i=0; i<elements.length; i++){
      //     if(elements[i]==element){
      //         I=i
      //         break;
      //     }
      // }
    //e.preventDefault();
    //let target   = event.target;
    let formData = {};

    // for (let i = 0; i < target.length; i++) {
    //     formData[target.elements[i].getAttribute("name")] = target.elements[i].value;
    // }
    // console.log('formData', formData); 
      // console.log(e.target.attributes["class"].value);
      // let className = e.target.attributes["class"].value;
      // // if(document.getElementsByClassName(className))
      //   console.log(document.getElementsByClassName(className));
      // // alert('Triggered event ' + element+I)
      // // console.log('Triggered element ' + elements[0].tagName)
      //console.log(e.target.attributes['ID'].value)
      //var ans='';
      if('id' in e.target.attributes){
        //console.log(e.target.attributes['id'].value)
        //var s0 = e.target.attributes[0].name
        var ans={  'id': e.target.attributes[0].value, 'index':'-1','url':window.location.href}
        //ans=JSON.stringify(e.target.attributes[0])
        //console.log(e.target.attributes[0].name)
        console.log(ans)
        

      }
      else{
        //console.log(e.target.attributes['Class'].value)
        /*if('baseURI' in e.target.attribites['Class'])
        {
          //s0=e.target.attributes['Class'].name
          //s1=e.target.attributes['baseURI'].name
          var ans= {'Class' : e.target.attributes['Class'].value, 'URI':e.target.attributes['Class'].baseURI }
        }*/
          //var s0 = e.target.attributes[0].name
          //var s1= e.target.attributes[1].name
          //s2= e.target.attributes[2].name
          //var ans={ s0 : e.target.attributes[0].value}
          const collection = document.getElementsByClassName(e.target.attributes[0].value);
        
          for(var i=0; i<collection.length;i++){
            if(collection.item(i)==e.target){
              //console.log(i+'done!!')
              var ans={'class':e.target.attributes[0].value, 'index':''+i,'url':window.location.href}
              break;
            }
            
          }
          console.log(ans)

        //s0 = e.target.attributes[0].name
        //s1= e.target.attributes[1].name
        //s2= e.target.attributes[2].name
        //var ans={ s0 : e.target.attributes[0].value, s1 : e.target.attributes[1].value, s2 : e.target.attributes[2].value}

      }
      //console.log(e.target.attributes)
      
      //console.log(ans)
   
      // ans=JSingify(e.target.attributes[0])



      /*console.log(e.target.attributes)
      console.log((e.target.attributes[0]['class']))
      console.log(e.target.attributes[1])*/

      

      //for(let attr of e.target.attributes){
        //console.log(e.target.attributes)
        //ans=JSON.stringify()

      //}

      //ns=JSON.stringify(e.target.attributes)
      console.log("HERE")

      fetch('http://127.0.0.1:5000/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(ans)
}).then(res => res.json())
  .then(res => console.log(res));

      /*var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://127.0.0.1:5000/");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      const URL = 'http://127.0.0.1:5000/'
      const param={
        headers:{
          "content-type":"apllication/json; charset=UTF-8", 
          "Accept": "application/json"
        },
        body:JSON.stringify(ans),
        method:"POST"
      }
      fetch(URL,param)
      .then(data=>{return data.json()})
      .then(res=>{console.log(res)})*/
      
  // }
};

//("button").click(function() {
//    var t = $(this).attr('id');
//    //$('#GFG_DOWN').text("ID = " + t);
//    alert('Trigger event')
//    console.log('Triggered element ' )
//}); 

//var elements = document.querySelectorAll('');
//var elements = document.getElementsByTagName("")
//var i=0
for (var i=0; i<elements.length; i++) {
  for (var j = 0; j < eventsList.length; j++) {
    var element = elements[i];
    var event = eventsList[j];

    element.addEventListener(event,callbackFunction, true);
  }
  //i=i+1
}

	//var urls = document.getElementsByTagName('a');
	//let urlList  =  [];
	
}