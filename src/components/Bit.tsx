import dayjs from 'dayjs';

import {styled} from "../styles/bitTheme";
import { BitMedia } from './BitMedia';
import { Link } from './Link';
import { AvatarHoverCard } from './AvatarHoverCard';

const StyledBit = styled('div', {
    backgroundColor: 'white',
    borderBottom: '1px solid $mauve5',
    padding: '$3 $2',
    position: 'relative',
    width: '100%',

    '.bit-header': {
        alignItems: 'center',
        display: 'flex',
        fontSize: '$s',
        position: 'relative',
        zIndex: 4,

        '.bit-avatar': {
            marginRight: '$1',

        },

        '.bit-date': {
            color: '$mauve9',
        }
    },
    '.bit-media': {
        position: 'relative',
        zIndex: 3
    },
    '.bit-body': {
        marginTop: '$2',
        pointerEvents: 'none',
        position: 'relative',
        width: '100%',
        zIndex: 2,
    },

    '.bit-actions': {
        display: 'flex',

        width: '100%'
    },

    '.bit-clickOverlay': {
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
    },

    '&:hover': {
        backgroundColor: '$mauve2',
        cursor: 'pointer',
    },

    '&:last-child': {
        border: 'none',
    }
});

type TProps = {
    bit: {
        id: string;
        message: string;
        publishedOn: string;
        author: {
            id: string;
            image: string;
            bio: string;
            name: string;
            username: string;
            verified?: boolean;
        },
        media: {
            id?: string;
            mediaType?: string;
            mediaUrl?: string;
        }
    }
}

export function Bit({bit}: TProps) {
    const onClick = () => {
        console.log('go to bit page', bit.id);
    }

    return (
        <StyledBit>
            <div className="bit-clickOverlay" onClick={onClick}></div>
            <div className="bit-header">
                <AvatarHoverCard triggerClass="bit-avatar" user={bit.author} />

                <div className="bit-byline">
                    <Link href={`/bit/${bit.author.username.toLowerCase()}`}>@{bit.author.username}</Link>
                    <div className="bit-date">{dayjs(bit.publishedOn).fromNow()}</div>
                </div>
            </div>
            <div className="bit-media">
                {bit.media.id && <BitMedia {...bit.media} />}
            </div>
            <div className="bit-body">
                {bit.message}
            </div>
            <div className="bit-actions">

            </div>
        </StyledBit>
    )
}