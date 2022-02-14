import { Component } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  message : string = 'Hola desde interpolacion';
  img = 'https://source.unsplash.com/random';
  btnDisabled:boolean;
  age=23;

  person = {
    name:'Ivan',
    age:23,
    avatar: 'https://source.unsplash.com/random'
  }
  names: string[]= ['Nico', 'Juli', 'Santiago'];
  newName: '';

  register = {
    name: '',
    email: '',
    password: '',
  }

  box = {
    width:100,
    height:100,
    background: 'red'
  };

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toogleButton(){
    this.btnDisabled=!this.btnDisabled
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  change(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name= element.value;
  }

  deleteName(index:number){
    this.names.splice(index,1)
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  onRegister() {
    console.log(this.register);
  }
}
