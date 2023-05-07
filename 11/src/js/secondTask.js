function sortByMax(arr) {
    arr.sort((prev, next) => next.health - prev.health);
    return arr;
  }
  
export default sortByMax;
  