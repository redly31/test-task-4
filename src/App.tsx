import ParamEditor from "./ParamEditor";

function App() {
  const params = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
  ];
  const model = {
    paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" },
    ],
    colors: [],
  };

  return (
    <>
      <ParamEditor params={params} model={model}/>
    </>
  );
}

export default App;
