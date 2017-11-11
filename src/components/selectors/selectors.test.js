import expect from "expect";
import { authorsFormattedForDropDown } from "./selectors";

describe('Author Selectors', () => {
    describe('authorsFormattedForDropDown', () => {
        it('Should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'cory', lastName: 'House'},
                {id: 'Scott', firstName: 'Scott', lastName: 'Allen'}
            ];

            const expected = [
                {value: 'cory-house', text: 'cory House'},
                {value: 'Scott', text: 'Scott Allen'}
            ];

            expect(authorsFormattedForDropDown(authors)).toEqual(expected);
        });
    });
});