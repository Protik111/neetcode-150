left = 0
right = last index

while left <= right:

    mid = middle

    if nums[mid] == target:
        return mid


    if left half is sorted:

        if target is inside left half:
            right = mid - 1
        else:
            left = mid + 1


    else:  ← right half is sorted

        if target is inside right half:
            left = mid + 1
        else:
            right = mid - 1


return -1