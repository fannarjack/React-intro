


async function GoodOrBad(text: string) {
  /*allt em er kommentað út tók ég úr þessu*/ 
  //const [charecters, setChartecters] = useState([]);
  //useEffect(()=>{

    

      const response = await fetch(`https://api.api-ninjas.com/v1/sentiment?text=${encodeURIComponent(text.slice(0,1000))}` , 
        {headers: {
        'X-api-key': "oyNyTyeZMZBoVzbbPjgJ3w==dw4JTtOHoNab0wiU",
        'content-type': 'application/json'
        }
      }
      );
      const json = await response.json()
      console.log(json)
      return json;
    }

    

  //},[])

  

export default GoodOrBad

