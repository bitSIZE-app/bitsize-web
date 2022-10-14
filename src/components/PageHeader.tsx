import {styled} from "../styles/bitTheme";

const StyledPageHeader = styled('div', {
    background: 'white',
    borderBottom: '1px $mauve5 solid',
    fontSize: '$m',
    fontWeight: '600',
    padding: '$3 $2',
    widht: '100%'
});

export function PageHeader () {
    return (
        <StyledPageHeader>
            Home
        </StyledPageHeader>
    )
}