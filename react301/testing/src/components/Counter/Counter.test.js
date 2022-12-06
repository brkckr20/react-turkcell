import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import Counter from './';

/* temiz kod ile yazımı */
describe('counter test', () => {
    let increaseBtn, decreaseBtn, count

    /* 
        testler baslatilmadan once buralari calistir ve doldur
    */
    beforeEach(() => {
        console.log("Her testten önce çalışacağım");
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    });


    beforeAll(() => {
        console.log("Tüm testlerden önce bir kere çalışacağım");
    })

    afterAll(() => {
        console.log("En son 1 kere çalışacağım");
    })

    afterEach(() => {
        console.log("Her testten sonra çalışacağım");
    })

    test('increase btn', () => {
        useEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });


    test('decrease btn', () => {
        useEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
})

/* dığında şu olmalı gibi */
// test('increase btn', () => {
//     render(<Counter />);

//     const count = screen.getByText("0");
//     const increaseBtn = screen.getByText("Increase");

//     useEvent.click(increaseBtn);
//     expect(count).toHaveTextContent("1");
// });


// test('decrease btn', () => {
//     render(<Counter />);

//     const count = screen.getByText("0");
//     const increaseBtn = screen.getByText("Decrease");

//     useEvent.click(increaseBtn);
//     expect(count).toHaveTextContent("-1");
// });