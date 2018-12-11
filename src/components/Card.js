import React from "react";
import styled from "styled-components";

const Card = props => {
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    width: 250px;
    height: 100%;
  `;

  const CardImage = styled.img`
    display: block;
    border-style: none;
  `;

  const CardBody = styled.div`
    flex: 1;
    padding: 1.25rem;
  `;

  const CardTitle = styled.h5`
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
  `;

  const CardText = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
  `;

  const CardButton = styled.button`
    cursor: pointer;

    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;

    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  `;

  return (
    <CardContainer>
      <CardImage src={props.img} />
      <CardBody>
        <CardTitle>Card Component</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardButton>Go</CardButton>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
