import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { MuiPage } from './pages/mui';
import { DrawerContext } from './contexts/drawerContextProvider';

test('renders welcome text', () => {
    render(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <DrawerContext.Provider
                    value={{
                        drawerOpen: true,
                        setDrawerOpen: jest.fn(),
                    }}
                >
                    <MuiPage />
                </DrawerContext.Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
    const bluiText = screen.getByText(/Ac/i);
    expect(bluiText).toBeInTheDocument();
});
