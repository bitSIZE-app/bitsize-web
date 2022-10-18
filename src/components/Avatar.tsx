import { styled } from "../styles/bitTheme";
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const AvatarRoot = styled(AvatarPrimitive.Root, {
    alignItems: 'center',
    backgroundColor: '$plum5',
    borderRadius: '100%',
    display: 'inline-flex',
    height: '$fontSizes$xxl',
    justifyContent: 'center',
    overflow: 'hidden',
    verticalAlign: 'middle',
    width: '$fontSizes$xxl'
});

const AvatarImage = styled(AvatarPrimitive.Image, {
    borderRadius: 'inherit',
    height: '100%',
    objectFit: 'cover',
    width: '100%'
});

type TProps = {
    className?: string;
    imgUrl: string
}

export function Avatar({className='', imgUrl}:TProps) {
    return (
        <AvatarRoot className={className}>
            <AvatarImage src={imgUrl} />
        </AvatarRoot>
    )
}