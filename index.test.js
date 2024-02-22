test("Leads to Pikachu API", () => {
    const result = makeUrl('pikachu');
    const expected = 'https://pokeapi.co/api/v2/pikachu';
    equal(result, expected);
})

test("Does not lead to Pikachu API", () => {
    const result = makeUrl('bulbasaur');
    const expected = 'https://pokeapi.co/api/v2/pikachu';
    notEqual(result, expected);
});

test("searchParamsToObject should create an object from a query string", (str) => {
    const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
    const expected = { name: "oliver", email: "hello@oliverjam.es"};
    equal(result.name, expected.name);
    equal(result.email, expected.email);
});

test("isLeapYear should handle invalid input", () => {
    equal(isLeapYear('2000'), 'Please enter a number', 'Input must be a number');
    equal(isLeapYear(-5), 'Year cannot be negative', 'Input must be a positive number');
    equal(isLeapYear(2003), false, '2023 is not a leap year');
})

test("isLeapYear should handle multiples of 4", () => {
    const result = isLeapYear(2020);
    const expected = true;
    equal(result, expected);
});

test("Check 1900 is not a leap year", () => {
    const result = isLeapYear(1900);
    const expected = false;
    equal(result, expected);
});

