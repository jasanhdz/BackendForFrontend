import gravatar from '../gravatar';

describe('Gravatar function', () => {
  it('Should return gravatar default url', () => {
    const email = 'j@san.com';
    const gravatarDefaultImage = 'https://gravatar.com/avatar/bc0abafb0ca69600f35fa2a8d5e3729f';
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });

});