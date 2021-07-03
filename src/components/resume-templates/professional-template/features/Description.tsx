import React from "react";
import styled from "styled-components";
import { PhotoElement } from "../../../elements/PhotoElement";

const RoundedImage = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  float: left;
  shape-outside: circle();
  margin-right: 20px;
  margin-bottom: 5px;
  border: 0.5px solid ${(props) => props.theme.fontColor};
`;

export function Description({ description, photo }: any) {
  const image = photo && (
    <PhotoElement>
      <RoundedImage src={photo} />
    </PhotoElement>
  );

  return (
    <>
      {image}
      {description}
    </>
  );
}
