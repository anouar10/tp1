import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
 

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

contact={

nom:'anouar',
prenom:'hadj salem',
photo:'assets/10.jpg'

}

  constructor(public nav:NavController ) { }

  ngOnInit() {


  }


  NavigateToSecond(){
    this.nav.navigateForward("/second");
    
      }


}
