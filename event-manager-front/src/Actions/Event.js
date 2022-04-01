export const createEvent = (name, description, endDate, startDate) => {

  const request = new Request(`http://localhost:8000/api/v1/events`, {

      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, description, endDate, startDate})
  });
  return fetch(request)
      .then(res => {
          if (res.status === 201) {
              return res.json();
          }
      })
      .catch(error => {
          console.log(error);
      });
}

export const getAllEvents = () => {
  const request = new Request(`http://localhost:8000/api/v1/events`, {
      method: "get",
  })
  return fetch(request)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          }
      })
      .catch(error => {
          console.log(error);
      });
}
