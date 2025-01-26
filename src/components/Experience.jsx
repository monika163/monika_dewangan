import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/globalStyles';
import { motion } from 'framer-motion';

const data = [
  {
    company: 'Ayodhya Webosoft Pvt. Ltd.',
    role: 'React Js Developer',
    fromDate: new Date('2020-05-18'),
    toDate: new Date('2021-07-03'),
    tasks: [
      'Implemented responsive UI for the website .',
      'Understand the Complete Source Code Flow of the Application.',
      'Develop User interfaces Modern Rich Internet Applications with the latest Front-End Technologies.',
      'Strong Expertise with HTML, CSS, React JS and writing cross browser compatible code.',
      'Used Router for implementing routing in the application.',
      'Used props and state to Interact components with each other.',
      'Hand on and implements complex React Js applications, components.'
    ],
  },
  {
    id: 2,
    company: 'Capgemini India Pvt. Ltd. ',
    role: 'React Js Developer',
    fromDate: new Date('2021-07-09'),
    toDate: new Date('2023-02-28'),
    tasks: [
       'User interfaces Modern Rich Internet Applications with the latest Front-End Technologies.',
       'Creating reusable React components using hooks.',	
      'Creation and Integration of REST API.',      
      'Performing client side validation efficiently',
      'Developed and maintained the front-end functionality of websites.',  
      'Proficient in best practices, accessibility, and responsive design for ensuring an outstanding user experience.',

    ],
  },
  {
    id: 3,
    company: 'Tata Consultancy Services – TCS',
    role: 'React Js Developer (Mern Stack )',
    fromDate: new Date('2023-03-13'),
    toDate: new Date(),
    tasks: [
      'Built responsive, user-friendly web applications using React and delivering high-quality user experiences across various devices and screen sizes.',
      'Wrote unit and integration tests with Jest to ensure coverage and reduce bugs.',
      'Troubleshot and resolved backend issues, enhancing system performance by identifying root causes and implementing efficient fixes.',
      'Conducted thorough testing and debugging to ensure reliable application functionality, consistently enhancing code quality.',
      'Collaborated with cross-functional teams to define project requirements and technical specifications, improving project efficiency and communication.',
    ],
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Experience = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Work Experience</SectionTitle>

        <TimeLine>
          {data
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((ex) => (
              <TimeLineItem key={ex.id}>
                <ExperieceHeader>
                  <h3>
                    {ex.role}, {ex.company}
                  </h3>

                  <small>
                    {months[ex.fromDate.getMonth()] +
                      ' ' +
                      ex.fromDate.getFullYear()}{' '}
                    -{' '}
                    {ex.toDate.toDateString() === new Date().toDateString() ? (
                      'Present '
                    ) : (
                      <span>
                        {months[ex.toDate.getMonth()] +
                          ' ' +
                          ex.toDate.getFullYear()}{' '}
                      </span>
                    )}
                    ({monthDiff(ex.fromDate, ex.toDate)}{' '}
                    {monthDiff(ex.fromDate, ex.toDate) > 1 ? 'Months' : 'Month'}
                    )
                  </small>
                </ExperieceHeader>

                <TaskList>
                  {ex.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </TaskList>
              </TimeLineItem>
            ))}
        </TimeLine>
      </motion.div>
    </Container>
  );
};

export default Experience;

const TimeLine = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

const TimeLineItem = styled.li`
  padding: 0 0 2em 2em;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }

  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

const ExperieceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: -10px;

  h3 {
    font-weight: 400;
  }

  small {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const TaskList = styled.ul`
  list-style-type: circle;

  li {
    color: var(--para-gray-color);
  }
`;
