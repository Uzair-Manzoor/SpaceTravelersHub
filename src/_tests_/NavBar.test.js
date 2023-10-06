import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom'

describe('Navbar Component', () => {
    beforeEach(() => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
    });

    it('renders the logo', () => {
        const logoElement = screen.getByAltText('');
        expect(logoElement).toBeInTheDocument();
    });

    it('renders the header text', () => {
        const headerElement = screen.getByText(/Space Traveller's Hub/i);
        expect(headerElement).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        const rocketsLink = screen.getByText(/Rockets/i);
        const missionsLink = screen.getByText(/Missions/i);
        const profileLink = screen.getByText(/My Profile/i);

        expect(rocketsLink).toBeInTheDocument();
        expect(missionsLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
    });

    it('has correct link paths', () => {
        const rocketsLink = screen.getByText(/Rockets/i).closest('a');
        const missionsLink = screen.getByText(/Missions/i).closest('a');
        const profileLink = screen.getByText(/My Profile/i).closest('a');

        expect(rocketsLink).toHaveAttribute('href', '/');
        expect(missionsLink).toHaveAttribute('href', '/react-capstone/missions');
        expect(profileLink).toHaveAttribute('href', '/react-capstone/myprofile');
    });
});
