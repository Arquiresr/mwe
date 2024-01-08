import logo from './logo.svg';
import './App.css';
 import { useState } from "react";

import ReactDOM from "react-dom/client";
 import MyImage from './procurar.png';
 import MyImage1 from './aa.png';

 function App() {


function FavoriteColor() {
	return(
 <div class = "Rodape">
 <div class = "fg"><img src = {MyImage1} width="190px" height="50px"/> </div>
<div class = "f1">Empresa<br / > Quem somos?<br /> Por que cine?<br /> Trabalhe  com nosco</div>
 <div class = "f2">Candidato<br / > Blog<br /> Vagas<br /> Ajúudas</div>
<div class = "f11">Veiculo de comunicação<br /><img src ="https://cdn-icons-png.flaticon.com/512/1936/1936319.png"width="40px" height="40px"/><img src = "https://cdn-icons-png.flaticon.com/256/124/124010.png" width="40px" height="40px"/>
</div>
 </div>
 
  );
}

function Das(){
	return(
	<div class ="borda">d</div>);
}
function Titulo(){
	return  (  <div>
	<MyButton />
	
	<div class = "Taba"><div class = "Pont"> <input type="text"placeholder="Your name"/><btn4><img src = {MyImage}  width="20px" height="20px"/></btn4></div></div>
<Das /><br /><br  /><br /><br /><br /><br /><br /><br /><br />
	<FavoriteColor />
<div class = "Roda"><div class="fi">@2024 GCine</div></div>
</div>

);

}

function MyButton() {
		

  
  return (
<div class = "menu-bar">



   
      <div class = "Menu">
    <ul>
  <li><a class="active" href="App.js">Carro</a></li>
  <li><a href="Cam.js">Caminhão</a></li>
  <li><a href="#Motoa.js">Moto</a></li>
  <li><a href="#about">Onibus</a></li>
</ul>
	 </div>
<div class = "position"><a href = "App.js">
<img src = {MyImage1} width="80px" height="20px"/></a></div>

</div>


  );
}



 
   
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Titulo />);

 }          

export default App;
