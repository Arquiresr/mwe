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
 </div>
 
  );
}

function Titulo(){
	return  (  <div>
	<MyButton />
	
	<div class = "Ty"><div class = "Pont"> <input type="text"placeholder="Your name"/><btn4><img src = {MyImage}  width="20px" height="20px"/></btn4></div></div>

	<FavoriteColor />
<div class = "Roda">aa</div>
</div>

);

}


function MyButton() {
		 const [isOpen, setIsOpen] = useState(false);

  
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
