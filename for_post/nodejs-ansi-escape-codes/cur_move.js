
process.stdout.write('\u001b[47m');
process.stdout.write('\u001b[30m');
process.stdout.write('..........\n');
process.stdout.write('..........\n');
process.stdout.write('..........\n');
process.stdout.write('..........\n');
process.stdout.write('\u001b[s');
// move up 4 and back 5
process.stdout.write('\u001b[4A');
process.stdout.write('\u001b[5D@');

// reset colors
process.stdout.write('\u001b[39m\u001b[49m');
// restore cursor
process.stdout.write('\u001b[u');

/*
@.........
..........
..........
..........
*/