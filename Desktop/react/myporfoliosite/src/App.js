import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '1000px', position: 'relative'}}>
			<Layout fixedHeader>
					<Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
							<Navigation>
									<Link to="/aboutme">About Me</Link>
									<Link to="/contacts">Contacts</Link>
									<Link to="/resume">Resume</Link>
									<Link to="/projects">Projects</Link>
							</Navigation>
					</Header>
					<Drawer title="Title">
							<Navigation>
									<Link to="/aboutme">About Me</Link>
									<Link to="/contacts">Contacts</Link>
									<Link to="/resume">Resume</Link>
									<Link to="/projects">Projects</Link>
							</Navigation>
					</Drawer>
					<Content >	
						< Main />
					</Content>
			</Layout>
	</div>
  );
}

export default App;
