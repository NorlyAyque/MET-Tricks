import { Component} from '@angular/core';
//import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-length',
  templateUrl: './length.page.html',
  styleUrls: ['./length.page.scss'],
})
export class LengthPage  {
  //constructor(public toastController: ToastController) { }

  textbox: number;
  select_length: string;

  //Codes for Selecting unit from dropdown
  length_changed(){
    let x = this.select_length;
    
    if (x == "l1"){ //Meters to Feet
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Meters";
      document.getElementById("to").innerHTML = " Feet";
      document.getElementById("formula").innerHTML = " Meters * 3.281";
    }
    else if (x == "l2"){//Feet to Meters
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Feet";
      document.getElementById("to").innerHTML = " Meters";
      document.getElementById("formula").innerHTML = " Feet / 3.281";
    }
    else if (x == "l3"){//in to cm
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Inches";
      document.getElementById("to").innerHTML = " Centimeter";
      document.getElementById("formula").innerHTML = " Inches * 2.54";
    }
    else if (x == "l4"){//cm to in
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Centimeter";
      document.getElementById("to").innerHTML = " Inches";
      document.getElementById("formula").innerHTML = " Centimeter / 2.54";
    }
    else if (x == "l5"){//mm to in
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Millimeter";
      document.getElementById("to").innerHTML = " Inches";
      document.getElementById("formula").innerHTML = " Millimeter / 25.4";
    }
    else if (x == "l6"){//in to mm
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Inches";
      document.getElementById("to").innerHTML = " Millimeter";
      document.getElementById("formula").innerHTML = " Inches * 25.4";
    }
    else if (x == "l7"){//in to ft
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Inches";
      document.getElementById("to").innerHTML = " Feet";
      document.getElementById("formula").innerHTML = " Inches / 12";
    }
    else if (x == "l8"){//ft to in
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Feet";
      document.getElementById("to").innerHTML = " Inches";
      document.getElementById("formula").innerHTML = " Feet * 12";
    }
  }

//Codes for Button Click
  calculate(){
    let x = this.select_length;
    
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
    else if(x == "l1"){ //Meters to Feet
      let compute = this.textbox * 3.281;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l2"){//Feet to Meters
      let compute = this.textbox / 3.281;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l3"){//in to cm
      let compute = this.textbox * 2.54;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l4"){//cm to in
      let compute = this.textbox / 2.54;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l5"){//mm to in
      let compute = this.textbox / 25.4;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l6"){//in to mm
      let compute = this.textbox * 25.4;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l7"){//in to ft
      let compute = this.textbox / 12;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "l8"){//ft to in
      let compute = this.textbox * 12;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
  }
}
