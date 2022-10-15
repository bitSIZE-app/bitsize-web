import { styled } from "../styles/bitTheme";

const StyledBit = styled('div', {
    backgroundColor: 'white',
    borderBottom: '1px solid $mauve5',
    padding: '$3 $2',
   width: '100%'
});

type TProps = {
    bit: {
        id: string;
        message: string;
    }
}

export function Bit({bit}: TProps) {
    return (
        <StyledBit>
            {bit.id} {bit.message}
        </StyledBit>
    )
}