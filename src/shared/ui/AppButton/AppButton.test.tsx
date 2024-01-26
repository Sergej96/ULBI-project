import { render, screen } from "@testing-library/react";
import AppButton from "./AppButton";

describe('className', () => {
    test('render button', ()=>{
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })
});