import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  margin: auto;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0);
  backdrop-filter: blur(20px);
`

const ModalPopUp = styled.div`
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 70%;
  height: 70%;
  background-color: aliceblue;
  border-radius: 16px;
  overflow: scroll;
  animation:ease-in-out 3s ;
`

const Close = styled.p`
  align-items: end;
  width: 30px;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  font-size: 24px;
  font-weight: 600;
  &:hover{
    cursor: pointer;
  }
`

const ReviewComment = styled.p`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 10px 30px 0px;
  font-size: 24px;
  border-bottom: 0.5px solid gray;
  padding-bottom: 60px;
  line-height: 1.5;
`
export {Container, ModalPopUp, Close, ReviewComment}