import { styled } from '../styles/bitTheme';

const StyledSidebar = styled('div', {
    backgroundColor: '$mauve1',
    borderRight: '1px solid $mauve5',
    height: '100%',
    maxWidth: 150,
    minWidth: 150,
    padding: '$3'
});

export function Sidebar() {
    return (
        <StyledSidebar>
            Home
        </StyledSidebar>
    )
}