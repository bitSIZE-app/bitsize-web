import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { styled } from '../styles/bitTheme';

import { Input } from './Input';
import { Button } from './Button';

import logo from '../assets/bitSIZE-logo.svg';

const StyledLoginForm = styled('div', {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
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
        margin: '$1 0',
        width: '100%'
    },

    'h4': {
        color: '$mauve8',
        fontWeight: 600,
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
                <Input icon={<FontAwesomeIcon icon={faEnvelope} />} placeholder="Username or email" onChange={(val:string) => console.log(val)}/>
                <Input icon={<FontAwesomeIcon icon={faLock} />} placeholder="Password" type="password" />
                <Button variant="primary">
                    Log In
                </Button>
                <h4>or</h4>
                <Button className="google-login" variant="primary" outlined onClick={() => signIn('google',{ callbackUrl: `${window.location.origin}/bits`})}>
                    <FontAwesomeIcon icon={faGoogle} size="xs" /> Google
                </Button>
            </Form>
        </StyledLoginForm>
    )
}