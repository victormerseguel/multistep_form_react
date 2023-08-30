const UserForm = ({ data, action }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => action("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu nome"
          required
          value={data.email || ""}
          onChange={(e) => action("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
