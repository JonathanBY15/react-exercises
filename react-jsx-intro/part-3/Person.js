const MAX_LENGTH = 6;

function Person({ age, hobbies, name }) {
  const voteText = age >= 18
      ? "please go vote!"
      : "you must be 18.";
      
  const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, MAX_LENGTH)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesLIs}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}