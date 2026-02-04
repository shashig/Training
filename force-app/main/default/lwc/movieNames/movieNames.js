import { LightningElement, wire, api } from 'lwc';
import getMovieArtists from '@salesforce/apex/MovieController.getMovieArtists';
 
export default class MovieNames extends LightningElement {
  @api recordId;
  
  movieArtistsResponse;
  @wire(getMovieArtists, { movieId: "$recordId"}) 
  wiredMovies(response) {
    console.log('recordId: ' + this.recordId);
    console.log(response);
    this.movieArtistsResponse = response;
  }

  get displayRecs() {
    if (this.movieArtistsResponse.data) {
      return this.movieArtistsResponse.data.map(ma => {
        if (ma.RecordType.Name === 'Actor') {
          return `Actor: ${ma.Artist__r.Name} - ${ma.Character__c}`;
        } else {
          return `Crew: ${ma.Artist__r.Name} - ${ma.Job__c}`
        }
      })
    }
    return [];
  }
}