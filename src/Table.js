function Table({ people }) {
  return (
    <>
      <h4 mt>All Feedbacks</h4>
      <table class="table">
        <thead>
          <tr class="table-dark">
            <th scope="col">Name</th>
            <th scope="col">Form Name</th>
            <th scope="col">Phone Field</th>
            <th scope="col">Email Field</th>
          </tr>
        </thead>
        {people.map((person) => {
          const { name, email, phone, id } = person;
          return (
            <tbody key={id}>
              <tr>
                <td>{name}</td>
                <td>Aromatic bar</td>
                <td>{phone}</td>
                <td>{email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
export default Table;
