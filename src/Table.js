function Table() {
  const newpeople = JSON.parse(window.localStorage.getItem("form"));
  return (
    <>
      <h4 className="grey-text text-darken-2">All Feedback</h4>
      <table class="table">
        <thead>
          <tr class="table-dark">
            <th scope="col">Name</th>
            <th scope="col">Form Name</th>
            <th scope="col">Phone Field</th>
            <th scope="col">Email Field</th>
            <th scope="col">Radio Buttons</th>
          </tr>
        </thead>
        {newpeople.map((person) => {
          const { name, email, phone, id } = person;
          return (
            <tbody key={id}>
              <tr>
                <td>{name}</td>
                <td>Aromatic bar</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>Excellent</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
export default Table;
