import { styled } from '../styles/bitTheme';

const StyledBitMedia = styled('div', {
    borderRadius: '$4',
    cursor: 'pointer',
    margin: '$2 0',
    maxHeight: 600,
    overflow: 'hidden',
    width: '100%',

    'img': {
        height: '100%',
        objectFit: 'cover',
        width: '100%'
    }
})

type TProps = {
    id?: string;
    mediaType?: string;
    mediaUrl?: string;
}

export function BitMedia({id, mediaType, mediaUrl}:TProps) {
    const onClick = () => {
        console.log('open media modal', id);
    }
    return (
        <StyledBitMedia onClick={onClick}>
            {mediaType === 'img' && <img src={mediaUrl} /> }
        </StyledBitMedia>
    )
}