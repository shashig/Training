import { LightningElement, wire } from 'lwc';
import getMovies from '@salesforce/apex/MovieController.getMovies';

export default class MovieNames extends LightningElement {
  moviesResponse;
  @wire(getMovies) 
  wiredMovies(response) {
    console.log(response);
    this.moviesResponse = response;
  }
}