import { LightningElement } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    show = true;
    greeting = 'World';
  nameChange(event){
    this.greeting = event.target.value;
  }

  nextClick(){
    this.show = false;
    return this.greeting;
  }
  backClick(){
    this.show = true;
  }

}