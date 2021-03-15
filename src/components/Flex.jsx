import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Layout = styled(Flex)`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`