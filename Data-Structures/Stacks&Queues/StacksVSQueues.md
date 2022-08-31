# Stacks

When we talk about stacks, we think of our browser history. For example we visit these pages:

# google

# youtube

# udemy

Begin from the last line below:

5.  Then we visit Twitter, and it will be on top, but then we change our minds and we go back. So, we delete Twitter and we go back on youtube. Then if we go back again, we delete and go to udemy, and then back again, we delete and go back to google.
6.  youtube will be placed then on top
7.  udemy =>> will be placed on top of google
8.  google =>> will be placed on the stack since it's first

So, stacks has a top and a bottom, and we can build it with either:

# Arrays

# Linked Lists

# Choose Arrays or Linked Lists for Stacks? Pros & cons:

With Stacks, both arrays and Linked Lists will work pretty well. In the end it depends on what you prefer and what your priorities are. You should understand pros and cons of arrays and pros and cons of Linked Lists. Without going in much detail, one major thing is that arrays allow something called "cache locality" which makes them technically faster when accessing item in memory because they're next to each other. versus Linked Lists that has them all scattered all over memory. also Linked List has extra memory because they have to hold on those pointers, but on the other hand they have more dynamic memory, and we can keep adding things to the Linked List versus an array where you have either a static array or dynamic array that has a certain amount of memory, and as soon it reaches its limit, it's going to double up their memory and create new space for it somewhere in memory.

So, think about what sort of operations you are going to do and what your priorities are, to decide.

# Queues

Lets say we have a queue. We create a waitlist app.

The first person that shows up is Emilian. Then John shows up. Then David. Then Anna.

Emilian -- John -- David -- Anna

We can again implement queues with:

# Arrays

# Linked Lists

# Choose Arrays or Linked Lists for Queues? Pros & cons:

Contrary of Stacks, with Queues, you would never want to build an array with it! Ideally, you want to implement them with Linked Lists. Why?
Beucause, if we want to remove an item from the list of queues, with arrays, we need them to shift all the others index after removing one item. Which is a O(n) operation or linear time.
With Linked Lists, we remove the first item for example, we change the Head to the next one, the tail is the same, and nothing else changes. It is a O(1) operation or a constant time.
