import {
  FC,
  useEffect,
  useRef
} from 'react';

import { SignUpProps } from '../../types/headerTypes/SignUpProps';

import {
  PopupWrapper,
  PopupInner,
  PopupTitle,
  PopupCloseButton,
  PopupForm,
  PopupLabel,
  PopupInput,
  PopupButton
} from './styleHeader.style';

export const SignUp: FC<SignUpProps> = ({ Click, onRegistration }) => {

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const body = document.querySelector('body');

    if (popupRef.current && body) {
      popupRef.current.classList.add('popup-enter');
      body.classList.add('popup-open');
    }

    return () => { if (body) body.classList.remove('popup-open'); };

  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
    };

    const formData = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
    };

    try {
      const response = await fetch('http://localhost:3002/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();

      if (data.status === 'success') {
        console.log('Registration successful:', data);
        onRegistration(formData.name);
      } else console.error('Registration failed:', data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <PopupWrapper>

      <PopupInner>

        <PopupTitle>
          Registration
        </PopupTitle>

        <PopupCloseButton
          onClick={Click}
        >
          X
        </PopupCloseButton>

        <PopupForm
          onSubmit={handleSubmit}
        >

          <PopupLabel>

            Name:

            <PopupInput
              type="text"
              name="name"
              maxLength={5}
              required
            />

          </PopupLabel>

          <PopupLabel>

            Email:

            <PopupInput
              type="email"
              name="email"
              required
            />

          </PopupLabel>

          <PopupLabel>

            Password:

            <PopupInput
              type="password"
              name="password"
              minLength={6}
              maxLength={12}
              required
            />

          </PopupLabel>

          <PopupButton
            type="submit">

            Register

          </PopupButton>

        </PopupForm>

      </PopupInner>

    </PopupWrapper>
  );
};
