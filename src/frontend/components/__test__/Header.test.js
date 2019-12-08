import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../Header';

describe('Header component', () => {
  test('Match Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });

});