# Which sorting algorithm would you choose?

# 1 - Sort 10 schools around your house by distance:

Insertion - It's really fast on small sorts or nearly sorted, it's easy to code, and it has the space complexity of O(1)

# 2 - eBay sorts listings by the current Bid amount:

Radix or Counting Sort - They can be used only on integer numbers. Knowing that the bids will always be numbers and fixed integers, only in this case we can beat that "mathematically impossible" O(n log n) time complexity of merge and quick sort, and be even faster than that.

# 3 - Sport scores on ESPN

Quick sort - There is decimal numbers, different formats etc. In this case we can use quick sort, since it has a better space complexity than merge sort. Quick sort has it O(n log n), while merge has O(n) space complexity. There might be a risk for the worse case scenario for time complexity though, with quick sort.

# 4 - Massive database (can't fit all into memory) needs to sort through past year's user data

Merge sort - We will not be sorting in memory, because the data is so big, but since the data is so big we would be worried about the performance. so, don't want the worse case of quick sort. With merge sort no matter what we will get time complexity of O(n log n).

# 5 - Almost sorted Udemy review data needs to update and add 2 new reviews

Insertion - We are assuming that all the previous big data is already sorted, and all we are doing is adding two new reviews. For pre-ordered and very small lists, it's gonna perform better than any other sorting algorithm.

# 6 - Temperature Records for the past 50 years in Canada

Radix and Counting sort?? (If there ar eno decimal numbers and other data. But if they are more accurate and have decimals, we can't do it with radix sort and counting sort.) In that case:

Quick Sort - So we can do save memory on that time complexity.

# 7 - Large user name database needs to be sorted. Data is very random.

Merge? - Since we don't have enough information here. Maybe, merge sort, if we have enough memory.

Quick sort? - If the memory of the database isn't that large, in that case to save memory.

# 8 - You want to teach sorting for the first time

Bubble sorting, or selection sort. These two we will probably never use in real life applications. They are there now only for the sake of learning.
