# bubbleSort

1. Description

The bubble sort algorithm is a sorting algorithm that sorts numbers by iteration starting from the first position. At each iteration it will check if the previous number is greater than the current one. In case if yes, it will swap the values. It will iterate as long as all the elements are sorted.

2. Pseudo-Code

procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1 inclusive do
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                swapped = true
            end if
        end for
        n = n - 1
    until not swapped
end procedure

3. Best-case scenario

The best case happens when the numbers are already sorted. Then we will only to go through all the numbers only one time and see that it is actually sorted. Therefore:

--> O(n)

4. Worst-case scenario

The worst case happens when each number is greater than the one following it. In this case, we will have to loop through the whole set of numbers as many times as there are numbers. Therefore:

--> O(n * n) = O(n²)

# quickSort

1. Description

The quickSort algorithm sorts numbers by dividing each time the set of numbers by two and sorting each subset separately. To initialize the sorting, a pivot value is randomly selected among the numbers. The first partition will move the pivot to a position where all smaller numbers of the whole set will be to its left and all greater numbers of the whole set will be to its right. Then it will recursively sort the number to the left and the numbers to the right and it does so by partitioning these subsets again and again.

2. Pseudo-Code

Lomuto partition scheme

algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p – 1)
        quicksort(A, p + 1, hi)

algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo - 1
    for j := lo to hi - 1 do
        if A[j] ≤ pivot then
            i := i + 1
            swap A[i] with A[j]
    swap A[i+1] with A[hi]
    return i + 1

3. Best-case scenario

Quicksort's best case occurs when the partitions are as evenly balanced as possible: their sizes either are equal or are within 1 of each other. The former case occurs if the subarray has an odd number of elements and the pivot is right in the middle after partitioning, and each partition has (n-1)/2 elements. The latter case occurs if the subarray has an even number n of elements and one partition has n/2 elements with the other having (n/2)-1. In either of these cases, each partition has at most n/2, and the tree of subproblem sizes looks a lot like the tree of subproblem sizes for merge sort, with the partitioning times looking like the merging times (see explanation on the merge sort best-case and worst case scenario). In this case

--> Θ(n * log(n)).

4. Worst-case scenario

When quicksort always has the most unbalanced partitions possible, then the original call takes c * n time for some constant c, the recursive call on n-1 takes c * (n-1) time, the recursive call on n-2 elements takes c * (n-2) time, and so on. In this case,

--> Θ(n²).

# mergeSort

1. Description

The Merge Sort algorithm is a divide and conquer algorithm that sorts numbers. It starts by dividing the whole set of numbers into individual elements; it does so by splitting every time the set of number into two equal sets. It will continue until every set is made of only one element. No sorting happens until then. Once the sets consist of individuals elements, it will start to build back the whole set by comparing elements against each other and sorting the elements upon each building step.


2. Pseudo-Code

function merge_sort(list m)
    // Base case. A list of zero or one elements is sorted, by definition.
    if length of m ≤ 1 then
        return m

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    var left := empty list
    var right := empty list
    for each x with index i in m do
        if i < (length of m)/2 then
            add x to left
        else
            add x to right

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)

function merge(left, right)
    var result := empty list

    while left is not empty and right is not empty do
        if first(left) ≤ first(right) then
            append first(left) to result
            left := rest(left)
        else
            append first(right) to result
            right := rest(right)

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while left is not empty do
        append first(left) to result
        left := rest(left)
    while right is not empty do
        append first(right) to result
        right := rest(right)
    return result


3. Best-case scenario and Worst-case scenario

Best-case wand worst-case are identics for the merge sort algorithm.

The divide step takes constant time Θ(1), regardless of the subarray size. After all, the divide step just computes the midpoint q of the indices p and r.

The conquer step, where we recursively sort two subarrays of approximately n/2 elements each, takes some amount of time, but we'll account for that time when we consider the subproblems.

