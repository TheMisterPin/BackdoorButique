const titleHandler = (title: string, length: number = 20): string => {
    if (title.length <= length) return title;
    return `${title.slice(0, length)}...`;
  }
  
  export { titleHandler };