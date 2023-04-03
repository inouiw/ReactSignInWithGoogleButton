import React from 'react';
import "@fontsource/roboto/500.css";

// Based on
// https://developers.google.com/identity/gsi/web/tools/configurator
// https://codepen.io/kn0wn/pen/oNXxRVx
// https://developers.google.com/identity/sign-in/web/build-button
// https://developers.google.com/identity/branding-guidelines

const button : React.CSSProperties = {
  borderRadius: '4px',
  backgroundColor: '#fff',
  border: '1px solid #dadce0',
  color: '#3c4043',
  cursor: 'pointer',
  fontFamily: 'Roboto, Verdana',
  fontWeight: '500',
  fontSize: '14px',
  height: '40px',
  letterSpacing: '0.25px',
  padding: '0 12px',
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  width: 'auto'
};

const buttonInnerDiv : React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  height: '100%',
  position: 'relative',
  width: '100%'
};

const iconWrapper : React.CSSProperties = {
  height: '18px',
  marginRight: '8px',
  minWidth: '18px',
  width: '18px'
};

export interface SignInWithGoogleButtonProps {
  /**
   * The button text.
   */
  text?: string;

  /**
   * The button onclick event handler.
   */
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;

  /**
   * Styles to apply to the button element.
   */
  buttonStyle?: React.CSSProperties;
}

const SignInWithGoogleButton = ({
  text = 'Sign in with Google',
  onClick,
  buttonStyle
} : SignInWithGoogleButtonProps) => {
  const mergedButtonStyle = {...button, ...buttonStyle};
  return (
    <button style={mergedButtonStyle} onClick={onClick} id='sign-in-with-google-button'>
      <div style={buttonInnerDiv}>
      <div style={iconWrapper}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
          <g>
            <path fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
            </path>
            <path fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
            </path>
            <path fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
            </path>
            <path fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
            </path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </g>
        </svg>
      </div>
      <p>{text}</p>
      </div>
    </button>
  );
}

export default SignInWithGoogleButton;
