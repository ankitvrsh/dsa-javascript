# Introduction to Multi Tasking

NOTE: Attach the image of diagram.

## How multi tasking is handled in a single CPU core

If we talk wrt a single core, then there is nothing like multi-tasking that actually goes behind the scenes.

CPU maintains something like a Queue which contains multiple processes (Let’s say, P1, P2 and P3).  
Then in a single core, its not like process P1 is getting executed parallel to process P2.

In a multi-core system, it can happen that process P1 in one core is getting executed parallel to process P2 in other core.

Let’s say:  
Process P1 contains 1000 instructions to be executed.  
Process P2 contains 5000 instructions to be executed.

In a single core, CPU picks process P1 and it will execute some instructions of it, let’s say 300 and then CPU will send the process P1 in the waiting state (Inside Partially executed swapped out processes).

Then let’s say, CPU picks process P2 and executes 800 instructions of it and again it will send process P2 inside waiting area.

Then let’s say, CPU picks process P3 and it will do the same thing for P3 as well.

And when every processes are in the waiting area, CPU swaps in all the processes again into the Ready Queue and then it will again repeat the same cycle of process execution. (This time processes can be picked in a different order).

### Why CPU does this?

Because a single core cannot execute everything in parallel.  
It is not having the capability to execute things in parallel.  
The parallel capability actually comes when there are multiple cores or there is a concept of threads or there are other ways also in which people generally handle this.  
But at one point of time, a single core can only execute one instruction from one process.

But the main thing is that the modern CPUs are so fast that in 1 second, they can execute approximately 10^8 instructions or more.

Let’s say, total instructions in all the above three processes P1, P2 and P3 are 10K.  
This 10K instructions is nothing in front of 10^8 instructions executing in 1 second.

### What CPU does?

It executes some instructions from one process and then it puts that process very quickly into the waiting area, then picks another process and executes some instructions of it very quickly and puts it also into waiting area and so on.

All this processing happens so fast that we feel like its actually multi-tasking.

Also how many instructions the CPU is going to execute for the currently picked process depends on multiple things.  
For Example, let’s say P2 is a high-priority task that if the CPU doesn’t execute this task very quickly, then the whole system can crash.  
It means, this Process P2 needs to get executed faster and should get the chance first.

Let’s say, all the processes are now in the waiting area, now there are multiple ways in which we can pick a process.  
The process that went to the waiting area first is the most waiting process, we should pick that.  
But maybe, there is a high priority process, then that high priority process should be picked first.

That’s why, when our process is going to be picked up, how many instructions are going to be executed when process gets the chance for execution in this cycle, how many number of times it will be picked for complete execution, we can never determine.

That’s why, when we run a piece of code in Node.js, we get different times for different executions.

So, in case of single core of a CPU, there is nothing like multitasking going on behind the scenes.

If there are multiple cores, then in every core of the CPU, that same cyclic execution of processes that we discussed above, is happening in parallel.  
Means, in every core, there is a Ready Queue and other things and every core is technically a CPU that processes the instructions.

So, if there are multiple cores present, then there is actual parallel processing going on.

That is why, we cannot rely on analysing an algorithm based on machines.  
Because, even if we have a fast machine and we analyse two algorithms on the same machine, there can be a case that our Algo2 was better than Algo1, but Algo2 got the chance of execution in CPU late.  
And every time it got the chance, only very less number of instructions were getting executed because there was some higher priority task that came.

That’s why, analysing our algorithms based on a particular machine is the worst way that we can go for.

This kind of analysis is called as Experimental Analysis.

In Experimental Analysis, we actually see how much time the algorithm is taking to execute and then only we execute.  
And based on that, we make the decision that which algorithm to pick and which one not to pick.  
But this Experimental Analysis is not the best way to analyse the algorithms.
