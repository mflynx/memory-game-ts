interface SpanColor {
  color: string;
}
const purple: SpanColor = {
  color: "rgb(141 6 158)",
};
const green: SpanColor = {
  color: "rgb(11 107 80)",
};
const orange: SpanColor = {
  color: "rgb(250 83 31)",
};

function Header() {
  return (
    <h1>
      <span style={purple}>M</span>usic
      <span style={green}> M</span>emory
      <span style={orange}> G</span>ame
    </h1>
  );
}

export default Header;
