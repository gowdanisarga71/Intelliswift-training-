import('./moviesPlay.js')
	.then(res => {
		console.log('data imported into data constant');
		data = res;
		run();
        run1();
        run2();
	});
function run() {
    const movies = data.movies;
    let map = new Map();
  
    const movieInfoDiv = document.getElementById('table');
    let tableHTML = "<thead><tr><th>Language</th><th>Count</th></tr></thead>";
  
    movies.forEach((movie) => {
      if (map.has(movie.originalLanguage)) {
        map.set(movie.originalLanguage, map.get(movie.originalLanguage) + 1);
      } else {
        map.set(movie.originalLanguage, 1);
      }
    });
  
    map.forEach((count, language) => {
      tableHTML += "<tbody>";
      tableHTML += <tr><td>${language}</td><td>${count}</td></tr>;
      tableHTML += "</tbody>";
    });
  
    movieInfoDiv.innerHTML = "<table class='ui celled table'>" + tableHTML + "</table>";
  }
  
  function run1() {
    const movies = data.movies;
    const languages = data.languages;
    let languageMap = new Map();
    let movieCountMap = new Map();
  
    const movieInfoDiv = document.getElementById('table');
    let tableHTML = "<thead><tr><th>Language</th><th>Count</th></tr></thead>";
  
    // Create a map for language information
    languages.forEach((language) => {
      languageMap.set(language.iso_639_1, language);
    });
  
    // Count movies per language
    movies.forEach((movie) => {
      if (movieCountMap.has(movie.originalLanguage)) {
        movieCountMap.set(movie.originalLanguage, movieCountMap.get(movie.originalLanguage) + 1);
      } else {
        movieCountMap.set(movie.originalLanguage, 1);
      }
    });
  
    // Display language name and count
    movieCountMap.forEach((count, languageCode) => {
      const language = languageMap.get(languageCode);
      if (language) {
        tableHTML += "<tbody>";
        tableHTML += <tr><td>${language.english_name} (${language.name})</td><td>${count}</td></tr>;
        tableHTML += "</tbody>";
      }
    });
  
    movieInfoDiv.innerHTML = "<table class='ui celled table'>" + tableHTML + "</table>";
  }

  function run() {
    // ... (existing code)
  
    // Optional: Sort movie count map by count (descending order)
    const sortedMovieCountMap = new Map([...movieCountMap.entries()].sort((a, b) => b[1] - a[1]));
  
    // Display sorted table
    sortedMovieCountMap.forEach((count, languageCode) => {
      const language = languageMap.get(languageCode);
      if (language) {
        tableHTML += "<tbody>";
        tableHTML += <tr><td>${language.english_name} (${language.name})</td><td>${count}</td></tr>;
        tableHTML += "</tbody>";
      }
    });
  
    movieInfoDiv.innerHTML = "<table class='ui celled table'>" + tableHTML + "</table>";
  }