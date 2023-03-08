### Summary

This is a simple react challenge to format a phone as the user types to the below format
(123)456-7890. The phone number also has a max length and the input should only allow digits.

### Learnings

- I struggled to solve the issue on my own and had to look for inspiration outside.
- - Difference between String(value) and value.toString();
    - value.toString() will cause an error if value is null or undefined. String(value) should not.
      - String(null) —> “null”
- String.replace can be used for immutable because it returns a new string
- For handling string format such as phone number or credit card use slice method to return the formatted string.
- Use maxLength attribute to limit the input size, comes handy
- Add required field for accessibility
- To allow only certain characters in the input in react can be done in two ways
  -         - Use regex to replace with nothing when the disallowed characters are entered.
- input:invalid psudeo selector in css
