// Initialize Module
const FourSquareConst = {}

FourSquareConst.searchOptions = []
FourSquareConst.sortOptions = []
FourSquareConst.filterOptions = []

FourSquareConst.categories = {
  restaurant: 13065,
  bars: 13003,
  breakfast: 13028,
  coffee_tea: 13032,
  dessert: 13040,
}



export default FourSquareConst

// For Categories have multi-select checkboxes for
// Restaurants, Bars, Breakfast, Coffee/Tea, and
// Dessert with only Restaurants pre-selected.

// 13065 Dining and Drinking > Restaurant
// 13003 Dining and Drinking > Bar
// 13028 Dining and Drinking > Breakfast Spot
// 13032 Dining and Drinking > Cafe, Coffee, and Tea House
// 13040 Dining and Drinking > Dessert Shop
// 13002 Dining and Drinking > Bakery
