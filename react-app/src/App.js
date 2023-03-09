import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props, props.title);  // 로그 찍기
  return  <header>
  <h1><a href="/">{props.title}</a></h1>
</header>
}

function Nav(){
  return <nav>
  <ol>
    <li><a href="/react/1">html</a></li>
    <li><a href="/react/2">css</a></li>
    <li><a href="/react/3">js</a></li>
  </ol>
</nav>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function App() {
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav></Nav>
      <Article title="welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
