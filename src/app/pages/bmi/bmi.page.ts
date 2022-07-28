import { Component} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage {
  constructor(public toastController: ToastController) { }
  
  //Code Starts Here
  
  height: any;
  weight: any;

  calculate(){
    let compute = this.weight/(this.height * this.height);
    if (this.weight == null && this.height == null){
      alert("Please input value");
    }
    else if ((this.weight > 100 || this.weight < 1) || (this.height > 3 || this.height < 1)){
      const alert = document.createElement('ion-alert');
      alert.header = "Alert";
      alert.subHeader = "Inputted data does not meet the required value.";
      alert.message = "For Weight: <b> value ranges from 1kg to 100kg </b> <br><br>" +
                      "For Height: <b> value ranges from 1m to 3m </b> ";
      alert.buttons = ['OK'];
      document.body.appendChild(alert);
      alert.present();
    }
   
    else{
      let x = compute.toString();
	  	document.getElementById("output").innerHTML = " ".concat(x);

      if (compute > 30.0){
        document.getElementById("remarks").innerHTML = " Obese";
        document.getElementById("recommendation").innerHTML = "<br>"+
                                                            "Exercise regularly <br><br>" + 
                                                            "Avoid red meat and opt for lean meat like chicken and salmon. <br><br>"+
                                                            "Load up on seasonal vegetables. They provide both soluble and insoluble fibers in addition to vitamins, minerals and antioxidants. <br><br>"+
                                                            "Sugar intake should be less than 10% of your total calories; for a normal weight woman who needs 1900Kcal/day, this is about 10 -11 teaspoons of sugar. <br><br>"+
                                                            "Stay away from trans fats as they are one of the biggest culprits of growing instances of obesity globally. ";
      }
      else if (compute >= 25.0 || compute >= 29.9){
        document.getElementById("remarks").innerHTML = " Overweight";
        document.getElementById("recommendation").innerHTML = "<br>"+
                                                            "Eat Frequently In Smaller Portions <br><br>" + 
                                                            "Understand Your Daily Calorie Allowance <br><br>"+
                                                            "Cut Down On Carbohydrates. <br><br>"+
                                                            "Increase The Protein Intake. <br><br>"+
                                                            "Keep Fat To A Minimum. ";
      }
      else if (compute >= 18.5 || compute >= 24.9){
        document.getElementById("remarks").innerHTML = " Healthy";
        document.getElementById("recommendation").innerHTML = "<br>"+
                                                            " Keep it up!</h2><br><br>" + 
                                                            " You are normal and Healthy<br><br>";
      }
      else if (compute < 18.4){
        document.getElementById("remarks").innerHTML = " Underweight";
        document.getElementById("recommendation").innerHTML = "<br>"+
                                                            " Eat More Often<br><br>" + 
                                                            " Eat Nutrient-dense Foods<br><br>"+
                                                            " Add Calorie-dense Snacks<br><br>"+
                                                            " Exercise Regularly<br><br>";
      }
      else{
        alert("Incomplete Input!");
        document.getElementById("output").innerHTML = " ";
      }
    }
    
    }
}
