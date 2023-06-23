function List({ user }) {
    return (
      <div>
        <h2>{user.precio}</h2>
        <p>{user.almacen}</p>
        <p>{user.descripcion}</p>
        <img src={"/style/image/" + user.img} alt="" />
      </div>
    );
  }
  
  export default List;
