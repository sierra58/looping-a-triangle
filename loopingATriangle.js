/*
1. Put one # in line.
2. When the character count (line.length) in the line is less than or equal to 7,
3. Print (console.log) the line once.
4. Add another # to the line
5. Loop until there are seven #'s in the line (line.length = 7)
*/

for (let line = "#"; line.length <= 7; line += "#") {
    console.log(line);
}