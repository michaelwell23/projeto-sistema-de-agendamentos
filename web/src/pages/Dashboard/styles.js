import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;

  background: red;
  overflow: hidden;
  background: url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38')
    no-repeat center/ cover;
  border-radius: 10px;
  border: 1px solid #bbb;
  box-shadow: 5px 10px 25px #aaa;

  strong {
    display: block;
    color: ${props => (props.available ? '#fff' : '#ecb965')};
    font-size: 20px;
    font-weight: normal;
  }

  opacity: ${props => (props.past ? 0.6 : 1)};
  text-decoration: ${props => (props.past ? 'line-through' : 'none')};

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#fff' : '#ecb965')};
  }
`;
