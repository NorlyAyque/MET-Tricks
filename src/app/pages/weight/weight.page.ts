import { Component} from '@angular/core';
//import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss'],
})
export class WeightPage {
  //constructor(public toastController: ToastController) { }

  textbox: number;
  select_group: string;

  //Codes for Selecting unit from dropdown
  select_changed(){
    let x = this.select_group;
   
    if (x == "c1"){ //kg to pounds
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Kilograms";
      document.getElementById("to").innerHTML = " Pounds";
      document.getElementById("formula").innerHTML = " Kilograms * 2.205";
    }
    else if (x == "c2"){//pounds to kg
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Pounds";
      document.getElementById("to").innerHTML = " Kilograms";
      document.getElementById("formula").innerHTML = " Pounds / 2.205";
    }
    else if (x == "c3"){//kg to stones
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Kilograms";
      document.getElementById("to").innerHTML = " Stones";
      document.getElementById("formula").innerHTML = " Kilograms / 6.35";
    }
    else if (x == "c4"){//Stones to kg
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Stones";
      document.getElementById("to").innerHTML = " Kilograms";
      document.getElementById("formula").innerHTML = " Stones * 6.35";
    }
    else if (x == "c5"){//Ounces to Grams
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Ounces";
      document.getElementById("to").innerHTML = " Grams";
      document.getElementById("formula").innerHTML = " Ounces * 28.35";
    }
    else if (x == "c6"){//Grams to Ounces
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Grams";
      document.getElementById("to").innerHTML = " Ounces";
      document.getElementById("formula").innerHTML = " Grams / 28.35";
    }
    else if (x == "c7"){//Ounces to Pounds
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Ounces";
      document.getElementById("to").innerHTML = " Pounds";
      document.getElementById("formula").innerHTML = " Ounces / 16";
    }
    else if (x == "c8"){//Pounds to Ounces
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Pounds";
      document.getElementById("to").innerHTML = " Ounces";
      document.getElementById("formula").innerHTML = " Pounds * 16";
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
    else if (x == "c1"){ //kg to pounds
      let compute = this.textbox * 2.205;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c2"){//pounds to kg
      let compute = this.textbox / 2.205;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c3"){//kg to stones
      let compute = this.textbox / 6.35;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c4"){//Stones to kg
      let compute = this.textbox * 6.35;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c5"){//Ounces to Grams
      let compute = this.textbox * 28.35;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c6"){//Grams to Ounces
      let compute = this.textbox / 28.35;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c7"){//Ounces to Pounds
      let compute = this.textbox / 16;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c8"){//Pounds to Ounces
      let compute = this.textbox * 16;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
  }
}
