Basic pseudocode

Don't worry about TypeScript yet. Think about the algorithm:

left = 0
right = array.length - 1

while left <= right:

    mid = middle of left and right

    if array[mid] == target:
        return mid

    if array[mid] < target:
        left = mid + 1

    else:
        right = mid - 1

return -1

The entire algorithm is basically:

Look at the middle → decide which half can contain the answer → throw away the other half.