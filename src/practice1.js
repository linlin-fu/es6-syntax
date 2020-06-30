const parseData = (input) => {
  const {data, column} = input;
  let columnName = column.map(({name}) => name)
  let result = []
  data.map(d => {
    result = [...result,
      Object.assign(...columnName.map((k, i) => ({[k]: d[i]})))]
  })
  return result;
}

export {parseData};
