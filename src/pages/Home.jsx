import BlogList from '../components/BlogList';
import Experience from '../components/Experience';
import Freelance from '../components/Freelance';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import SpotifyStatus from '../components/SpotifyStatus';
import { data } from '../data';
import Education from '../components/Education';
import Contact from './Contact';

const Home = () => {
  const { projects, skills } = data;

  return (
    <div>
      <Intro />
      <Education />
      <Experience />
      <Skills skills={skills} />
      <ProjectList projects={projects.slice(0, 3)} />
      {/* <BlogList /> */}
      {/* <Education /> */}
      {/* <Freelance />
      <SpotifyStatus /> */}
      <Contact />
    </div>
  );
};
export default Home;
