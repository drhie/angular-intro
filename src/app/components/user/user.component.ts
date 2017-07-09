import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'Steve Smith';
  age:number;
  email:string;
  address:Address;
  hobbies:any[];
  posts:Post[];

  constructor(private dataService:DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.age = 30;
    this.email = "email@gmail.com";
    this.address = {
      street: "50 Main St",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = ["Write code", "Watch movies", "Listen to music"];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    }); //subscribe because it is an observable.
  }

  onClick(){
    this.name = "David Rhie";
    this.hobbies.unshift("New Hobby");
    console.log("Hello!")
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for(let i=0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address{
  street:string,
  city:string,
  state:string,
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
