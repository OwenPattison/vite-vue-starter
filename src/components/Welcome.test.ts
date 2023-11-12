import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Welcome } from "./Welcome";

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});

describe('Welcome', () => {
    it('renders headline', () => {
        render(Welcome, { props: {
            name: "Owen"
        } });

        screen.getByText('Hello Owen!')
    });
});
