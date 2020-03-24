import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '700px', position: 'relative'}} >
			<Layout fixedHeader>
					<Header className="header-color " title={<span><span style={{ color: '#fff' }}></span><strong><Link  className="home" to="/">My Portfolio </Link></strong></span>}>
							<Navigation className="menu">
									<Link className="menu" to="/aboutme">About Me</Link>
									<Link className="menu" to="/contacts">Contacts</Link>
									<Link className="menu" to="/resume">Resume</Link>
									<Link className="menu" to="/projects">Projects</Link>
							</Navigation>
					</Header>
					<Drawer title={<Link  style={{ color: '#000', textDecoration: 'none' }} to="/">My Portfolio </Link>} className="header-color">
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
