import { Container, Typography } from "@material-ui/core";
import sortBy from "lodash.sortby";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import Highlight from "./components/Highlight/Highlight";
import Summary from "./components/Summary/Summary";
import 'moment/locale/vi';
import '@fontsource/roboto';
moment.locale('vi')

function App() {
  const [countries, setCountries] = useState([])
  const [slectedCountryId, setSlectedCountryId] = useState('')
  const [report, setReport] = useState([])
  useEffect(() => {
    getCountries().then((res) => {
      if (res.status === 200 && res.data) {
        const countries = sortBy(res.data, 'Country')
        setCountries(countries)
        setSlectedCountryId('vn')
      }
    })
  }, [])
  const handleOnChangeSelector = (e) => {
    setSlectedCountryId(e.target.value)

  }
  useEffect(() => {
    if (slectedCountryId && countries && countries.length > 0) {
      const { Slug } = countries.find(country => country.ISO2.toLowerCase() === slectedCountryId)

      // call api
      getReportByCountry(Slug).then((res) => {
        if (res.status === 200 && res.data) {
          //delete last item form res.data

          res.data.pop()
          setReport(res.data)
        }
      })
    }
  }, [countries, slectedCountryId])
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h2" component='h2'>
        Số liệu COVID-19
      </Typography>
      <Typography >
        {moment().format('LLL')}
      </Typography>
      <CountrySelector
        countries={countries}
        handleOnChangeSelector={handleOnChangeSelector}
        value={slectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} slectedCountryId={slectedCountryId} />
    </Container>
  );
}

export default App;
