# Memory Heap

---

# Call Stack

Calls func that are executed synchronosly from top to bottom

# Web API

SetTimeOut(), 2000

If there are operations inside a SetTimeOut func will be moved here
After the time finishes, we have a callback.
ie after 2 sec it will be moved in the Callback Queue.

# Callback Queue

Callback()

Here will be moved any callback of SetTimeOut. Callbacks are called after functions in the Call Stack. It is the Event Loop below that will call the callbacks, after checking the Call Stack is empty

# Event Loop

Here the Event Loop checkc if the Call Stack is empty, and if it's empty, it will move any callback from the Callback Queue to the Call Stack.
Then the callback will run and execute the code inside.
