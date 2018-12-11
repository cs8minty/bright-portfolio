import React from "react";
import styled from "styled-components";

const Jumbotron = props => {
  const Box = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.125);
    background-image: url(${props.img});
  `;

  const JumboTitle = styled.h3``;

  return (
    <Box>
      <JumboTitle>Hello World</JumboTitle>
    </Box>
  );
};

export default Jumbotron;
