import './style.sass';

const DeleteBtn = ({ id, deleteGoogie }) => (
  <button className="close-control" type="button" onClick={ () => deleteGoogie(id) }>
    <span className="close-control__item" />
  </button>
);

export default DeleteBtn;