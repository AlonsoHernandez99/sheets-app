import Spreadsheet from "react-spreadsheet";

export default function Sheet() {
  const data = [];

  const setRows = () => {
    let array2 = [];
    for (let j = 1; j < 19; j++) {
      array2.push({ value: "" });
    }
    for (let i = 0; i < 30; i++) {
      data.push(array2);
    }
  };

  setRows();

  return (
    <div>
      <Spreadsheet data={data} />
    </div>
  );
}
