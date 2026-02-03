import { LightningElement, wire, api } from 'lwc';
import getMovieArtists from '@salesforce/apex/MovieController.getMovieArtists';

export default class MovieNames extends LightningElement {
  @api recordId = '';

  movieArtistsResponse;
  @wire(getMovieArtists, { movieId: "$recordId"}) 
  wiredMovies(response) {
    console.log(response);
    this.movieArtistsResponse = response;
  }
}