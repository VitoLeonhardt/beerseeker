### BEERSEEKER

Comments:

- the pagination is a bit wonky, as the Punk API doesn't give you the option of seeing how many results are there.
- searching by name also doesn't seem to work so well, it's a drawback of the Punk API. Actually it doesn't seem to work at all. If this was a real scenario, I'd use some sort of client-side filtering, using lodash for example.
- the form fields could've been their own component, but I liked the simplicity.
- the tests are rather simple, but they're helpful - they also return some warnings, I'm a little unfamiliar with how react-testing-library works these days 
