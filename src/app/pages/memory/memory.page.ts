import { Component } from '@angular/core';
//import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.page.html',
  styleUrls: ['./memory.page.scss'],
})
export class MemoryPage {
  //constructor(public toastController: ToastController) { }

  textbox: number;
  select_group: string;

    //Codes for Selecting unit from dropdown
    select_changed(){
      let x = this.select_group;
       
      if (x == "c1"){ //Bits to Bytes
        document.getElementById("result").innerHTML = "";
        document.getElementById("from").innerHTML = " Bits";
        document.getElementById("to").innerHTML = " Bytes";
        document.getElementById("formula").innerHTML = " Bits / 8";
      }
      else if (x == "c2"){//Bytes to Bits
        document.getElementById("result").innerHTML = "";
        document.getElementById("from").innerHTML = " Bytes";
        document.getElementById("to").innerHTML = " Bits";
        document.getElementById("formula").innerHTML = " Bytes * 8";
      }
      else if (x == "c3"){//kb to mb
        document.getElementById("result").innerHTML = "";
        document.getElementById("from").innerHTML = " Kilobytes";
        document.getElementById("to").innerHTML = " Megabytes";
        document.getElementById("formula").innerHTML = " Kilobytes / 1000";
      }
      else if (x == "c4"){//mb to kb
        document.getElementById("result").innerHTML = "";
        document.getElementById("from").innerHTML = " Megabytes";
        document.getElementById("to").innerHTML = " Kilobytes";
        document.getElementById("formula").innerHTML = " Megabytes * 1000";
      }
      else if (x == "c5"){//gb to tb
        document.getElementById("result").innerHTML = "";
        document.getElementById("from").innerHTML = " Gigabytes";
        document.getElementById("to").innerHTML = " Terabytes";
        document.getElementById("formula").innerHTML = " Gigabytes / 1000";
      }
      else if (x == "c6"){//tb to gb
        document.getElementById("result").innerHTML = "";
        document.getElementById("from").innerHTML = " Terabytes";
        document.getElementById("to").innerHTML = " Gigabytes";
        document.getElementById("formula").innerHTML = " Terabytes * 1000";
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
      else if (x == "c1"){ //Bits to Bytes
        let compute = this.textbox / 8;
        let ans = compute.toString();
        document.getElementById("result").innerHTML = " ".concat(ans);
      }
      else if (x == "c2"){//Bytes to Bits
        let compute = this.textbox * 8;
        let ans = compute.toString();
        document.getElementById("result").innerHTML = " ".concat(ans);
      }
      else if (x == "c3"){//kb to mb
        let compute = this.textbox / 1000;
        let ans = compute.toString();
        document.getElementById("result").innerHTML = " ".concat(ans);
      }
      else if (x == "c4"){//mb to kb
        let compute = this.textbox * 1000;
        let ans = compute.toString();
        document.getElementById("result").innerHTML = " ".concat(ans);
      }
      else if (x == "c5"){//gb to tb
        let compute = this.textbox / 1000;
        let ans = compute.toString();
        document.getElementById("result").innerHTML = " ".concat(ans);
      }
      else if (x == "c6"){//tb to gb
        let compute = this.textbox * 1000;
        let ans = compute.toString();
        document.getElementById("result").innerHTML = " ".concat(ans);
      }
    }
}
