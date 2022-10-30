import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { styled } from '@styles/bitTheme';

const StyledBitCreator = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid $mauve5',
    display: 'flex',
    padding: '$3 $2',
    width: '100%',

    '.bit-creator-input': {
        margin: '0 $1',
        width: '100%'
    }
});

const StyledButton = styled(Button, {
    padding: '$1'
});

export function BitCreator() {
    return (
        <StyledBitCreator>

            <div>
                <Avatar imgUrl="https://avatars.dicebear.com/api/adventurer/david.svg" />
            </div>
            <Input characterLimit={250} className="bit-creator-input" placeholder={"What do you wanna share?"} />
            <StyledButton variant="link"><FontAwesomeIcon icon={faPaperPlane} /></StyledButton>
        </StyledBitCreator>
    )
}