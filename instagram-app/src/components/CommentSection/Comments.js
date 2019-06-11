import React from "react";
import styled from 'styled-components';
import "./CommentSection.css";

const StylecommentsDiv  = styled.div ` 
  display: flex;
`; 

const StyleUsernameP = styled.p `
  font-weight: bold;
  padding-right: 4px;
  padding-bottom: 10px;
`;

function Comments(props) {
  const { commentData } = props;
  return (
    <StylecommentsDiv>
      <StyleUsernameP>{commentData.username}</StyleUsernameP>
      <p>{commentData.text}</p>
    </StylecommentsDiv>
  );
}

export default Comments;
