import {styled} from "../styles/bitTheme";

const StyledPageHeader = styled('div', {
    background: 'white',
    borderBottom: '1px $mauve5 solid',
    fontSize: '$m',
    fontWeight: '600',
    padding: '$3 $2',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 10
});

type TProps = {
    title: string;
}

export function PageHeader ({ title }:TProps) {
    return (
        <StyledPageHeader>
            {title}
        </StyledPageHeader>
    )
}