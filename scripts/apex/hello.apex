// List<Movie__c> movies = MovieController.getMovies();
//System.debug(movies);

//Parent to Child Relationship Query
List<Movie__c> movies = [
                    Select Id, Name, 
                          (select Job__c, Character__c, RecordType.Name, Artist__r.Name 
                            from Movie_Artists__r
                            limit 5
                          )
                    from Movie__c
                  where Name like '%Godfather'];

// System.debug(movies);

List<Movie_Artist__c> movieArtists = movies.get(0).Movie_Artists__r;

System.debug(movieArtists);