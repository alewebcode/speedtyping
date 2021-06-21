import styled  from 'styled-components';


export const Container = styled.div`
  padding:30px;
  width: 100%;
  display:flex;
  
`;


export const Content = styled.div`
  margin: 200px auto;
  padding:10px;
  display:flex;
  align-items: center;
  flex-direction: column;
  max-width: 800px;


  button{
    padding:5px;
    border: 0;
    border-radius: 20px;
    cursor: pointer;
    font-size:16px;

    transition: filter 0.5s;
    background: #ed7a4d;
    color:#FFF;

    &:hover {
      filter: brightness(1.2);
    }

  }

 
`

export const Title = styled.div`
  margin-bottom: 15px;
  font-size: 24px;
  color: #ed7a4d;
  width: 100%;
  display:flex;
  justify-content: center;
  font-weight: 700;

`;