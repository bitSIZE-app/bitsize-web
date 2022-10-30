import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { styled } from '@styles/bitTheme';
import { trpc } from '@utils/trpc';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

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
    const { data: session } = useSession();
    const mutation = trpc.bits.addBit.useMutation();
    const [inputVal, setInputVal] = useState('');

    const addBit = async () => {
        if (inputVal.length > 3) {
            await mutation.mutate({
                authorId: 'cl9t6yqy50000zm0lxyir6oah',
                content: inputVal
            });

            setInputVal('');
        }
    }

    return (
        <StyledBitCreator>
            <div>
                <Avatar imgUrl="https://avatars.dicebear.com/api/adventurer/david.svg" />
            </div>
            <Input
                characterLimit={250}
                className="bit-creator-input"
                onChange={setInputVal}
                placeholder={"What do you wanna share?"}
                value={inputVal}/>
            <StyledButton variant="link" onClick={addBit}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </StyledButton>
        </StyledBitCreator>
    )
}