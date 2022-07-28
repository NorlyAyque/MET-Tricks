import { Component} from '@angular/core';
//import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.page.html',
  styleUrls: ['./volume.page.scss'],
})
export class VolumePage {
  //constructor(public toastController: ToastController) { }

  textbox: number;
  select_group: string;

  //Codes for Selecting unit from dropdown
  select_changed(){
    let x = this.select_group;
    
    if (x == "c1"){ //Millilitres to Ounces
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Millilitres";
      document.getElementById("to").innerHTML = " Ounces";
      document.getElementById("formula").innerHTML = " Millilitres / 29.574";
    }
    else if (x == "c2"){//Ounces to Millilitres
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Ounces";
      document.getElementById("to").innerHTML = " Millilitres";
      document.getElementById("formula").innerHTML = " Ounces * 29.574";
    }
    else if (x == "c3"){//Gallons to Liters
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Gallons";
      document.getElementById("to").innerHTML = " Liters";
      document.getElementById("formula").innerHTML = " Gallons * 3.785";
    }
    else if (x == "c4"){//Liters to Gallons
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Liters";
      document.getElementById("to").innerHTML = " Gallons";
      document.getElementById("formula").innerHTML = " Liters / 3.785";
    }
    else if (x == "c5"){//Ounces to Litres
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Ounces";
      document.getElementById("to").innerHTML = " Litres";
      document.getElementById("formula").innerHTML = " Ounces / 33.814";
    }
    else if (x == "c6"){//Liters to Ounces
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Liters";
      document.getElementById("to").innerHTML = " Ounces";
      document.getElementById("formula").innerHTML = " Liters * 33.814";
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
    else if (x == "c1"){ //Millilitres to Ounces
      let compute = this.textbox / 29.574;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c2"){//Ounces to Millilitres
      let compute = this.textbox * 29.574;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c3"){//Gallons to Liters
      let compute = this.textbox * 3.785;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c4"){//Liters to Gallons
      let compute = this.textbox / 3.785;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c5"){//Ounces to Litres
      let compute = this.textbox / 33.814;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c6"){//Liters to Ounces
      let compute = this.textbox * 33.814;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
  }
}
