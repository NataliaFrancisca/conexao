const ErrorMessage = (props: { errors: Array<string> }) => {
  return (
    <article className="component__error">
      <ul>
        {props.errors.map((error, key) => (
          <li key={key}>{error}</li>
        ))}
      </ul>
    </article>
  );
};

export default ErrorMessage;
