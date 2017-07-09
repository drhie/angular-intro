import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //This brings in the map function used in getPosts

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data service connected...")
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

}
