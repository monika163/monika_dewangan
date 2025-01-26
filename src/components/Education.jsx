import styled from 'styled-components';
import { Container } from '../styles/globalStyles';



const Education = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>Education</Heading>

          <h3>Bachelor of Engineering in Information Technology </h3>
          <Text>
          Chhattisgarh Swami Vivekanand Technical University, Bhilai
          </Text>

         <br></br>
          <h3>Higher Secondary </h3>
          <Text>
          Chhattisgarh Board of Secondary Education Raipur
          </Text>

        </TextWrapper>
      
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: space-between;
  padding: 0 0;

  @media (max-width: 768px) {
    display: block;
    text-align: left;
  }
`;

const TextWrapper = styled.div`
  padding: 0em 0;

 
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;

const IconLink = styled.a`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 0.6em;
`;

const Text = styled.p`
  @media (max-width: 768px) {
    width: 80%;
    // margin: 0 auto;
    text-align : left
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
`;

export default Education;
