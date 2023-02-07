export const updateFilterAction = (updateFilter, filterType) => {
  updateFilter.updateCurrentFilter(filterType);
  updateFilter.updateOffset(0);
  updateFilter.fetchGifyResults(filterType, 0);
};

export const incrementOffset = (updateFilter, currentFilter, offset) => {
    let newOffset = offset +15;
    updateFilter.updateOffset(newOffset);
    updateFilter.fetchGifyResults(currentFilter, offset+15);
};

export const decrementOffset = (updateFilter, currentFilter, offset) => {
    let newOffset = offset -15;
    updateFilter.updateOffset(newOffset);
    updateFilter.fetchGifyResults(currentFilter, offset-15);
};