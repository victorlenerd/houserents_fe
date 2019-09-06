import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from "./index";

test("Pagination", () => {
    const onChangeHandler = jest.fn(page => page);

    const { asFragment, getByTestId } = render(<Pagination total={50} itemsPerPage={10} onChange={onChangeHandler} />);

    expect(asFragment()).toMatchSnapshot();

    const select = getByTestId("pagination-select");

    fireEvent.change(select, {
       target: {
           value: 2
       }
    });

    expect(onChangeHandler).toBeCalledWith(2);
});