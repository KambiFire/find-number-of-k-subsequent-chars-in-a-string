import "./styles.css";

export default function App() {
  function find_str(X, Y) {
    const char1 = Y[0],
      char2 = Y[1],
      char3 = Y[2];
    let idxOfChar1 = X.indexOf(char1);

    let count = 0;
    let end = false;

    do {
      console.log("idx of char1 = " + idxOfChar1);
      if (idxOfChar1 > -1) {
        get_subs();
        idxOfChar1 = X.indexOf(char1, idxOfChar1 + 1);
      } else end = true;
    } while (!end);

    function get_subs() {
      for (let i = idxOfChar1 + 1; i < X.length; i++)
        if (X[i] === char2) if (X.indexOf(char3, i + 1) > -1) count += 1;
    }

    return count;
  }

  const X = "ABCABCDEADBFC";
  const Y = "ABC";

  console.log(find_str(X, Y));

  return (
    <div className="App">
      <h1>Find number of K subsequent chars in a string</h1>
      <h2>String to search: '{X}'</h2>
      <h2>Chars to find: '{Y}'</h2>
      <hr />
      <h2>No. of subsequent chars = {find_str(X, Y)}</h2>
    </div>
  );
}
