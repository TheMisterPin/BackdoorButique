const titleHandler = (title: string, length: number = 17): string => {
    if (title.length <= length) return title;
    return `${title.slice(0, length)}...`;
  }
  
  export { titleHandler };