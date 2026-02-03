public with sharing class MovieController { 
  @AuraEnabled(cacheable=true)
  public static List<Movie__c> getMovies() {
    return [Select Name, Id, release_date__c from Movie__c limit 10];
  }
}