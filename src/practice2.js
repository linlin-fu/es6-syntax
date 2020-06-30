const inject = (items, sections) => {
  let temp = [...items].map(item => ([item]));
  sections.forEach(({content, index}) => {
    temp[index] = [content, ...temp[index]]
  })
  return temp.flat();
}
export {inject};
