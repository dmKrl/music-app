import './App.css';
import BarPlayer from './components/BarPlayer';
import CenterBlockFilter from './components/CenterBlockFilter';
import SearchInput from './components/SearchInput';
import SectionMusicList from './components/SectionMusicList';
import SectionsNav from './components/SectionsNav';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <SectionsNav />
            <div className="main__centerblock centerblock">
              <SearchInput />
              <CenterBlockFilter />
              <SectionMusicList />
            </div>
            <SideBar />
          </main>
          <BarPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
