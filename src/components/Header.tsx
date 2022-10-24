interface SpanColor {
  color: string;
}

const green: SpanColor = {
  color: "rgb(11 107 80)",
};
const orange: SpanColor = {
  color: "rgb(250 83 31)",
};
const purple: SpanColor = {
  color: "rgb(141 6 158)",
};

function Header() {
  return (
    <>
      <h1>
        <span style={green}> M</span>emory
        <span style={orange}> G</span>ame
      </h1>
      <h4>
        <span style={purple}> with</span>
        <span style={orange}> M</span>usical
        <span style={green}> I</span>nstruments
      </h4>
    </>
  );
}

export default Header;
