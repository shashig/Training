public with sharing class MovieController { 
  @AuraEnabled(cacheable=true)
  public static List<Movie_Artist__c> getMovieArtists(String movieId) {
    System.debug('movieId: ' + movieId);
    return [
      select Id, Artist__r.Name, Character__c, Job__c, Artist__r.Profile_Path__c, RecordType.Name
        from Movie_Artist__c
       where Movie__c = :movieId
    ];
  }
}