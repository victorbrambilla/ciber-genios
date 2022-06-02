import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 80px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
  }
  @media (max-width: 768px) {
    padding: 40px;
    .header {
      flex-direction: column;
    }
  }
`;
export default Container;