The combine step merges a total of n elements, taking Θ(n) time. If we think about the divide and combine steps together, the Θ(1) running time for the divide step is a low-order term when compared with the Θ(n) running time of the combine step. So let's think of the divide and combine steps together as taking Θ(n) time.

We can think of the running time of mergeSort on an n-element subarray as being the sum of twice the running time of mergeSort on an (n/2)-element subarray (for the conquer step) plus cn (for the divide and combine steps—really for just the merging).

Now we have to figure out the running time of two recursive calls on n/2 elements. Each of these two recursive calls takes twice of the running time of mergeSort on an (n/4)-element subarray (because we have to halve n/2) plus c * n/2 to merge. We have two subproblems of size n/2 and each takes c * n/2 time to merge, and so the total time we spend merging for subproblems of size n/2 is  2 * c * n/2 = cn.

Each of the subproblems of size n/2 recursively sorts two subarrays of size (n/2)/2 or n/4. Because there are two subproblems of size n/2, there are four subproblems of size n/4. Each of these four subproblems merges a total of n/4 elements, and so the merging time for each of the four subproblems is cn/4. Summed up over the four subproblems, we see that the total merging time for all subproblems of size n/4 is 4⋅cn/4 = cn.

We know how long merging takes for each subproblem size. The total time for mergeSort is the sum of the merging times for all the levels. If there are l levels in the tree, then the total merging time is l⋅cn. So what is l ? We start with subproblems of size n and repeatedly halve until we get down to subproblems of size 1. The answer is l = lg n + 1. For example, if n = 8, then lg n + 1 = 4, and sure enough, the tree has four levels: n = 8, 4, 2, 1. The total time for mergeSort, then, is c*n *(lg n + 1). When we use big-Θ notation to describe this running time, we can discard the low-order term and the constant coefficient, giving us a running time of Θ(nlgn).

# insertionSort

1. Description

The insertion sort algorithm is a sorting algorithm that checks every number to its precedents in order to find the location where to insert it (between a smaller and a greater number). It does so by starting at index 1 and checking element at index 0. If element 0 is greater than element 1, a swap will be carried out and the first two elements will be sorted. The next iteration checks number at index two against the first two ordered numbers (index 0 and 1) and inserts itself at the right index in order for the three elements to be sorted. And iteration goes on until reaching the end of the set of numbers.


2. Pseudo-Code

for i = 1 to length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
end for

3. Best-case scenario

The best case scenario would happen when a set of number is already sorted. In this case, it will have to loop through each number only one time. Therefore, Θ is equal to Θ(n).

4. Worst-case scenario

The worst case scenario happens when each element on the right is smaller than its element on the left (case of a complete unordered list). In this case, it will have to loop to one element at the first iteration, then two elements at the second iteration and so on until n. It can be summarized as follows:

1 + 2 + 3 + .... + (n-2) + (n-1) = n * (n + 1) / 2 --> Therefore Θ is equal to Θ(n²)


# selectionSort

1. Description

The selection Sort algorithm is a very basic sorting algorithm that is taught for its simplicity but which is inefficient due to its Θ of Θ(n²) for any scenarios. It works by starting with the first number of the set of numbers and then loop through the whole set. It will identify the minimum value and swap it with the value at the first position. At each iteration, it increments its starting position by one and loop again through the set of numbers to find the minimum and swap it with the starting position.


2. Pseudo-Code

for j ← 1 to n-1
  smallest ← j
  for i ← j + 1 to n
    if A[ i ] < A[ smallest ]
      smallest ← i
Exchange A[ j ] ↔ A[ smallest ]


3. Best-case scenario and worst case scenario

Selection sort will always have a Θ of Θ(n²) as it will run through the whole set of numbers n-1 time at the first iteration, then (n-2) times at the second iteration and so on until reaching one iteration. Therefore:

(n-1) + (n-2) + ... + 2 + 1 = n * (n + 1) / 2 --> Therefore Θ(n²)

