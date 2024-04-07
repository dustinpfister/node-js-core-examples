# crypro-create-cipher-iv

I would like to make at least one if not more node v20 friendly scripts for the create-cipher-iv method of the crypto module. Just a basic tool that will spit things out to the standard output.

## Getting started with the coder.js file

For the coder.js file I just wanted a simple script that I can use to cipher or decipher some text that I give to the script by way of standard input. This way I can use any linux command as a way to create the content to enctypt or to provide content to decrypt. For example when it comes to just working this out in the command line alone without creating any kind of file I count use the echo bash built in command.

```bash
$ echo -n "my-secret" | node coder.js "password" "cipher"
f3e712af14a68f629aad2c5cfd5452d3
$ echo -n "f3e712af14a68f629aad2c5cfd5452d3" | node coder.js "password" "decipher"
my-secret
```

## Using cat and redirection

The echo command is a good way to just show how soemthing works from the command line, however when it comes to real use I will have a text file that I want to cipher or decipher. For this task I can use the cat command to read a text file, and then pipe that into node using the coder script. I can then use redirection to write the output to a new text file.

Say I have a text.txt file with the this content:

```
I would like to cipher this
```

I can use the cat command to read that text file, and then pipe that into the script, then use redireciton to create a code.txt file. I can then also once again use the cat command to read the code file, and then pipe that into the script. This time I can use the decipher positional argument and get the decipherd text again.

```
$ cat text.txt | node coder.js "password" "cipher" > code.txt
$ cat code.txt | node coder.js "password" "decipher"
I would like to cipher this
```

## openssl command, and using algorithms

By default I am using AES-256-CBC as the algorithm to use, along with a null salt, for ciphering and deciphering text. In some cases I might want to use some other algorithm, a salt other than null, or be explicit in what is being used with these things.

To get a list of algorithms the openssl command can be used with the list subcommand.

```
$ openssl list -cipher-algorithms 
```

For this coder.js script I will want to stick with ones like aaa-nnn-bbb where nnn is 128, 192, or 256 as this is what the script needs to get the key length.

So for this example I am using [Camellia](https://en.wikipedia.org/wiki/Camellia_%28cipher%29) with a 256-bit key 

```bash
$ cat text.txt | node coder.js "password" "cipher" "CAMELLIA-256-CFB8" "salt"
316ca81499ffc8b37343472b81680123d843ddc6fec2d8cc73f967
```

