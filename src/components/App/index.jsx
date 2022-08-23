import Title from './../Title';
import Table from './../Table';

import './style.sass';

const App = () => (
  <section className="section-cart">
    <div className="container section-cart__container">
      <Title title="Goodies Cart" />
      <Table />
    </div>
  </section>
);

export default App;