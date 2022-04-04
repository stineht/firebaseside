import { initializeApp } from 'firebase/app';
import { getFirestore,collection, addDoc, onSnapshot, query, orderBy} from "firebase/firestore";
import dayjs from "dayjs";

const firebaseConfig = {
    apiKey: "AIzaSyDbbpjYFcpbxI9ydghSzjkvVDJS1nvd9G0",
    authDomain: "mittprosjekt-6982f.firebaseapp.com",
    projectId: "mittprosjekt-6982f",
    storageBucket: "mittprosjekt-6982f.appspot.com",
    messagingSenderId: "243539719234",
    appId: "1:243539719234:web:0afcd6df1f1752981ae9db",
    measurementId: "G-FY9F50JT3H"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  
  //henter collection meldinger fra Firestore
  const colRef=collection(db, "meldinger")
  

  //lager nye dokumenter fra input i inputboksen og sender til collection, legger til timestamp

const addMessageForm=document.querySelector('.add')
addMessageForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    addDoc(colRef,{
        melding: addMessageForm.melding.value,
        tidlaget: dayjs().format("HH:mm:ss")

      
       
    })

    .then(() => {
        addMessageForm.reset()
   
    })
})

 


//henter tabellen fra index.html
var tabell=document.getElementById("tabell");
// lager HTML elementer (tabellrad og dataceller) og setter melding + tidlaget inni(innerHTML) 
function leggTilDokument(melding,tidlaget){
  let trow=document.createElement("tr");
  let td1=document.createElement("td");
  let td2=document.createElement("td");
  let td3=document.createElement("td");


td2.innerHTML= melding;
td3.innerHTML=tidlaget;

trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);

tabell.appendChild(trow);
}


//legger til alle dokumentene i tabellen via funksjonen leggTilDokument
function leggTilAlleDokumenter (meldingen) {
tabell.innerHTML="";
meldingen.forEach(element => {
leggTilDokument (element.melding, element.tidlaget)
})
}




//tar snapshot(leser dataene som finnes i firestore) og pusher data til array meldinger
//arrayet blir sendt til funksjon over som legger dataene inn i tabellen
//sorterer data etter tidspunkt det ble laget

function hentAlleDokumenter(){
  const dbRef =collection(db, "meldinger");
  const q = query(dbRef, orderBy("tidlaget", "desc"))

  onSnapshot(q, (querySnapshot) => {
    var meldinger=[];
    querySnapshot.forEach(doc => {
      meldinger.push(doc.data());
    })
    leggTilAlleDokumenter(meldinger);

  })



}
window.onload=hentAlleDokumenter;

