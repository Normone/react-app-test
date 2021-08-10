import './App.scss';
import './reset.css';

import CommentsList from './assets/components/commentsList';

// const user = {avatar: './img/a.jpeg', userName: 'nickname', message: 'kvakvakva'};
const users = [{id: '000', avatar: './img/a.jpeg', userName: 'nickname', message: 'kvakvakva'},
{id: '001', avatar: './img/a.jpeg', userName: 'nickname1', message: 'kvaskvakva'},
{id: '002', avatar: './img/a.jpeg', userName: 'nickname2', message: 'kvasskvakva'},
{id: '003', avatar: './img/a.jpeg', userName: 'nickname3', message: 'kvassskvakva'},]

function App() {
  return (
    <div id="container">
      
      <CommentsList users={users}></CommentsList>
    </div>
    
  );
}

// console.log(document.getElementById('root'));

export default App;
