import dayjs from 'dayjs';

import {styled} from "../styles/bitTheme";
import {Avatar} from "./Avatar";
import { BitMedia } from './BitMedia';
import { Link } from './Link';

const StyledBit = styled('div', {
    backgroundColor: 'white',
    borderBottom: '1px solid $mauve5',
    display: 'flex',
    padding: '$3 $2',
    position: 'relative',
    width: '100%',

    '.bit-avatar': {
        marginRight: '$1',
        position: 'relative',
        zIndex: 2
    },
    '.bit-body': {
        position: 'relative',
        width: '100%',
        zIndex: 1,

        '.bit-header': {
            display: 'flex',
            fontSize: '$s',

            '.bit-date': {
                color: '$mauve9',
                marginLeft: 'calc($1/2)'
            }
        },
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
        zIndex: 0,
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
            avatarUrl: string;
            username: string;
            verified: boolean;
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
            <Avatar className="bit-avatar" imgUrl={bit.author.avatarUrl} />
            <div className="bit-body">
                <div className="bit-header">
                    <Link href={`/bit/${bit.author.username.toLowerCase()}`}>@{bit.author.username}</Link> <span className="bit-date">{dayjs(bit.publishedOn).fromNow()}</span>
                </div>
                {bit.media.id && <BitMedia {...bit.media} />}
                <div className="bit-message">
                    {bit.message}
                </div>
                <div className="bit-actions">

                </div>
            </div>
        </StyledBit>
    )
}