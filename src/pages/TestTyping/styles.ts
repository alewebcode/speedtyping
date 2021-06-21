import styled  from 'styled-components';


export const Container = styled.div`
  padding:30px;
  width: 100%;
  display:flex;
  
`;


export const Content = styled.div`
  margin:0 auto;
  padding:10px;
  display:flex;
  align-items: center;
  flex-direction: column;

 
  max-width: 800px;

 
`

export const Input = styled.input<{error:boolean}>`

    margin-top: 10px;
    padding:5px;
    border:0;
    border-radius: 20px;
    height: 30px;
    outline: none;
    color: ${props => (props.error ? 'red' : 'blue')};


`