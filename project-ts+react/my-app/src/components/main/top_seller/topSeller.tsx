import { FC } from 'react';
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import { CardSeller } from './cardSeller';

import {
  SliderContainer,
  SlideItem,
  TopSellerBlock,
  TopSellerName,
  Text
} from './topSellerStyle.style';

import { settings } from './settings';
import { Sellers } from './seller';

export const TopSeller: FC = () => {
  return (

    <TopSellerBlock>

      <TopSellerName>

        <Text>
          Top Seller
        </Text>

      </TopSellerName>

      <SliderContainer>

        <Slider {...settings}>

          {Sellers.map((seller, index) => (

            <SlideItem key={index}>

              <CardSeller
                Text={seller.text}
                Src={seller.src}
                Alt={seller.alt}
              />

            </SlideItem>

          ))}

        </Slider>

      </SliderContainer>
      
    </TopSellerBlock>
  );
};
