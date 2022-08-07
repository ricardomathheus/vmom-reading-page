import './App.css'
import { ReadingPage } from './templete/reading-page'

function App() {
  const ReadingPageContent = 
  <div className="texto">
  <p style={{textAlign: 'center'}}className=""><strong>Gêneros textuais, gêneros literários e literatura</strong>
  </p>
  <p style={{textAlign: 'center'}} className="highlighted-text"><strong>Introdução: Gêneros textuais, gêneros
          literários e movimentos literários.</strong></p>

  <p style={{textAlign: 'center'}}>&nbsp;</p>

  <p>Olá, comunidade Spirit!&nbsp;</p>

  <p className="highlighted-text">Sejam todos bem-vindos(es) a primeira aula do eixo temático: gêneros textuais,
      gêneros literários e literatura!&nbsp;</p>

  <p className="highlighted-text">Ao final desta aula, esperamos que vocês sejam capazes de compreender os
      <strong>conceitos, elementos</strong> e <strong>diferenças</strong> que compõem os gêneros textuais,
      gêneros literários e movimentos literários.&nbsp;</p>

  <p className="highlighted-text">&nbsp;</p>

  <p><strong>Gêneros textuais</strong></p>

  <p>&nbsp;</p>

  <p>De forma simplificada, <em>gênero textual </em>é uma classificação utilizada para agrupar textos que
      possuem características e funções sociais específicas, inseridas em um contexto comunicativo.&nbsp;</p>

  <p>&nbsp;</p>

  <p>Em outras palavras, ao escrever uma fanfic/história sobre romance, o texto apresentará uma estrutura,
      linguagem e conteúdo específicos, ou seja, <em>características específicas</em> que os diferenciam de
      outros gêneros, como por exemplo, uma crônica, uma notícia ou até mesmo uma lista de compras. Perceba
      como a linguagem, estrutura e o conteúdo temático utilizado para elaborar os textos inseridos nos
      gêneros citados são diferentes entre si e nos ajudam a identificar facilmente o gênero ao qual o texto
      está inserido. Legal, não é?&nbsp;</p>

  <p>&nbsp;</p>

  <p>Além disso, os gêneros textuais são bastante variados e flexíveis. Isso significa que novos gêneros
      baseados nos existentes podem surgir conforme uma nova necessidade comunicativa. Também é comum que um
      texto se enquadre em mais de um gênero, assim como ocorre nas fanfics/histórias publicadas por vocês
      aqui no Spirit. Nesse contexto, temos outra forma de categorização dos gêneros fundamentada no tipo
      textual. São eles: textos argumentativo, descritivo, expositivo, injuntivo, prescritivo e
      narrativo.&nbsp;</p>

  <p>&nbsp;</p>

  <p>No texto narrativo, estão inseridos os gêneros: romance e novela, contos, fábulas, e crônicas; os quais
      utilizamos em nossas fanfics/histórias e serão objetos de estudo das próximas aulas.&nbsp;</p>

  <p>&nbsp;</p>

  <p><strong>Gêneros literários</strong></p>

  <p>&nbsp;</p>

  <p>Assim como o próprio nome indica, os gêneros literários classificam apenas os <strong>textos
          literários</strong>, ao contrário dos gêneros textuais, que classificam <strong>qualquer tipo de
          texto</strong>.&nbsp;</p>

  <p>&nbsp;</p>

  <p>Em seu agrupamento, esse tipo de gênero considera as características formais comuns presentes nas obras
      literárias. Ou seja, a construção básica de cada gênero baseado na semelhança estrutural entre os textos
      do mesmo gênero, e na visão artística de quem escreve. Isto é, por meio da adoção de uma linguagem
      poética, visando o repasse de sentimentos, críticas a sociedade e criação de histórias próprias&nbsp;
  </p>

  <p>&nbsp;</p>

  <p>Atualmente, eles são divididos em: gênero lírico, gênero épico ou narrativo e gênero dramático.
      Aprenderemos um pouco mais sobre eles nas próximas aulas.</p>

  <p>&nbsp;</p>

  <p><strong>Movimentos literários</strong></p>

  <p>&nbsp;</p>

  <p>Os movimentos literários nada mais são do que a junção de escritores e obras, de acordo com o período
      histórico em que estão inseridos. E assim como nos <strong>gêneros textuais</strong> e nos
      <strong>gêneros literários</strong>, a categorização dessas obras também ocorre com base em
      características e estilos semelhantes. Sendo assim, podemos considerar o período da obra, o tipo de
      produção literária, suas principais características e os principais escritores como fatores que irão
      definir os movimentos literários.&nbsp;</p>

  <p>&nbsp;</p>

  <p className="highlighted-text">Os movimentos literários são divididos em: trovadorismo, humanismo,
      quinhentismo, classicismo, barroco, arcadismo, romantismo, realismo, naturalismo, simbolismo,
      pré-modernismo, modernismo e literatura contemporânea. Muita coisa não é? Mas fiquem tranquilos, pois
      iremos explorar cada um deles nas próximas aulas!&nbsp;</p>

  <p>&nbsp;</p>

  <p className="highlighted-text">Então é isso por hoje, pessoal. Até a próxima aula!&nbsp;</p>
</div>

  return (
    <ReadingPage content={ReadingPageContent}/>
  )
}

export default App
