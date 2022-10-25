import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { styled } from '../styles/bitTheme';

import { Input } from './Input';
import { Button } from './Button';

import logo from '../assets/bitSIZE-logo.svg';
import { Separator } from './Separator';
import { plum } from '@radix-ui/colors';

const StyledLoginForm = styled('div', {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
});

const Form = styled('div', {
    border: '1px solid $mauve5',
    borderRadius: '$4',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 320,
    padding: '$4',
    width: '100%',

    '.logo-wrapper': {
        marginBottom: '$1',
    },

    'input': {
        margin: '$1 0'
    },

    'button': {
        marginTop: '$1',
        width: '100%'
    },

    'h4': {
        color: '$mauve11',
        textAlign: 'center'
    },

    '.google-login': {
        'svg': {
            marginRight: '$1'
        }
    }
});

export function LoginForm() {
    return (
        <StyledLoginForm>
            <Form>
                <div className="logo-wrapper">
                    <Image src={logo} width={103} height={16} />
                </div>
                <Input placeholder="Username or email" />
                <Input placeholder="Password" type="password" />
                <Button variant="primary">
                    Log In
                </Button>
                <Separator variant="secondary" />
                <h4>or</h4>
                <Button className="google-login" variant="primary" outlined>
                    <FontAwesomeIcon icon={faGoogle} size="2xs" /> Google
                </Button>
            </Form>
        </StyledLoginForm>
    )
}