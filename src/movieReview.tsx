


async function GoodOrBad(text: string) {
    
  // Api that tells me that whatever is in it is good or bad. it takes 1000 letters in it. Await tells us to await the response 
  const response = await fetch(`https://api.api-ninjas.com/v1/sentiment?text=${encodeURIComponent(text.slice(0,1000))}` , 
    {headers: {
      //X-api-key is the "password" to use the api
     'X-api-key': "oyNyTyeZMZBoVzbbPjgJ3w==dw4JTtOHoNab0wiU",
     'content-type': 'application/json'
      }
    }
  );
  const json = await response.json()
  console.log(json)
  return json;
}

export default GoodOrBad

