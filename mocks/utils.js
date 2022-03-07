function getFilteredGoods(arr, status) {
  return arr.filter((item) => {
    return item.status === status;
  });
}
