const Hello = () => {
  const useState = React.useState;
  const [message, setMessage] = useState("");
  if (message === "") {
    setMessage("Hello, world!");
  }

  return <div className="message">{message}</div>;
};
