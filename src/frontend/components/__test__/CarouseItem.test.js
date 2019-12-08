import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import CarouselItem from '../CarouselItem';

describe('Carousel component', () => {
  test('Match Snapshot', () => {
    const carousel = create(
      <ProviderMock>
        <CarouselItem />
      </ProviderMock>,
    );
    expect(carousel.toJSON()).toMatchSnapshot();
  });

})