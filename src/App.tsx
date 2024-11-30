import { useSiteDetails, useTemperatureData } from "./hooks/useDataFetch";

function App() {
  const { data, loading, error } = useSiteDetails('ND00001095');
  const { data: t, loading: l, error: e } = useTemperatureData(
    'ND00001095',
    '2021-03-01',
    '2021-04-01'
  );
  console.log(data)
  console.log(t)

  return (
    <>
      <div>
        Hello
      </div>
    </>
  )
}

export default App
