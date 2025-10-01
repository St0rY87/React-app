function Message() {
  const name = "Sveta!";
  if (name) return <div>Hello {name} </div>;
  else return <div>Hello Dima!</div>;
}

export default Message;
