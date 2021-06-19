const authenticationHeaders = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyaW5OSVdnbjdCSVNFUTFneWtkTHc1U3NVZXFGcElnNkc1Z1g0UVd3ZTBCNm5HcmN6QyIsImp0aSI6IjM0MWRlMjdiNjBiYjgzNmFhOTU5YzEzMzI1M2U1NTRiN2I5ZDEwODA0MWE3YWM1MzNjNzdiOGVjN2M0MDFlMGE5OWY2NjRiYTBiM2JkYjdmIiwiaWF0IjoxNjIzODk4NTEwLCJuYmYiOjE2MjM4OTg1MTAsImV4cCI6MTYyMzkwMjExMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.wFMvJ26dBg8Cj8wZAHlK5KJhaN_URAa8z77B5piLCfb_fBKBNvXFMmWDip1JGdDnFDAGk4UoLJLUPSAMrLFyYZvmF4QRxmDlKZztJ217rNlFTC7ni2WvUBT719GumXuLM5VufXplXa5JnIXKwun8fs0-cK9vCAKLd8bCcGK2_hOYfm47oIlPoUtrxx5LTrmF7xIbLCXHhfkgdFo9r8AgklOaaOxTTPQNI_xBtAeyewMIFpHyB91ilyII1foyOiyqsjIEObCjq7Pk1Ah0cAHNwdJXsUo7WQAS6W3SYiCqf2o2Hx__pkPWRAedUPYyXMXLk4dX985SkTNFJZ1rldErDQ', 
    'Content-Type': 'application/x-www-form-urlencoded'
};
const setHeaderImg = (imgEl) => {
fetch('https://api.petfinder.com/v2/animals?distance=500&location=oregon&page=1', {
    headers: new Headers(authenticationHeaders)
})
  .then((response) => response.json())
  .then(function(data){
      console.log('data we got from the API: ', data)
      fetch('https://api.petfinder.com/v2/organizations/ID142', {
        headers: new Headers(authenticationHeaders)
     })
      .then((response) => response.json())
      .then(function(data){
          console.log('data we got from the organization: ', data)
         //  "href": "/v2/organizations/nj333"
        });
    });
};
setHeaderImg();

//code for new Token
//LET variable for Token
//"IF countdown statement" that will request and replace Token every 50min; (let i = 1min, Token Let Variable = 50min countdown(--), if i > Token, then request new Token)


//function for new Token request:
//Token request variable: curl -d "grant_type=client_credentials&client_id={2inNIWgn7BISEQ1gykdLw5SsUeqFpIg6G5gX4QWwe0B6nGrczC}&client_secret={5jQpOQ412jXOkGvgiGmWR3R1vPzz00l8nx3NrKWl}" https://api.petfinder.com/v2/oauth2/token


//Search Click requests new token everytime
