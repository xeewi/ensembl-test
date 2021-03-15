import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`

export const FlexCenter = styled(Flex)`
  align-items: center;
`

export const Layout = styled(Flex)`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BodyLayout = styled(Layout)`
  min-height: 600px;
`