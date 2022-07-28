import { Component} from '@angular/core';
//import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage {
  //constructor(public toastController: ToastController) { }

  textbox: number;
  select_group: string;

  
  //Codes for Selecting unit from dropdown
  select_changed(){
    let x = this.select_group;
    
    if (x == "c1"){ //Celsius to Fahrenheit
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Celsius";
      document.getElementById("to").innerHTML = " Fahrenheit";
      document.getElementById("formula").innerHTML = " °F = (°C × 9/5) + 32";
    }
    else if (x == "c2"){//Fahrenheit to Celsius
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Fahrenheit";
      document.getElementById("to").innerHTML = " Celsius";
      document.getElementById("formula").innerHTML = " °C = (°F − 32) × 5/9";
    }
    else if (x == "c3"){//Celsius to Kelvin
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Celsius";
      document.getElementById("to").innerHTML = " Kelvin";
      document.getElementById("formula").innerHTML = " K = °C + 273.15";
    }
    else if (x == "c4"){//Kelvin to Celsius
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Kelvin";
      document.getElementById("to").innerHTML = " Celsius";
      document.getElementById("formula").innerHTML = " °C = K − 273.15";
    }
  }

//Codes for Button Click
  calculate(){
    let x = this.select_group;
    
    if (this.textbox == null){
      const alert = document.createElement('ion-alert');
      alert.header = "Message";
      alert.subHeader = "Please Input Value";
      alert.buttons = ['OK'];
      document.body.appendChild(alert);
      alert.present();
      document.getElementById("result").innerHTML = "";
    }
   else if (x == undefined){
      const alert = document.createElement('ion-alert');
      alert.header = "Message";
      alert.subHeader = "Please Select Unit of Measurement ";
      alert.message = "Choose from the options in the dropdown section";
      alert.buttons = ['OK'];
      document.body.appendChild(alert);
      alert.present();
    }
    else if (x == "c1"){ //Celsius to Fahrenheit
      let compute = (this.textbox * 9/5) + 32;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c2"){//Fahrenheit to Celsius
      let compute = (this.textbox - 32) * 5/9;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c3"){//Celsius to Kelvin
      let compute = this.textbox + 273.15;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c4"){//Kelvin to Celsius
      let compute = this.textbox - 273.15;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
  }
}