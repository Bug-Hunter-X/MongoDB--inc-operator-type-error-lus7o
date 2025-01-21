# MongoDB $inc Operator Type Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment or decrement a numeric field by a specified value. However, if the value provided is not a number, it will result in an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator.  The value being incremented should be a number, but instead, a string or another data type might be provided causing an error or unexpected behavior.

## Solution
The solution involves ensuring that the value passed to the `$inc` operator is always a number.  Type checking or explicit conversion to numbers will prevent this issue.
