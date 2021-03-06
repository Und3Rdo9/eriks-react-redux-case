import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import ProductImageAnimation from './ProductImageAnimation';

const ProductWrapper = styled.article`
  position: relative;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProductHeader = styled.header`
  position: relative;
  background: #1a5ca3;
  color: white;

  width: 100%;
  padding-left: 10px;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;
  overflow: visible;

  @media screen and (min-width: 1200px) {
    padding-left: 220px;
    padding-top: 0;
    min-height: 300px;
  }

  h1 {
    color: white;
    animation: ${fadeIn} 2s ease-in-out 0s;

    @media screen and (max-width: 1199px) {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }
`;

const ProductBody = styled.section`
  padding: 50px 10px;
`;

const Product = ({ product, startingStyles, animationCallback }) => {
  const { x, y } = startingStyles;

  return (
    <ProductWrapper>
      <ProductImageAnimation
        image={`http://via.placeholder.com/200x200?text=Product+no.${
          product.id
        }`}
        x={x}
        y={y}
        alt="placeholder"
        animationCallback={animationCallback}
      />
      <ProductHeader>
        <h1>{`Productdetails no. ${product.id}`}</h1>
      </ProductHeader>

      <ProductBody>
        <p>{product.joke}</p>
        <h6>categoriën: </h6>
        {product.categories.length
          ? product.categories.map(cat => cat)
          : 'Geen categoriën'}
      </ProductBody>
    </ProductWrapper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    joke: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  startingStyles: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  animationCallback: PropTypes.func.isRequired
};

export default Product;
