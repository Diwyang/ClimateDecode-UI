import styled from 'styled-components';

const StyledLandingPage = styled.div<{
  $backround?: string;
  $backroundheight?: string;
}>`
  background: url(${(props) =>
    props.$backround ? props.$backround : '/image-12.png'});
  background-repeat: no-repeat;
  padding-bottom: 40px;
  background-size: 100%
    ${(props) => (props.$backroundheight ? props.$backroundheight : '400px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 40px;
  padding-bottom: 40px;
  .page-content {
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
  }
  .calulate-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    margin-left: 25px;
  }
  .event-list li {
    border: none !important;
    h4 {
      font-size: 24px;
      font-weight: 400;
    }
  }
  .rectangle {
    float: right;
    padding: 25px 0;
  }
  .frame {
    align-items: center;
    background-color: #dfff20;
    border-radius: 12px;
    display: inline-flex;
    gap: 10px;
    padding: 0px 24px;
    position: relative;
  }
  .frame .text-wrapper {
    font-weight: 500;
    letter-spacing: 0;
    line-height: 40px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  .advantage-box {
    background-color: #d8f1f4;
    border-radius: 20px;
    padding: 20px;
    margin: 10px 0;
    .icon-container {
      padding: 0 0 30px 10px;
    }
  }
  .card-with-image {
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    padding: 10px 0 0 0 !important;
    height: 100%;
  }
`;

export default StyledLandingPage;
