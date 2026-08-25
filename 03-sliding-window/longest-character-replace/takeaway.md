left = 0
answer = 0
maxFrequency = 0
frequency = {}

for right from 0 to s.length - 1:

    add s[right] to frequency

    update maxFrequency

    windowSize = right - left + 1

    replacementsNeeded = windowSize - maxFrequency

    if replacementsNeeded > k:
        remove s[left] from frequency
        left++

    answer = max(answer, windowSize)

return answer