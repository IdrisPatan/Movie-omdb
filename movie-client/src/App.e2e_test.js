Feature('Home Page')

Scenario('test something', (I) => {
    I.amOnPage('/')
    I.see('Movie Search')
    I.seeElement({id: 'searchBox'});

})