import { Component } from '@angular/core';
//import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage  {
  //constructor(public toastController: ToastController) { }

  textbox: number;
  select_group: string;

  
  //Codes for Selecting unit from dropdown
  select_changed(){
    let x = this.select_group;
    
    if (x == "c1"){ //Seconds to Hours
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Seconds";
      document.getElementById("to").innerHTML = " Hours";
      document.getElementById("formula").innerHTML = " Seconds / 3600";
    }
    else if (x == "c2"){//Hours to Seconds
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Hours";
      document.getElementById("to").innerHTML = " Seconds";
      document.getElementById("formula").innerHTML = " Hours * 3600";
    }
    else if (x == "c3"){//Seconds to Days
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Seconds";
      document.getElementById("to").innerHTML = " Days";
      document.getElementById("formula").innerHTML = " Seconds / 86400";
    }
    else if (x == "c4"){//Days to Seconds
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Days";
      document.getElementById("to").innerHTML = " Seconds";
      document.getElementById("formula").innerHTML = " Days * 86400";
    }
    else if (x == "c5"){//Minutes to Days
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Minutes";
      document.getElementById("to").innerHTML = " Days";
      document.getElementById("formula").innerHTML = " Minutes / 1440";
    }
    else if (x == "c6"){//Days to Minutes
      document.getElementById("result").innerHTML = "";
      document.getElementById("from").innerHTML = " Days";
      document.getElementById("to").innerHTML = " Minutes";
      document.getElementById("formula").innerHTML = " Days * 1440";
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
    else if (x == "c1"){ //Seconds to Hours
      let compute = this.textbox / 3600;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c2"){//Hours to Seconds
      let compute = this.textbox * 3600;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c3"){//Seconds to Days
      let compute = this.textbox / 86400;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c4"){//Days to Seconds
      let compute = this.textbox * 86400;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c5"){//Minutes to Days
      let compute = this.textbox / 1440;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
    else if (x == "c6"){//Days to Minutes
      let compute = this.textbox * 1440;
      let ans = compute.toString();
	  	document.getElementById("result").innerHTML = " ".concat(ans);
    }
  }
}
