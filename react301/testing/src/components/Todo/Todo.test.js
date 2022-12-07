import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import Todo from './';

describe('todo testleri', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);

        expect(items.length).toEqual(3);
    });

    test('input ve button dokumanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test('inputa değer girilip basılınca listeye eklenmeli', () => {
        const name = "burak";
        useEvent.type(input, name);

        useEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})