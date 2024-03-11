import './App.css';
import Main from './compontents/main-content/main';
import Notification from './compontents/notification/notification';
import SidebarNav from './compontents/sidebar/sidenav';

function App() {
  return (
    <div className='flex'> 
        <SidebarNav/>
        <div className="flex flex-col xl:flex-row bg-content-gray w-screen">
        <Main/>
        <Notification/>
        </div>
    </div>

  );
}

export default App;
