import axios from "axios";

async function LeagueStart(keyword: string) {
  const response = await axios({
    // url: `https://jsonplaceholder.typicode.com/comments?_page=0&_limit=20`,

    url: `https://j7c208.p.ssafy.io:8080/api/league?field=id&keyword=${keyword}&page=0&size=10000`,

    // url: `https://j7c208.p.ssafy.io:8080/api/league?field=id&page=0&size=10000`,
    method: "get",
    headers: {}
  })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        return res.data.getLeagues;
      }
      return [];
    })
    .catch(err => {
      console.log(err);
    });
  return response;
}

export default LeagueStart;
