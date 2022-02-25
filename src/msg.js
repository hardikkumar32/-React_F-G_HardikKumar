function msg({ setmsg }) {
  return (
    <div>
      <h1>Your response has been recorded</h1>
      <button onClick={() => setmsg(false)}>Back</button>
    </div>
  );
}
export default msg;
