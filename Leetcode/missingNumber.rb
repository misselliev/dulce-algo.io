# frozen_string_literal: true

# Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

# Example 1:

# Input: [3,0,1]
# Output: 2

def missing_number(nums)
  total = ((nums.length + 1) * nums.length) / 2
  total - nums.inject(0, :+)
end
