
import './App.css';
import img from './assets/Cartaz.png';
function App() {
  return (
    <div className="App">
     
      <div className="img_container" >
      <img className="img" src={img} alt="Logo" />
        <h1 className="text_maya">Maya Angelou</h1>
      </div>
      <div className="Text"> 
        <span className="pink">*</span>
        <h1>Escritora, Poeta e Ativista </h1>
        <span className="pink">*</span>
      </div>
      <div className="Text">
        <h3>4 de abril de 1928 - 28 de maio de 2014</h3>
      </div>
      <div className="white">
        <p>Maya Angelou, nascida Marguerite Annie Johnson, é mais conhecida por sua grande autobiografia : "I Know Why the Caged Bird Sings" (Eu Sei Porque os Pássaros Engaiolados Cantam), publicada em 1969. Ela publicou seis outros livros autobiográficos desde então, com o volume final lançado em 2002. Ela foi uma poeta prolífica e seus poemas eram muitas vezes sobre a experiência de mulheres afro-americanas, o espírito humano e a justiça social para todos.</p>
      </div>
      <div className = "Text"><span className="pink">*</span><h1>Você sabia?</h1><span className="pink">*</span></div>
      <div className="card_container">
        <div className="card white"><p>Como ativista, ela ajudou a organizar e produzir eventos de arrecadação históricos para lutas de direitos civis nas décadas de 50 e 60. As lutas de afro-americanos também se refletiram em sua prolífica carreira de escritora.</p></div>
        <div className="card white"><p>Como autora, sua obra se estendeu à escrita para o cinema, televisão e teatro. Influenciada por tradições orais afro-americanas , apresentou sua poesia através de leituras públicas, gravações de áudio e documentários.</p></div>
        <div className="card white"><p>Seu nome foi cunhado pelo seu irmão mais velho Bailey Jr. Ele estava tentando dizer "minha irmã" (my sister) quando ela era um bebê, mas acabou dizendo "maya sister".</p></div>
      </div>
      <div className="footer_container">
        <div className="white footer_link"><a>https://www.poetryfoundation.org/poets/maya-angelou</a></div>
        <div className="white footer_link"><a>https://www.ducksters.com/biography/authors/mayaangelou.php</a></div>
      </div>
    </div>

  );
}

export default App;
